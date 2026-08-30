/**
 * Storybook foundations helpers — documentation only.
 * Not imported by Home.
 */

export const COLOR_GROUPS = [
  {
    name: "Text",
    tokens: [
      { token: "--text-black", label: "Text / Black", value: "#112D35" },
      { token: "--text-grey", label: "Text / Grey", value: "#7F8598" },
      { token: "--text-white", label: "Text / White", value: "#FFFFFF" },
      { token: "--text-error", label: "Text / Error", value: "#EF6262" },
      { token: "--text-success", label: "Text / Success", value: "#109E6F" },
    ],
  },
  {
    name: "Background",
    tokens: [
      { token: "--bg-white", label: "Background / White", value: "#FFFFFF" },
      { token: "--bg-grey", label: "Background / Grey", value: "#F6F6F6" },
      { token: "--bg-light-blue-grey", label: "Background / Light Blue-Grey", value: "#F7F8FD" },
      { token: "--bg-green-clear", label: "Background / Green Clear", value: "#D0F1DC" },
      { token: "--grey-borders", label: "Grey Borders", value: "#EAECED" },
      { token: "--grey-icons", label: "Grey Icons", value: "#BDC1CD" },
    ],
  },
  {
    name: "Brand / Objects",
    tokens: [
      { token: "--main", label: "Main", value: "#38ABC5" },
      { token: "--hormones-e3g", label: "Hormones / E3G", value: "#109E6F" },
      { token: "--hormones-lh", label: "Hormones / LH", value: "#8828E2" },
      { token: "--hormones-pdg", label: "Hormones / PdG", value: "#1989BC" },
      { token: "--hormones-fsh", label: "Hormones / FSH", value: "#F0950E" },
      { token: "--symptoms-pelvic", label: "Symptoms / Pelvic pain", value: "#DB4368" },
      { token: "--symptoms-flow", label: "Symptoms / Flow", value: "#F46E5C" },
    ],
  },
  {
    name: "Daily log fills",
    tokens: [
      { token: "--bg-daily-pink", label: "Pink", value: "#F5D7F3" },
      { token: "--bg-daily-bbt", label: "BBT Blue", value: "#C3D3F4" },
      { token: "--bg-daily-blue-dark", label: "Blue Dark", value: "#B1E5EF" },
      { token: "--bg-daily-blue", label: "Blue", value: "#D9FBFF" },
      { token: "--bg-daily-violet", label: "Violet", value: "#EEDCFF" },
      { token: "--bg-daily-tan", label: "Tan", value: "#FFEEEE" },
      { token: "--bg-daily-red-light", label: "Red Light", value: "#FDE6E3" },
    ],
  },
];

export const GRADIENT_TOKENS = [
  { token: "--gradient-high-fertility", label: "High Fertility" },
  { token: "--gradient-ovulation", label: "Ovulation confirmed" },
  { token: "--gradient-low-fertility", label: "Low Fertility" },
  { token: "--gradient-fertile-window", label: "Fertile Window" },
  { token: "--gradient-pregnancy", label: "Pregnancy" },
  { token: "--gradient-unknown", label: "Unknown" },
];

export const TEXT_STYLES = [
  { variant: "header-1", label: "Header 1", sample: "Header 1", note: "40/40 Medium" },
  { variant: "header-2", label: "Header 2", sample: "Header 2", note: "28/32 Bold" },
  { variant: "header-3", label: "Header 3", sample: "Header 3", note: "24/27 SemiBold" },
  { variant: "header-4", label: "Header 4", sample: "Header 4", note: "20/24 SemiBold" },
  { variant: "lead", label: "Lead", sample: "Lead text", note: "20/20 Medium" },
  { variant: "body", label: "Body", sample: "Body text for longer copy.", note: "14/20 Medium" },
  { variant: "caption-bold-16", label: "Caption Bold 16", sample: "Caption Bold 16", note: "16/20 SemiBold" },
  { variant: "caption-16", label: "Caption 16", sample: "Caption 16", note: "16/20 Medium" },
  { variant: "caption-bold-14", label: "Caption Bold 14", sample: "Caption Bold 14", note: "14/16 SemiBold" },
  { variant: "caption-14", label: "Caption 14", sample: "Caption 14", note: "14/16 Medium" },
  { variant: "mini", label: "Mini", sample: "Mini 12", note: "12/14 Medium · tracking 0.1" },
  { variant: "mini-semibold", label: "Mini Semibold", sample: "Mini Semibold", note: "12/14 SemiBold" },
  { variant: "menu-caption", label: "Menu Caption", sample: "Menu", note: "9/11 SemiBold" },
];

export const SPACING_TOKENS = [
  { token: "--space-4", value: "4px" },
  { token: "--space-6", value: "6px" },
  { token: "--space-8", value: "8px" },
  { token: "--space-12", value: "12px" },
  { token: "--space-16", value: "16px" },
  { token: "--space-20", value: "20px" },
  { token: "--space-24", value: "24px" },
  { token: "--space-32", value: "32px" },
];

export const RADIUS_TOKENS = [
  { token: "--radius-8", value: "8px" },
  { token: "--radius-20", value: "20px" },
  { token: "--radius-24", value: "24px" },
  { token: "--radius-28", value: "28px" },
  { token: "--radius-36", value: "36px" },
  { token: "--radius-pill", value: "100px" },
];
