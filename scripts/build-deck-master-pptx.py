#!/usr/bin/env python3
"""Builds assets/zuper-deck-master.pptx — the Zuper master deck, one file.

What is in the file: 36 slides, the same 18 layouts in each of the two
contrast schemes (primary = white cover with orange interiors, secondary =
orange cover with white interiors), filled with placeholder copy. Every shape
is an ordinary slide shape, so all of it can be restyled, moved or deleted:
drop the fourth person from a team row, or the half of the deck you don't need.

Rules baked in: nothing dark ever sits on the orange gradient, the Zuper
logomark sits in the bottom-right corner of every slide and nothing else,
dark is reserved for Zuper Sense, and the full-bleed section break and Glass
slides use real gradient fills that fade to nothing (a stack of flat
semi-transparent rectangles leaves a visible hard edge).

    python3 scripts/build-deck-master-pptx.py

Requires python-pptx (pip3 install python-pptx).
"""
import copy, os, pathlib
from PIL import Image
from pptx import Presentation
from pptx.util import Emu, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.opc.constants import RELATIONSHIP_TYPE as RT
from pptx.parts.slide import SlideMasterPart, SlideLayoutPart
from pptx.oxml.ns import qn
from lxml import etree

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "zuper-deck-master.pptx"

# The deck is authored on a 1920x1080 grid; 1px = 6350 EMU, 1px = 0.5pt.
def E(px): return Emu(int(round(px * 6350)))
def P(px): return Pt(px * 0.5)

C = dict(white="FFFFFF", ink="191919", primary="FD5000", text2="4B5563",
         muted="888888", banner="FCE9E1", field="E7E0D6", context="7A7268",
         peach="F8F0EB", warm="F8F5F0", senseOrange="FF8B5A", senseText="A1A1AA",
         senseCard="141417", senseLine="2A2A30", divider="E6E6E6", card="F0F0F0",
         okBg="E7F6EC", okFg="1E854B", warnBg="FEF3DC", warnFg="A66A00",
         infoBg="E8F0FE", infoFg="1A56DB")
GRAD = [(0, "1C0A06"), (30000, "7E1C0B"), (64000, "D43A14"), (100000, "F2864F")]
DISPLAY, BODY = "Aptos Display", "Aptos"

# Author the 18 layouts per scheme as real PowerPoint slide layouts (so New
# Slide offers them) instead of plain slides. Off by default: PowerPoint asks to
# repair a deck built this way, and a file that opens beats a nicer New Slide
# menu. The machinery below is kept for another attempt — set MASTERS=1 to build
# it and probe the result before shipping.
MASTERS = bool(int(os.environ.get("MASTERS", "0")))

# ── the two sanctioned schemes ────────────────────────────────────────────
# Nothing dark-on-orange: on the gradient every mark is white, at full or
# reduced opacity. On white interiors the accent is brand orange.
ORANGE_INTERIOR = dict(
    scheme="Zuper white cover", tag="white cover, orange interiors",
    ground="orange", fg=C["white"], dim=C["white"], dim_a=None, faint_a=40,
    accent=C["white"], accent_a=100, rule=C["white"], rule_a=40,
    eyebrow=C["white"], eyebrow_a=85, mark_white=True,
    panel=C["white"], panel_a=14, quote_a=40, chart_card=True,
)
WHITE_INTERIOR = dict(
    scheme="Zuper orange cover", tag="orange cover, white interiors",
    ground=C["white"], fg=C["ink"], dim=C["text2"], dim_a=None, faint_a=None,
    accent=C["primary"], accent_a=100, rule=C["field"], rule_a=None,
    eyebrow=C["primary"], eyebrow_a=100, mark_white=False,
    panel=C["warm"], panel_a=None, quote_a=100, chart_card=False,
)


