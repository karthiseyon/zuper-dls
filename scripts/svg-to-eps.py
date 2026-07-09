#!/usr/bin/env python3
"""Convert the flat-fill logo SVGs in assets/logos/ to EPS.

Handles exactly what the Zuper logo files contain: <polygon points> and
<path d> with M/m L/l H/h V/v C/c S/s Z/z commands, filled via class
(Illustrator <style> block), fill="" or style="fill:...". No strokes,
gradients, transforms or clips. Run from the repo root:

    python3 scripts/svg-to-eps.py
"""
import re, sys, glob, os

def parse_style_classes(svg):
    classes = {}
    m = re.search(r"<style[^>]*>(.*?)</style>", svg, re.S)
    if m:
        for cls, body in re.findall(r"\.([\w-]+)\{([^}]*)\}", m.group(1)):
            fm = re.search(r"fill:\s*(#[0-9A-Fa-f]{3,6}|\w+)", body)
            if fm:
                classes[cls] = fm.group(1)
    return classes

def hex_to_rgb(c):
    c = c.strip()
    named = {"white": "#FFFFFF", "black": "#000000"}
    c = named.get(c.lower(), c)
    if not c.startswith("#"):
        raise ValueError(f"unsupported fill {c!r}")
    c = c[1:]
    if len(c) == 3:
        c = "".join(x + x for x in c)
    return tuple(int(c[i:i+2], 16) / 255 for i in (0, 2, 4))

def shape_fill(attrs, classes):
    m = re.search(r'style="([^"]*)"', attrs)
    if m:
        fm = re.search(r"fill:\s*([^;]+)", m.group(1))
        if fm:
            return fm.group(1).strip()
    m = re.search(r'fill="([^"]*)"', attrs)
    if m:
        return m.group(1)
    m = re.search(r'class="([\w-]+)"', attrs)
    if m and m.group(1) in classes:
        return classes[m.group(1)]
    return "#000000"

def tokens(d):
    for t in re.findall(r"[MmLlHhVvCcSsZz]|-?\d*\.?\d+(?:[eE][-+]?\d+)?", d):
        yield t

def path_ops(d):
    """Yield ('m'|'l'|'c'|'z', points…) ops in absolute SVG coords."""
    it = list(tokens(d)); i = 0
    x = y = sx = sy = 0.0
    pcx = pcy = None  # previous cubic control point, for S/s
    cmd = None
    ops = []
    def num():
        nonlocal i
        v = float(it[i]); i += 1
        return v
    while i < len(it):
        if re.match(r"[A-Za-z]", it[i]):
            cmd = it[i]; i += 1
            if cmd in "Zz":
                ops.append(("z",)); x, y = sx, sy; pcx = pcy = None
                continue
        c = cmd
        if c in "Mm":
            dx, dy = num(), num()
            x, y = (dx, dy) if c == "M" else (x + dx, y + dy)
            sx, sy = x, y
            ops.append(("m", x, y))
            cmd = "L" if c == "M" else "l"  # subsequent pairs are linetos
            pcx = pcy = None
        elif c in "Ll":
            dx, dy = num(), num()
            x, y = (dx, dy) if c == "L" else (x + dx, y + dy)
            ops.append(("l", x, y)); pcx = pcy = None
        elif c in "Hh":
            v = num(); x = v if c == "H" else x + v
            ops.append(("l", x, y)); pcx = pcy = None
        elif c in "Vv":
            v = num(); y = v if c == "V" else y + v
            ops.append(("l", x, y)); pcx = pcy = None
        elif c in "Cc":
            x1, y1, x2, y2, dx, dy = (num() for _ in range(6))
            if c == "c":
                x1, y1, x2, y2, dx, dy = x + x1, y + y1, x + x2, y + y2, x + dx, y + dy
            ops.append(("c", x1, y1, x2, y2, dx, dy))
            x, y, pcx, pcy = dx, dy, x2, y2
        elif c in "Ss":
            x2, y2, dx, dy = (num() for _ in range(4))
            if c == "s":
                x2, y2, dx, dy = x + x2, y + y2, x + dx, y + dy
            x1, y1 = (2 * x - pcx, 2 * y - pcy) if pcx is not None else (x, y)
            ops.append(("c", x1, y1, x2, y2, dx, dy))
            x, y, pcx, pcy = dx, dy, x2, y2
        else:
            raise ValueError(f"unsupported path command {c!r}")
    return ops

def polygon_ops(points):
    nums = [float(v) for v in re.findall(r"-?\d*\.?\d+(?:[eE][-+]?\d+)?", points)]
    pts = list(zip(nums[0::2], nums[1::2]))
    ops = [("m", *pts[0])] + [("l", *p) for p in pts[1:]] + [("z",)]
    return ops

def convert(src, dst):
    svg = open(src).read()
    vb = re.search(r'viewBox="([^"]+)"', svg).group(1)
    minx, miny, w, h = (float(v) for v in vb.split())
    classes = parse_style_classes(svg)
    shapes = []
    for tag, attrs in re.findall(r"<(path|polygon)\b([^>]*?)/?>", svg):
        fill = shape_fill(attrs, classes)
        if fill == "none":
            continue
        if tag == "path":
            ops = path_ops(re.search(r'\bd="([^"]+)"', attrs).group(1))
        else:
            ops = polygon_ops(re.search(r'\bpoints="([^"]+)"', attrs).group(1))
        shapes.append((hex_to_rgb(fill), ops))

    n = lambda v: f"{v:.3f}".rstrip("0").rstrip(".")
    lines = [
        "%!PS-Adobe-3.0 EPSF-3.0",
        f"%%BoundingBox: 0 0 {int(round(w))} {int(round(h))}",
        f"%%HiResBoundingBox: 0 0 {n(w)} {n(h)}",
        f"%%Title: {os.path.basename(dst)}",
        "%%Creator: Zuper Design System (scripts/svg-to-eps.py)",
        "%%LanguageLevel: 2",
        "%%Pages: 1",
        "%%EndComments",
        "gsave",
        # SVG y grows downward; flip into PS space and shift the viewBox origin
        f"0 {n(h)} translate 1 -1 scale {n(-minx)} {n(-miny)} translate",
    ]
    for (r, g, b), ops in shapes:
        lines.append(f"{n(r)} {n(g)} {n(b)} setrgbcolor")
        lines.append("newpath")
        for op in ops:
            if op[0] == "m":
                lines.append(f"{n(op[1])} {n(op[2])} moveto")
            elif op[0] == "l":
                lines.append(f"{n(op[1])} {n(op[2])} lineto")
            elif op[0] == "c":
                lines.append(" ".join(n(v) for v in op[1:]) + " curveto")
            else:
                lines.append("closepath")
        lines.append("fill")
    lines += ["grestore", "showpage", "%%EOF", ""]
    open(dst, "w").write("\n".join(lines))
    print(f"{src} -> {dst} ({len(shapes)} shapes)")

if __name__ == "__main__":
    root = os.path.join(os.path.dirname(__file__), "..", "assets", "logos")
    files = sorted(glob.glob(os.path.join(root, "zuper-*.svg")))
    for f in files:
        if "favicon" in f:
            continue
        convert(f, f[:-4] + ".eps")
