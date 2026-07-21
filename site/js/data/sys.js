/* ============ TOKEN MODEL ============ */
const SYS = [
{
  id:"deck-light", name:"Deck · Light", navHex:"#FD5000", navMeta:"slides",
  tagline:"Primary cover · light system",
  lede:"The primary deck look, a white cover with orange interiors. Clean white and warm‑cream grounds, black type set in Aptos, and Zuper orange reserved for emphasis. Built for readable, content‑first slides.",
  canvas:"#F8F5F0",
  hero:{bg:"linear-gradient(135deg,#FFFFFF 0%,#FFF3EC 60%,#FFE2D2 100%)",ink:"#1B1919",sub:"#5A554F",kick:"#FD5000",chipBg:"#FFFFFF",chipInk:"#1B1919",chipLine:"#E7E6E3"},
  fonts:{display:"Aptos Display / 700",body:"Aptos / 400 · 700"},
  vars:{
    "surface-default":"#FFFFFF","surface-subtle":"#F8F5F0","surface-card":"#FFFFFF","surface-pill":"#FFF3EC","surface-inverse":"#1B1919",
    "text-primary":"#1B1919","text-secondary":"#5A554F","text-tertiary":"#8A847C","text-disabled":"#B8B2AA","text-brand":"#FD5000","text-inverse":"#FFFFFF",
    "border-subtle":"#F4ECE4","border-default":"#E7E6E3","border-strong":"#1B1919","border-brand":"#FD5000",
    "brand-default":"#FD5000","brand-secondary":"#FF6B35","brand-subtle":"#FFE2D2","brand-on-brand":"#FFFFFF",
    "grad-start":"#DB3602","grad-mid":"#FD5000","grad-end":"#FF8A4C",
    "status-error-bg":"#FDECEC","status-error-fg":"#C42121","status-success-bg":"#E7F6EC","status-success-fg":"#1E854B","status-warning-bg":"#FEF3DC","status-warning-fg":"#A66A00"
  },
  primitives:{
    Neutral:[["white","#FFFFFF"],["paper","#F8F5F0"],["cloud","#F4ECE4"],["sand","#ECE2D6"],["mute","#A8A29B"],["slate","#6E675F"],["ink","#1B1919"],["black","#000000"]],
    "Brand · Orange":[["orange/50","#FFF3EC"],["orange/100","#FFE2D2"],["orange/300","#FFB088"],["orange/400","#FF8A4C"],["orange/500","#FD5000"],["orange/600","#DB3602"],["orange/700","#B42E00"]],
    Status:[["red/500","#DC2626"],["red/50","#FDECEC"],["green/500","#22C55E"],["green/50","#E7F6EC"],["blue/500","#2563EB"],["amber/500","#F59E0B"]]
  },
  charts:[["brand","#FD5000"],["secondary","#FF8A4C"],["success","#22C55E"],["warning","#F59E0B"],["info","#2563EB"]]
},
{
  id:"deck-orange", name:"Deck · Orange", navHex:"#FD5000", navMeta:"slides",
  tagline:"Secondary cover · orange system",
  lede:"The secondary deck look, an orange cover with white interiors. Full‑bleed orange for title slides, section breaks and statement moments. White Aptos Display headlines own the frame; everything else gets out of the way.",
  canvas:"#FD5000",
  hero:{bg:"linear-gradient(135deg,#C22D00 0%,#FD5000 45%,#FF8A4C 100%)",ink:"#FFFFFF",sub:"#FFE0CE",kick:"#FFFAEA",chipBg:"rgba(255,255,255,.14)",chipInk:"#FFFFFF",chipLine:"rgba(255,255,255,.32)"},
  fonts:{display:"Aptos Display / 700",body:"Aptos / 400 · 700"},
  vars:{
    "surface-default":"#FD5000","surface-subtle":"#E84800","surface-card":"#FF6B2E","surface-pill":"#E84A05","surface-inverse":"#FFFFFF",
    "text-primary":"#FFFFFF","text-secondary":"#FFE0CE","text-tertiary":"#FFC4A6","text-disabled":"#F0A581","text-brand":"#FFFAEA","text-inverse":"#1B1919",
    "border-subtle":"#FF6B35","border-default":"#FF8A4C","border-strong":"#FFFFFF","border-brand":"#FFFFFF",
    "brand-default":"#FFFFFF","brand-secondary":"#FFFAEA","brand-subtle":"#E84A05","brand-on-brand":"#FD5000",
    "grad-start":"#FFB088","grad-mid":"#FF8A4C","grad-end":"#FFFAEA",
    "status-error-bg":"#FFE3DA","status-error-fg":"#7A1A00","status-success-bg":"#FFF3DC","status-success-fg":"#5E4A00","status-warning-bg":"#FFEFD0","status-warning-fg":"#6B3A00"
  },
  primitives:{
    "Orange grounds":[["base/500","#FD5000"],["deep/600","#DB3602"],["deeper/700","#C22D00"],["lift/400","#FF6B2E"],["glow/300","#FF8A4C"],["tint/100","#FFE2D2"],["cream","#FFFAEA"],["white","#FFFFFF"]],
    "On‑orange ink":[["white","#FFFFFF"],["cream","#FFFAEA"],["peach","#FFE0CE"],["faded","#FFC4A6"]]
  },
  charts:[["white","#FFFFFF"],["cream","#FFFAEA"],["peach","#FFD9C9"],["glow","#FFB088"],["deep","#C22D00"]]
},
{
  id:"sense-dark", name:"Deck · Dark. Zuper Sense", navHex:"#E85D3A", navMeta:"AI",
  tagline:"Dark, AI‑native system",
  lede:"The Zuper Sense look: a zinc near‑black canvas, glassy surfaces, and a multi‑hue accent set led by orange. Made for the AI product narrative and data‑rich, low‑light slides.",
  canvas:"#09090B",
  hero:{bg:"radial-gradient(120% 140% at 80% -10%,rgba(232,93,58,.32),transparent 55%),radial-gradient(90% 120% at 0% 0%,rgba(167,139,250,.28),transparent 50%),#09090B",ink:"#FAFAFA",sub:"#A1A1AA",kick:"#FF8B5A",chipBg:"rgba(255,255,255,.06)",chipInk:"#E4E4E7",chipLine:"rgba(255,255,255,.14)"},
  fonts:{display:"Aptos Display / 700",body:"Aptos / 400 · 700",accent:"Press Start 2P (labels)"},
  vars:{
    "surface-default":"#09090B","surface-subtle":"#141417","surface-card":"#131317","surface-pill":"#1C1C21","surface-inverse":"#FAFAFA",
    "text-primary":"#FAFAFA","text-secondary":"#A1A1AA","text-tertiary":"#71717A","text-disabled":"#52525B","text-brand":"#FF8B5A","text-inverse":"#09090B",
    "border-subtle":"#1C1C21","border-default":"#27272A","border-strong":"#3F3F46","border-brand":"#E85D3A",
    "brand-default":"#E85D3A","brand-secondary":"#FB7185","brand-subtle":"#2A1712","brand-on-brand":"#FFFFFF",
    "grad-start":"#A78BFA","grad-mid":"#E85D3A","grad-end":"#F59E0B",
    "status-error-bg":"#2A1416","status-error-fg":"#F87171","status-success-bg":"#0E2A1C","status-success-fg":"#4ADE80","status-warning-bg":"#2A2110","status-warning-fg":"#FBBF24"
  },
  primitives:{
    "Neutral · Zinc":[["zinc/50","#FAFAFA"],["zinc/200","#E4E4E7"],["zinc/400","#A1A1AA"],["zinc/500","#71717A"],["zinc/600","#52525B"],["zinc/700","#3F3F46"],["zinc/800","#27272A"],["zinc/900","#18181B"],["zinc/950","#09090B"]],
    "Brand · Orange":[["orange/200","#FFD9C9"],["orange/300","#FFB59B"],["orange/400","#FF8B5A"],["orange/500","#E85D3A"],["orange/600","#D24A1F"],["orange/700","#B84422"]],
    "Accents · Multi‑hue":[["green","#22C55E"],["amber","#F59E0B"],["sky","#38BDF8"],["violet","#A78BFA"],["rose","#FB7185"],["red","#EF4444"]]
  },
  charts:[["orange","#E85D3A"],["violet","#A78BFA"],["sky","#38BDF8"],["green","#22C55E"],["amber","#F59E0B"],["rose","#FB7185"]]
},
{
  id:"website", name:"Website DLS", navHex:"#FD5000", navMeta:"web",
  tagline:"Marketing web system",
  lede:"The zuper.co system: warm cream sections, peach gradients, orange CTAs and airy spacing. Optimised for marketing pages, navigation and conversion surfaces.",
  canvas:"#FFFFFF",
  hero:{bg:"linear-gradient(120deg,#FFFAEA 0%,#F8F5F0 40%,#F8D5C2 100%)",ink:"#1B1919",sub:"#5A554F",kick:"#FD5000",chipBg:"#FFFFFF",chipInk:"#1B1919",chipLine:"#E7E6E3"},
  fonts:{display:"Plus Jakarta Sans / 600 · 700",body:"Inter / 400 · 500 · 700"},
  vars:{
    "surface-default":"#FFFFFF","surface-subtle":"#F8F5F0","surface-card":"#FFFFFF","surface-pill":"#FFF3EC","surface-inverse":"#1B1919",
    "text-primary":"#1B1919","text-secondary":"#5A554F","text-tertiary":"#8A847C","text-disabled":"#B8B2AA","text-brand":"#FD5000","text-inverse":"#FFFFFF",
    "border-subtle":"#F4ECE4","border-default":"#E7E6E3","border-strong":"#1B1919","border-brand":"#FD5000",
    "brand-default":"#FD5000","brand-secondary":"#FF6B35","brand-subtle":"#FFE2D2","brand-on-brand":"#FFFFFF",
    "grad-start":"#DB3602","grad-mid":"#FD5000","grad-end":"#FFB088",
    "status-error-bg":"#FDECEC","status-error-fg":"#C42121","status-success-bg":"#E7F6EC","status-success-fg":"#1E854B","status-warning-bg":"#FEF3DC","status-warning-fg":"#A66A00"
  },
  primitives:{
    "Warm neutrals":[["white","#FFFFFF"],["paper","#F8F5F0"],["cream","#FFFAEA"],["cloud","#F4ECE4"],["sand","#ECE2D6"],["peach","#F8D5C2"],["line","#E7E6E3"],["ink","#1B1919"]],
    "Brand · Orange":[["orange/100","#FFE2D2"],["orange/300","#FFB088"],["orange/500","#FD5000"],["orange/600","#DB3602"]],
    Status:[["link/blue","#2563EB"],["success","#22C55E"],["error","#DC2626"],["warning","#F59E0B"]]
  },
  charts:[["brand","#FD5000"],["glow","#FF8A4C"],["blue","#2563EB"],["green","#22C55E"]],
  web:true
}
];