class Book:
    """The presentation, plus the machinery to author real slide masters.

    python-pptx cannot create masters or layouts, and layout shape trees have
    no add_shape()/add_textbox(). So every layout is drawn on a throwaway
    slide with the normal API, then its shapes are moved into a fresh layout
    part and the throwaway slide is dropped.
    """

    def __init__(self):
        self.prs = Presentation()
        self.prs.slide_width, self.prs.slide_height = E(1920), E(1080)
        self.base_master = self.prs.slide_masters[0]
        self.blank = self.prs.slide_layouts[6]
        self._scratch = []

    # ── package plumbing ──────────────────────────────────────────────────
    def _add_part(self, cls, tmpl, content_type, payload):
        pkg = self.prs.part.package
        return cls(pkg.next_partname(tmpl), content_type, pkg, payload)

    def clone_master(self, name):
        """A second master needs its own theme part; masters do not share one.

        The theme is an opaque blob part, so it is cloned through its bytes."""
        src = self.base_master.part
        theme_src = next(r.target_part for r in src.rels.values() if r.reltype == RT.THEME)
        theme_el = etree.fromstring(theme_src.blob)
        theme_el.set("name", name)          # ASCII only, see the module docstring
        theme = self._add_part(type(theme_src), "/ppt/theme/theme%d.xml",
                               theme_src.content_type, etree.tostring(
                                   theme_el, xml_declaration=True,
                                   encoding="UTF-8", standalone=True))

        el = copy.deepcopy(src._element)
        el.find(qn("p:cSld")).set("name", name)
        lst = el.find(qn("p:sldLayoutIdLst"))
        for child in list(lst):
            lst.remove(child)
        master = self._add_part(SlideMasterPart, "/ppt/slideMasters/slideMaster%d.xml",
                                src.content_type, el)
        master.relate_to(theme, RT.THEME)
        rId = self.prs.part.relate_to(master, RT.SLIDE_MASTER)
        ids = self.prs.part._element.get_or_add_sldMasterIdLst()
        sm = etree.SubElement(ids, qn("p:sldMasterId"))
        sm.set("id", str(2147483648 + len(ids)))
        sm.set(qn("r:id"), rId)
        return master

    def new_layout(self, master, name):
        el = copy.deepcopy(self.blank.element)
        el.set("type", "cust")
        el.set("preserve", "1")
        el.set("showMasterSp", "0")          # the base master's placeholders stay off
        el.find(qn("p:cSld")).set("name", name)
        tree = el.find(qn("p:cSld")).find(qn("p:spTree"))
        for child in list(tree):
            if child.tag not in (qn("p:nvGrpSpPr"), qn("p:grpSpPr")):
                tree.remove(child)
        part = self._add_part(SlideLayoutPart, "/ppt/slideLayouts/slideLayout%d.xml",
                              self.blank.part.content_type, el)
        part.relate_to(master, RT.SLIDE_MASTER)
        rId = master.relate_to(part, RT.SLIDE_LAYOUT)
        lst = master._element.find(qn("p:sldLayoutIdLst"))
        li = etree.SubElement(lst, qn("p:sldLayoutId"))
        li.set("id", str(2147483649 + len(lst)))
        li.set(qn("r:id"), rId)
        return part

    def scratch_slide(self):
        """A slide to draw on. It is authored against the stock Blank layout and
        re-pointed at its own Zuper layout once that layout exists."""
        return self.prs.slides.add_slide(self.blank)

    def drop_slide(self, slide_id):
        """Bin a slide once its shapes have been moved out. Addressed by id: a
        python-pptx Slide proxy is recreated on every access, so the object is
        not a stable handle."""
        sldIdLst = self.prs.slides._sldIdLst
        for sldId in list(sldIdLst):
            if sldId.id == slide_id:
                sldIdLst.remove(sldId)
                self.prs.part.drop_rel(sldId.rId)

    def drop_office_master(self):
        """Bin the Office master so New Slide shows only the Zuper masters."""
        base_rId = self.prs.part.relate_to(self.base_master.part, RT.SLIDE_MASTER)
        ids = self.prs.part._element.get_or_add_sldMasterIdLst()
        for sm in list(ids):
            if sm.get(qn("r:id")) == base_rId:
                ids.remove(sm)
        self.prs.part.drop_rel(base_rId)

    @staticmethod
    def rehome_images(src_part, dst_part, elements):
        """Pictures carry r:embed ids that only mean something in their own part."""
        for el in elements:
            for blip in el.iter(qn("a:blip")):
                rId = blip.get(qn("r:embed"))
                if not rId:
                    continue
                image_part = src_part.rels[rId].target_part
                blip.set(qn("r:embed"), dst_part.relate_to(image_part, RT.IMAGE))


class Deck:
    """Draws the 18 layouts for one contrast scheme into `book`."""

    def __init__(self, book, interior):
        self.book = book
        self.prs = book.prs
        self.T = interior
        self.master = book.clone_master(interior["scheme"]) if MASTERS else None
        self._open = None          # (slide, label, notes)
        self._ph = []              # copy blocks, mirrored onto the layout as placeholders
        self._chrome = []          # ground / accent bar / logomark: the layout owns these

    # ── low-level drawing ─────────────────────────────────────────────────
    @staticmethod
    def _solid(parent, hexc, alpha=None):
        sf = etree.SubElement(parent, qn("a:solidFill"))
        clr = etree.SubElement(sf, qn("a:srgbClr")); clr.set("val", hexc)
        if alpha is not None:
            a = etree.SubElement(clr, qn("a:alpha")); a.set("val", str(int(alpha * 1000)))
        return sf

    @staticmethod
    def _clear_fill(spPr):
        for t in ("a:solidFill", "a:gradFill", "a:noFill", "a:blipFill", "a:pattFill"):
            for n in spPr.findall(qn(t)):
                spPr.remove(n)

    def gradient(self, shape, stops=GRAD, angle_deg=45):
        """Multi-stop linear gradient; python-pptx only exposes two opaque stops.

        stops: (position 0-100000, hex[, alpha 0-100]). A stop carrying an
        alpha is how a scrim fades to nothing — stacking flat semi-transparent
        rectangles instead leaves a visible hard edge where they meet.
        """
        spPr = shape._element.spPr
        self._clear_fill(spPr)
        gf = etree.SubElement(spPr, qn("a:gradFill")); gf.set("rotWithShape", "1")
        lst = etree.SubElement(gf, qn("a:gsLst"))
        for stop in stops:
            pos, hexc, alpha = (tuple(stop) + (None,))[:3]
            gs = etree.SubElement(lst, qn("a:gs")); gs.set("pos", str(pos))
            c = etree.SubElement(gs, qn("a:srgbClr")); c.set("val", hexc)
            if alpha is not None:
                a = etree.SubElement(c, qn("a:alpha")); a.set("val", str(int(alpha * 1000)))
        lin = etree.SubElement(gf, qn("a:lin"))
        lin.set("ang", str(int(angle_deg * 60000))); lin.set("scaled", "0")
        for tag in ("a:ln", "a:effectLst"):
            n = spPr.find(qn(tag))
            if n is not None:
                spPr.remove(n); spPr.append(n)
        return shape

    def scrim(self, s, stops, angle_deg=90):
        """Full-bleed gradient wash over a photo. 90 = top-to-bottom, 0 = left-to-right."""
        shp = self.gradient(self.rect(s, 0, 0, 1920, 1080), stops, angle_deg)
        return self.chrome(shp)

    def chrome(self, shape):
        """Mark a shape as the layout's, not the slide's. Reserved for the ground,
        the accent bar and the logomark: anything a deck author might want to
        move or delete has to stay on the slide, because layout shapes cannot be
        selected there."""
        self._chrome.append(shape._element)
        return shape

    def rect(self, s, x, y, w, h, hexc=None, alpha=None, radius=None):
        shp = s.shapes.add_shape(
            MSO_SHAPE.ROUNDED_RECTANGLE if radius else MSO_SHAPE.RECTANGLE,
            E(x), E(y), E(w), E(h))
        shp.line.fill.background()
        shp.shadow.inherit = False
        if radius:
            shp.adjustments[0] = min(0.5, radius / min(w, h))
        spPr = shp._element.spPr
        self._clear_fill(spPr)
        if hexc:
            sf = self._solid(spPr, hexc, alpha)
            spPr.remove(sf)
            spPr.insert(list(spPr).index(spPr.find(qn("a:prstGeom"))) + 1, sf)
        else:
            etree.SubElement(spPr, qn("a:noFill"))
        shp.text_frame.word_wrap = True
        return shp

    @staticmethod
    def outline(shape, hexc, width_px=2, dash=None):
        shape.line.color.rgb = RGBColor.from_string(hexc)
        shape.line.width = P(width_px * 2)
        if dash:
            el = shape._element.spPr.find(qn("a:ln"))
            d = etree.SubElement(el, qn("a:prstDash")); d.set("val", dash)
        return shape

    def txt(self, s, x, y, w, h, runs, size=30, color=None, bold=False, font=BODY,
            align=PP_ALIGN.LEFT, spacing=1.2, anchor=MSO_ANCHOR.TOP, caps=False,
            tracking=None, alpha=None, static=False):
        """A block of copy. Published as an editable layout placeholder unless
        `static` — decoration (tick marks, quote glyph, mock-UI chrome) belongs
        to the layout, not to whoever fills the slide in."""
        color = color or self.T["fg"]
        box = s.shapes.add_textbox(E(x), E(y), E(w), E(h))
        tf = box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
        tf.vertical_anchor = anchor
        if isinstance(runs, str):
            runs = [(runs, {})]
        p = tf.paragraphs[0]
        p.alignment, p.line_spacing = align, spacing
        for text, ov in runs:
            for j, chunk in enumerate(text.split("\n")):
                if j:
                    p = tf.add_paragraph(); p.alignment, p.line_spacing = align, spacing
                r = p.add_run()
                r.text = chunk.upper() if ov.get("caps", caps) else chunk
                f = r.font
                f.name = ov.get("font", font)
                f.size = P(ov.get("size", size))
                f.bold = ov.get("bold", bold)
                f.color.rgb = RGBColor.from_string(ov.get("color", color))
                sp = ov.get("tracking", tracking)
                if sp:
                    f._rPr.set("spc", str(int(sp * ov.get("size", size) * 0.5 * 100)))
                a = ov.get("alpha", alpha)
                if a is not None and a < 100:
                    # Add the alpha inside the solidFill python-pptx already placed;
                    # a re-appended solidFill lands after <a:latin> and PowerPoint
                    # then drops the whole run colour back to black.
                    srgb = f._rPr.find(qn("a:solidFill")).find(qn("a:srgbClr"))
                    al = etree.SubElement(srgb, qn("a:alpha")); al.set("val", str(int(a * 1000)))
        if not static:
            self._ph.append(box)
        return box

    def eyebrow(self, s, x, y, text, color=None, alpha=None, w=1400):
        T = self.T
        return self.txt(s, x, y, w, 40, text, size=24, bold=True, caps=True, tracking=0.14,
                        color=color or T["eyebrow"],
                        alpha=T["eyebrow_a"] if alpha is None else alpha)

    def picture(self, s, rel, x, y, height_px=None, width_px=None):
        path = ROOT / rel
        iw, ih = Image.open(path).size
        if height_px:
            width_px = height_px * iw / ih
        elif width_px:
            height_px = width_px * ih / iw
        return s.shapes.add_picture(str(path), E(x), E(y), E(width_px), E(height_px))

    def cover_picture(self, s, rel):
        """Full-bleed image, cropped to 16:9 like CSS background-size:cover."""
        iw, ih = Image.open(ROOT / rel).size
        scale = max(1920 / iw, 1080 / ih)
        w, h = iw * scale, ih * scale
        pic = s.shapes.add_picture(str(ROOT / rel), E((1920 - w) / 2), E((1080 - h) / 2), E(w), E(h))
        return self.chrome(pic)

    def logomark(self, s, white=None):
        """The Z mark, bottom-right corner, on every slide."""
        white = self.T["mark_white"] if white is None else white
        rel = f"assets/logos/zuper-logomark{'-white' if white else ''}.png"
        self.chrome(self.picture(s, rel, 1920 - 96 - 56, 1080 - 84 - 56, height_px=56))

    def topbar(self, s):
        self.chrome(self.gradient(self.rect(s, 0, 0, 1920, 14, C["ink"])))

    def bullets(self, s, x, y, w, items, size=34, gap=52, mark=None, color=None):
        for i, it in enumerate(items):
            self.txt(s, x, y + i * gap, 40, gap, "✓", size=size, bold=True,
                     color=mark or self.T["accent"], static=True)
            self.txt(s, x + 44, y + i * gap, w - 44, gap, it, size=size,
                     color=color or self.T["fg"], alpha=self.T["dim_a"])

    # ── layout / slide plumbing ───────────────────────────────────────────
    def slide(self, label, ground, notes="", mark_white=None):
        self._commit()
        s = self.book.scratch_slide()
        if ground == "orange":
            self.chrome(self.gradient(self.rect(s, 0, 0, 1920, 1080, C["ink"])))
        elif ground:
            self.chrome(self.rect(s, 0, 0, 1920, 1080, ground))
        self._open = (s, s.slide_id, label, notes)
        return s

    @staticmethod
    def _no_bullets(pPr):
        """A placeholder inherits the master's list style, which puts a bullet and
        a hanging indent on every line. Zuper copy carries neither."""
        pPr.set("marL", "0"); pPr.set("indent", "0")
        if pPr.find(qn("a:buNone")) is None:
            bu = etree.Element(qn("a:buNone"))
            defRPr = pPr.find(qn("a:defRPr"))
            if defRPr is not None:
                defRPr.addprevious(bu)
            else:
                pPr.append(bu)

    @staticmethod
    def _publish_placeholder(sp, idx):
        """Turn a text-box element into a layout placeholder, and lift its run
        formatting into lstStyle so text typed on a NEW slide inherits it too."""
        cNvSpPr = sp.find(qn("p:nvSpPr")).find(qn("p:cNvSpPr"))
        cNvSpPr.attrib.pop("txBox", None)
        nvPr = sp.find(qn("p:nvSpPr")).find(qn("p:nvPr"))
        ph = etree.Element(qn("p:ph")); ph.set("type", "body"); ph.set("idx", str(idx))
        nvPr.insert(0, ph)

        txBody = sp.find(qn("p:txBody"))
        for para in txBody.findall(qn("a:p")):
            pPr = para.find(qn("a:pPr"))
            if pPr is None:
                pPr = etree.Element(qn("a:pPr")); para.insert(0, pPr)
            Deck._no_bullets(pPr)
        para = txBody.find(qn("a:p"))
        run = para.find(qn("a:r")) if para is not None else None
        if run is None:
            return
        lvl1 = etree.Element(qn("a:lvl1pPr"))
        pPr = para.find(qn("a:pPr"))
        if pPr is not None:
            if pPr.get("algn"):
                lvl1.set("algn", pPr.get("algn"))
            lnSpc = pPr.find(qn("a:lnSpc"))
            if lnSpc is not None:
                lvl1.append(copy.deepcopy(lnSpc))
        Deck._no_bullets(lvl1)
        rPr = run.find(qn("a:rPr"))
        if rPr is not None:
            defRPr = copy.deepcopy(rPr)
            defRPr.tag = qn("a:defRPr")
            lvl1.append(defRPr)
        lstStyle = etree.Element(qn("a:lstStyle"))
        lstStyle.append(lvl1)
        txBody.insert(list(txBody).index(txBody.find(qn("a:bodyPr"))) + 1, lstStyle)

    def _commit(self):
        """Split the drawing: the ground and the logomark become the layout, the
        rest stays on the slide as ordinary editable shapes. The slide is then
        re-pointed at its own new layout.

        Only the copy is mirrored onto the layout, as placeholders, so New Slide
        hands you a styled shell you can type into. Furniture (photo wells, logo
        tiles, cards, rules, chart bars) deliberately lives on the slide: a
        four-up team row is no use if you cannot delete the fourth person."""
        if self._open is None:
            return
        scratch, scratch_id, label, notes = self._open
        self._open = None

        if not MASTERS:
            # Everything stays on the slide: ordinary shapes the deck author can
            # restyle, move and delete (a four-up team row is no use if you
            # cannot remove the fourth person).
            self._chrome, self._ph = [], []
            scratch.notes_slide.notes_text_frame.text = (
                f"{label} · {self.T['tag']}\n\n{notes}")
            return

        layout = self.book.new_layout(self.master, label)
        tree = layout._element.find(qn("p:cSld")).find(qn("p:spTree"))
        for el in self._chrome:
            el.getparent().remove(el)
            tree.append(el)
        self.book.rehome_images(scratch.part, layout, self._chrome)
        self._chrome = []

        for i, box in enumerate(self._ph):
            mirror = copy.deepcopy(box._element)
            tree.append(mirror)
            self._publish_placeholder(mirror, 10 + i)
        self._ph = []

        # Re-issue the drawing as a slide OF that layout. Building the slide from
        # the layout (rather than re-pointing a slide's layout relationship) is
        # the path PowerPoint expects, and it leaves no stale image rels behind.
        slide = self.prs.slides.add_slide(layout.slide_layout)
        content = [el for el in scratch.shapes._spTree
                   if el.tag not in (qn("p:nvGrpSpPr"), qn("p:grpSpPr"))]
        dest = slide.shapes._spTree
        for el in content:
            el.getparent().remove(el)
            dest.append(el)
        self.book.rehome_images(scratch.part, slide.part, content)
        self.book.drop_slide(scratch_id)
        slide.notes_slide.notes_text_frame.text = (
            f"{label} · {self.T['tag']}\n\n{notes}")

    def done(self):
        self._commit()
        return self
    # ── the 18 layouts ────────────────────────────────────────────────────
    def build(self):
        T = self.T
        interior_is_orange = T["ground"] == "orange"
        cover = C["white"] if interior_is_orange else "orange"
        cover_fg = C["ink"] if interior_is_orange else C["white"]
        cover_sub = C["text2"] if interior_is_orange else C["white"]
        cover_mark_white = not interior_is_orange

        # 01 Title — the cover takes the opposite colour to every interior
        s = self.slide("01 Title", cover,
            "Pick the cover colour and every interior slide takes the opposite. "
            "Headline makes one claim, sentence case, no em dashes.")
        if interior_is_orange:
            self.topbar(s)
        self.txt(s, 150, 300, 1400, 40, "Eyebrow, audience or date", size=24, bold=True,
                 caps=True, tracking=0.14, color=C["primary"] if interior_is_orange else C["white"])
        self.txt(s, 150, 360, 1500, 300, "Deck title goes here", size=130, color=cover_fg,
                 bold=True, font=DISPLAY, spacing=1.02, tracking=-0.03)
        if interior_is_orange:
            self.rect(s, 150, 634, 660, 150, C["banner"], radius=14)
            self.txt(s, 178, 656, 620, 110, "in two lines.", size=130, color=C["primary"],
                     bold=True, font=DISPLAY, spacing=1.05, tracking=-0.03)
        else:
            self.txt(s, 150, 634, 1500, 160, "in two lines.", size=130, color=C["white"],
                     bold=True, font=DISPLAY, spacing=1.05, tracking=-0.03)
        self.txt(s, 150, 828, 1000, 120, "One supporting line. Say the outcome, not the feature list.",
                 size=34, color=cover_sub, spacing=1.45)
        self.txt(s, 1120, 986, 500, 40, "Presenter, role", size=22,
                 color=C["muted"] if interior_is_orange else C["white"], align=PP_ALIGN.RIGHT)
        self.logomark(s, white=cover_mark_white)

        # 02 Agenda
        s = self.slide("02 Agenda", T["ground"],
            "Four to six sections. Each line: the section title, then one line on what it answers.")
        self.eyebrow(s, 150, 140, "Agenda")
        self.txt(s, 150, 196, 1400, 120, "What we'll cover", size=84, bold=True, font=DISPLAY, tracking=-0.03)
        for i in range(4):
            cx, cy = 150 + (i % 2) * 898, 380 + (i // 2) * 200
            self.rect(s, cx, cy, 810, 3, T["rule"], alpha=T["rule_a"])
            self.txt(s, cx, cy + 34, 80, 50, f"0{i+1}", size=28, bold=True, color=T["accent"])
            self.txt(s, cx + 110, cy + 30, 700, 60, "Section title", size=40, bold=True,
                     font=DISPLAY, tracking=-0.01)
            self.txt(s, cx + 110, cy + 86, 700, 50, "One line on what it answers", size=24,
                     color=T["dim"], alpha=T["dim_a"])
        self.logomark(s)

        # 03 Section break — full-bleed, identical in both schemes
        s = self.slide("03 Section break", None,
            "Full-bleed image ground. Sits outside the white/orange contrast rule, drop it between "
            "major sections of any deck. Keep all copy in one corner over the scrim.")
        self.cover_picture(s, "assets/backgrounds/zuper-breaker-bg.jpg")
        self.scrim(s, [(0, "140403", 16), (34000, "140403", 6), (100000, "140403", 82)], 90)
        self.txt(s, 1000, 64, 780, 40, "ZUPER CONFIDENTIAL", size=22, bold=True, color=C["white"],
                 align=PP_ALIGN.RIGHT, tracking=0.08, static=True)
        self.txt(s, 96, 616, 1400, 40, "Section 02", size=24, bold=True, caps=True,
                 tracking=0.14, color="FFD9C9")
        self.txt(s, 96, 668, 1400, 240, [("Section headline, ", {}), ("one claim.", {"bold": True})],
                 size=104, color=C["white"], font=DISPLAY, spacing=1.04, tracking=-0.02)
        self.txt(s, 96, 900, 1300, 80, "One line of setup for the section that follows.",
                 size=40, color=C["white"])
        self.logomark(s, white=True)

        # 04 Divider
        s = self.slide("04 Divider", T["ground"],
            "Numbered section divider. Use when the deck has clear numbered sections and a "
            "full-bleed break would be too loud.")
        self.eyebrow(s, 150, 320, "Section 02")
        self.txt(s, 150, 372, 700, 300, "02", size=280, bold=True, font=DISPLAY,
                 color=T["accent"], spacing=0.9, tracking=-0.05,
                 alpha=45 if interior_is_orange else None)
        self.txt(s, 150, 690, 1300, 140, "Section title goes here", size=88, bold=True,
                 font=DISPLAY, tracking=-0.03)
        self.logomark(s)

        # 05 Content, bullets
        s = self.slide("05 Content, bullets", T["ground"],
            "The workhorse slide. Five bullets maximum, one line each.")
        self.eyebrow(s, 150, 140, "Eyebrow")
        self.txt(s, 150, 196, 1300, 200, "Headline goes here, sentence case", size=80, bold=True,
                 font=DISPLAY, spacing=1.05, tracking=-0.03)
        self.txt(s, 150, 420, 1200, 100,
                 "Optional supporting line. Two lines at most, then let the bullets carry the detail.",
                 size=32, color=T["dim"], alpha=T["dim_a"], spacing=1.55)
        self.bullets(s, 150, 600, 1400, ["First point, one line, no wrapping",
                                         "Second point, one line, no wrapping",
                                         "Third point, one line, no wrapping",
                                         "Fourth point, stop at five"])
        self.logomark(s)

        # 06 Split + product mock
        s = self.slide("06 Split + product", T["ground"],
            "Product screens are recreated as clean mock rows, never a screenshot of stock art. "
            "The UI always rides a white card so no mark sits on the gradient.")
        self.eyebrow(s, 150, 200, "Module name", w=700)
        self.txt(s, 150, 252, 700, 180, "What this screen does for you", size=72, bold=True,
                 font=DISPLAY, spacing=1.05, tracking=-0.03)
        self.txt(s, 150, 450, 640, 100, "One line on the outcome, in the words the trade uses.",
                 size=30, color=T["dim"], alpha=T["dim_a"], spacing=1.55)
        self.bullets(s, 150, 590, 700, ["Capability, one line", "Capability, one line",
                                        "Capability, one line"], size=26, gap=46)
        self.rect(s, 1010, 300, 760, 480, T["panel"], alpha=T["panel_a"] if interior_is_orange else None,
                  radius=24) if interior_is_orange else self.rect(s, 1010, 300, 760, 480, C["peach"], radius=24)
        self.rect(s, 1050, 340, 680, 400, C["white"], radius=18)
        for i, cx in enumerate((1074, 1098, 1122)):
            self.rect(s, cx, 364, 14, 14, ("FF5F57", "FEBC2E", "28C840")[i], radius=7)
        self.txt(s, 1156, 362, 400, 30, "Screen name", size=18, color=C["muted"], static=True)
        self.rect(s, 1050, 402, 680, 1, C["divider"])
        for i, (bg, fg) in enumerate([(C["okBg"], C["okFg"]), (C["infoBg"], C["infoFg"]),
                                      (C["warnBg"], C["warnFg"])]):
            ry = 402 + i * 113
            self.txt(s, 1072, ry + 42, 70, 30, "00:00", size=20, color=C["muted"], static=True)
            self.txt(s, 1152, ry + 30, 340, 34, "Row title, real job name", size=22, bold=True,
                     color=C["ink"], static=True)
            self.txt(s, 1152, ry + 64, 340, 30, "Secondary detail", size=18, color=C["muted"], static=True)
            self.rect(s, 1596, ry + 36, 112, 40, bg, radius=20)
            self.txt(s, 1596, ry + 45, 112, 30, "Status", size=18, bold=True, color=fg,
                     align=PP_ALIGN.CENTER, static=True)
            if i < 2:
                self.rect(s, 1050, ry + 113, 680, 1, C["card"])
        self.txt(s, 1010, 800, 700, 40, "Build the product as an HTML mock, never a screenshot of stock art",
                 size=18, color=T["dim"], align=PP_ALIGN.CENTER, static=True)
        self.logomark(s)

        # 07 Stat
        s = self.slide("07 Stat", T["ground"],
            "One number, one meaning, one source. Use a real number from a real customer.")
        self.eyebrow(s, 150, 300, "The outcome")
        self.txt(s, 150, 356, 1400, 340, "00%", size=340, bold=True, font=DISPLAY,
                 color=T["fg"] if interior_is_orange else C["primary"], spacing=0.9, tracking=-0.05)
        self.txt(s, 150, 700, 1200, 100, "What the number means, in one line.", size=48,
                 bold=True, spacing=1.35)
        self.txt(s, 150, 810, 800, 40, "Source, period", size=22, color=T["dim"], alpha=T["dim_a"])
        self.logomark(s)

        # 08 Metrics grid
        s = self.slide("08 Metrics grid", T["ground"],
            "Three numbers, never more. Each one gets a rule above it and one line of meaning below.")
        self.eyebrow(s, 150, 140, "The impact")
        self.txt(s, 150, 196, 1200, 180, "Headline that frames the numbers", size=80, bold=True,
                 font=DISPLAY, spacing=1.05, tracking=-0.03)
        for i, n in enumerate(("00%", "0 in 0", "0 days")):
            cx = 150 + i * 556
            self.rect(s, cx, 520, 508, 6, T["accent"], alpha=None if not interior_is_orange else 100)
            self.txt(s, cx, 560, 508, 160, n, size=140, bold=True, font=DISPLAY,
                     color=T["fg"] if interior_is_orange else C["primary"], spacing=1, tracking=-0.04)
            self.txt(s, cx, 740, 380, 100, "What it measures, one line", size=30,
                     color=T["dim"], alpha=T["dim_a"], spacing=1.4)
        self.logomark(s)

        # 09 Chart — on orange the chart rides a white card; on white it sits straight on the slide
        s = self.slide("09 Chart", T["ground"],
            "Emphasis ladder, never a rainbow: focus #FD5000 for one series, #191919 comparison, "
            "#7A7268 context, #E7E0D6 field. Direct-label every series. On an orange slide the "
            "chart rides a white card so no mark sits on the gradient.")
        self.eyebrow(s, 150, 120, "Data, period")
        self.txt(s, 150, 172, 1300, 100, "The one takeaway from this chart", size=68, bold=True,
                 font=DISPLAY, tracking=-0.03)
        if T["chart_card"]:
            self.rect(s, 150, 320, 1620, 560, C["white"], radius=24)
            bx, lx, vx, by0 = 586, 214, 1560, 390
        else:
            bx, lx, vx, by0 = 586, 150, 1620, 400
        for i, (pct, col) in enumerate([(0.72, C["primary"]), (0.54, C["ink"]),
                                        (0.38, C["context"]), (0.26, C["context"])]):
            by = by0 + i * 78
            self.txt(s, lx, by + 8, 340, 40, "Category label", size=26, color=C["text2"], static=True)
            self.rect(s, bx, by, 940, 44, C["field"], radius=6)
            self.rect(s, bx, by, 940 * pct, 44, col, radius=6)
            self.txt(s, vx - 146, by + 8, 146, 40, "00", size=26, bold=True, color=C["ink"],
                     align=PP_ALIGN.RIGHT, static=True)
        self.txt(s, lx, by0 + 338, 1400, 100,
                 "One series in focus orange, the rest in comparison ink and context grey. "
                 "Direct-label every series. No gradient fills, no 3D, no dual axes.",
                 size=22, color=C["muted"], spacing=1.4, static=True)
        self.logomark(s)

        # 10 Comparison
        s = self.slide("10 Comparison", T["ground"],
            "Before on the muted panel, after on the highlighted card, so the eye lands on the "
            "after. Same number of lines each side.")
        self.eyebrow(s, 150, 140, "Before and after")
        self.txt(s, 150, 196, 1300, 180, "The shift, in one headline", size=76, bold=True,
                 font=DISPLAY, tracking=-0.03)
        if interior_is_orange:
            self.rect(s, 150, 430, 786, 460, C["white"], alpha=14, radius=24)
            self.rect(s, 984, 430, 786, 460, C["white"], radius=24)
            before_fg, after_fg, before_eb = C["white"], C["ink"], C["white"]
        else:
            self.rect(s, 150, 430, 786, 460, C["warm"], radius=24)
            self.rect(s, 984, 430, 786, 460, C["banner"], radius=24)
            before_fg, after_fg, before_eb = C["ink"], C["ink"], C["text2"]
        self.txt(s, 206, 486, 600, 40, "Before", size=24, bold=True, caps=True, tracking=0.14,
                 color=before_eb, alpha=75 if interior_is_orange else None)
        for i in range(3):
            self.txt(s, 206, 570 + i * 76, 660, 60, "What it costs them today, one line",
                     size=30, color=before_fg, spacing=1.4)
        self.txt(s, 1040, 486, 600, 40, "After", size=24, bold=True, caps=True, tracking=0.14,
                 color=C["primary"])
        for i in range(3):
            self.txt(s, 1040, 570 + i * 76, 660, 60, "What changes, one line", size=30,
                     color=after_fg, spacing=1.4)
        self.logomark(s)

        # 11 Timeline
        s = self.slide("11 Timeline", T["ground"],
            "Four milestones maximum. The last dot is filled to mark go-live.")
        self.eyebrow(s, 150, 140, "Rollout")
        self.txt(s, 150, 196, 1300, 180, "From kickoff to live, in plain steps", size=76,
                 bold=True, font=DISPLAY, tracking=-0.03)
        self.rect(s, 150, 512, 1620, 3, T["rule"], alpha=T["rule_a"])
        for i in range(4):
            cx = 150 + i * 424
            last = i == 3
            self.rect(s, cx, 500, 28, 28,
                      T["fg"] if (interior_is_orange and last) else T["accent"],
                      alpha=None if (last or not interior_is_orange) else 60, radius=14)
            self.txt(s, cx, 564, 380, 40, "Month 0" if last else "Week 0", size=24,
                     color=T["dim"], alpha=T["dim_a"])
            self.txt(s, cx, 612, 380, 60, "Live" if last else "Milestone", size=38, bold=True,
                     font=DISPLAY, tracking=-0.01)
            self.txt(s, cx, 676, 380, 80, "What happens, one line", size=24, color=T["dim"],
                     alpha=T["dim_a"], spacing=1.4)
        self.logomark(s)

        # 12 Two-column
        s = self.slide("12 Two-column", T["ground"],
            "Two headings, two short paragraphs. Keep both columns a similar length so the slide "
            "stays balanced.")
        self.eyebrow(s, 150, 140, "Eyebrow")
        self.txt(s, 150, 196, 1300, 180, "Headline that sets up both columns", size=76, bold=True,
                 font=DISPLAY, tracking=-0.03)
        lines = ['Three or four lines of body copy. Write to "you", lead with the outcome, and use '
                 'the words the trade actually uses.',
                 'Three or four lines of body copy. Keep both columns to a similar length so the '
                 'slide stays balanced.']
        for i in range(2):
            cx = 150 + i * 870
            self.txt(s, cx, 500, 750, 70, "Column heading", size=44, bold=True, font=DISPLAY,
                     tracking=-0.02)
            self.rect(s, cx, 588, 750, 3, T["rule"], alpha=T["rule_a"])
            self.txt(s, cx, 632, 750, 260, lines[i], size=30, color=T["dim"], alpha=T["dim_a"],
                     spacing=1.55)
        self.logomark(s)

        # 13 Quote
        s = self.slide("13 Quote", T["ground"],
            "The customer's own words, unedited. Two lines at most so it stays quotable. "
            "Real name, real company.")
        self.txt(s, 180, 220, 300, 200, "“", size=300, bold=True, font=DISPLAY,
                 color=T["accent"], alpha=T["quote_a"], spacing=0.55, static=True)
        self.txt(s, 180, 390, 1400, 280,
                 "The customer's words, unedited, two lines at most so it stays quotable.",
                 size=68, bold=True, font=DISPLAY, spacing=1.25, tracking=-0.02)
        if interior_is_orange:
            self.rect(s, 180, 720, 84, 84, C["white"], radius=42)
            initials_fg = C["primary"]
        else:
            self.rect(s, 180, 720, 84, 84, C["primary"], radius=42)
            initials_fg = C["white"]
        self.txt(s, 180, 748, 84, 40, "AB", size=30, bold=True, color=initials_fg,
                 align=PP_ALIGN.CENTER, static=True)
        self.txt(s, 288, 726, 700, 40, "Name", size=28, bold=True)
        self.txt(s, 288, 768, 700, 40, "Role, company", size=24, color=T["dim"], alpha=T["dim_a"])
        self.logomark(s)

        # 14 Logo wall
        s = self.slide("14 Logo wall", T["ground"],
            "Customer marks on white tiles so each one keeps its own colour. Equal optical height, "
            "never recoloured.")
        self.eyebrow(s, 150, 140, "Customers")
        self.txt(s, 150, 196, 1300, 180, "Who already runs this way", size=76, bold=True,
                 font=DISPLAY, tracking=-0.03)
        for i in range(8):
            cx, cy = 150 + (i % 4) * 414, 480 + (i // 4) * 216
            tile = self.rect(s, cx, cy, 378, 180, C["white"], radius=18)
            if not interior_is_orange:
                self.outline(tile, C["field"], 1)
            self.txt(s, cx, cy + 76, 378, 40, "Customer logo", size=22, color=C["muted"],
                     align=PP_ALIGN.CENTER, static=True)
        self.logomark(s)

        # 15 Team
        s = self.slide("15 Team", T["ground"],
            "Drop a headshot into each placeholder. Square crop, same crop on every face.")
        self.eyebrow(s, 150, 140, "Your team")
        self.txt(s, 150, 196, 1300, 180, "Who you'll be working with", size=76, bold=True,
                 font=DISPLAY, tracking=-0.03)
        for i in range(4):
            cx = 150 + i * 414
            ph = self.rect(s, cx, 470, 322, 322, C["white"] if interior_is_orange else C["warm"],
                           alpha=16 if interior_is_orange else None, radius=20)
            self.outline(ph, C["white"] if interior_is_orange else C["field"], 2, "dash")
            self.txt(s, cx, 610, 322, 40, "Photo", size=20, color=T["dim"], alpha=T["dim_a"],
                     align=PP_ALIGN.CENTER, static=True)
            self.txt(s, cx, 818, 322, 50, "Name", size=34, bold=True, font=DISPLAY)
            self.txt(s, cx, 866, 322, 40, "Role", size=24, color=T["dim"], alpha=T["dim_a"])
        self.logomark(s)

        # 16 Zuper Sense — dark in both schemes
        s = self.slide("16 Zuper Sense (dark)", "08080A",
            "Dark is reserved for Zuper Sense, never anything else. Orange-on-dark is #FF8B5A.")
        self.cover_picture(s, "assets/backgrounds/zuper-sense-bg.jpg")
        badge = self.rect(s, 150, 240, 300, 56, C["senseOrange"], alpha=14, radius=28)
        self.outline(badge, C["senseOrange"], 1)
        self.txt(s, 150, 256, 300, 40, "Zuper Sense", size=22, color=C["senseOrange"], bold=True,
                 caps=True, tracking=0.12, align=PP_ALIGN.CENTER, static=True)
        self.txt(s, 150, 330, 1440, 220, "Headline for the Sense slide", size=96, bold=True,
                 font=DISPLAY, color="FAFAFA", spacing=1.05, tracking=-0.03)
        self.txt(s, 150, 570, 1100, 100,
                 "One line on what Sense does in the background, in plain language.",
                 size=32, color=C["senseText"], spacing=1.55)
        for i in range(3):
            cx = 150 + i * 546
            cd = self.rect(s, cx, 720, 518, 200, C["senseCard"], alpha=72, radius=18)
            self.outline(cd, C["senseLine"], 1)
            self.txt(s, cx + 36, 756, 440, 50, "Capability", size=30, bold=True, font=DISPLAY,
                     color=C["senseOrange"])
            self.txt(s, cx + 36, 812, 446, 90, "Two lines on what it does and what it saves.",
                     size=22, color=C["senseText"], spacing=1.5)
        self.logomark(s, white=True)

        # 17 Zuper Glass — full-bleed in both schemes
        s = self.slide("17 Zuper Glass", "070B14",
            "Reserved for Zuper Glass. All copy stays in the left column over the scrim so it "
            "never overlaps the glasses.")
        self.cover_picture(s, "assets/backgrounds/zuper-glass-bg.jpg")
        self.scrim(s, [(0, "070B14", 94), (30000, "070B14", 80), (52000, "070B14", 34),
                       (70000, "070B14", 0)], 0)
        badge = self.rect(s, 150, 150, 280, 54, C["white"], alpha=12, radius=27)
        self.outline(badge, C["white"], 1)
        self.txt(s, 150, 166, 280, 40, "Zuper Glass", size=20, bold=True, caps=True, tracking=0.12,
                 color=C["white"], align=PP_ALIGN.CENTER, static=True)
        self.txt(s, 150, 250, 800, 220, "Headline for the Glass slide", size=88, bold=True,
                 font=DISPLAY, color=C["white"], spacing=1.05, tracking=-0.03)
        self.txt(s, 150, 486, 780, 100, "One line on what the crew does hands-free.", size=30,
                 color=C["white"], spacing=1.55)
        for i, it in enumerate(["Capability, one line"] * 3):
            self.txt(s, 150, 620 + i * 46, 40, 46, "✓", size=26, bold=True, color=C["senseOrange"],
                     static=True)
            self.txt(s, 194, 620 + i * 46, 700, 46, it, size=26, color=C["white"])
        self.logomark(s, white=True)

        # 18 Closing — closes on the cover colour
        s = self.slide("18 Closing", cover,
            "Closes on the cover colour. One ask, then the concrete next steps with owners and "
            "dates when you have them.")
        if interior_is_orange:
            self.topbar(s)
        self.txt(s, 150, 300, 1400, 40, "Next steps", size=24, bold=True, caps=True, tracking=0.14,
                 color=C["primary"] if interior_is_orange else C["white"])
        self.txt(s, 150, 360, 1400, 200, "The ask, in one line.", size=110, bold=True, font=DISPLAY,
                 color=cover_fg, spacing=1.04, tracking=-0.03)
        for i in range(3):
            cx = 150 + i * 480
            self.txt(s, cx, 630, 420, 40, f"Step 0{i+1}", size=22, bold=True, caps=True,
                     tracking=0.12, color=C["primary"] if interior_is_orange else C["white"])
            self.txt(s, cx, 682, 420, 80, "What happens next, one line", size=30, color=cover_sub,
                     spacing=1.4)
        self.txt(s, 150, 986, 400, 40, "zuper.co", size=22,
                 color=C["muted"] if interior_is_orange else C["white"])
        self.logomark(s, white=cover_mark_white)
        return self.done()


# ── build ─────────────────────────────────────────────────────────────────
book = Book()
Deck(book, ORANGE_INTERIOR).build()      # primary: white cover, orange interiors
Deck(book, WHITE_INTERIOR).build()       # secondary: orange cover, white interiors
if MASTERS:
    book.drop_office_master()

prs = book.prs
prs.core_properties.title = "Zuper deck master"
prs.core_properties.author = "Zuper Design System"
prs.core_properties.comments = (
    "Empty master deck. Two masters under New Slide: Zuper white cover (primary, "
    "orange interiors) and Zuper orange cover (secondary, white interiors), 18 "
    "layouts each. The 36 slides are those layouts with placeholder copy.")
OUT.parent.mkdir(exist_ok=True)
prs.save(OUT)
print(f"Wrote assets/{OUT.name} — {len(prs.slides._sldIdLst)} slides"
      + (f", {len(prs.slide_masters)} masters, "
         f"{sum(len(m.slide_layouts) for m in prs.slide_masters)} layouts" if MASTERS else ""))
