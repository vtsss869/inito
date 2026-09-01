/**
 * Storybook foundations helpers — documentation only.
 * Not imported by Home.
 */

// Colors below are pulled live from the Figma "🧬 Colors & Styles" page via
// figma.getLocalPaintStylesAsync() (55 named paint styles, fileKey LwXvi6EzEzOpBt6ZFVOkuq) and
// reconciled against src/styles/tokens.css. Where a Figma color is only slightly off from an
// existing app-facing token (e.g. --bg-daily-tan, --bg-daily-bbt in DailyLog.jsx), the existing
// token is left untouched and the Figma-accurate value is added alongside it — see tokens.css
// for the discrepancy notes.
export const COLOR_GROUPS = [
  {
    name: "Base",
    tokens: [
      { token: "--main", label: "Main", value: "#38ABC5" },
      { token: "--bg-white", label: "White", value: "#FFFFFF" },
      { token: "--transparent", label: "Transparent", value: "rgba(255,255,255,0.0001)" },
      { token: "--grey-base", label: "Grey", value: "rgba(197,204,206,0.2)" },
      { token: "--grey-icons", label: "Grey Icons", value: "#BDC1CD" },
      { token: "--grey-borders", label: "Grey Borders", value: "#EAECED" },
      { token: "--main-hover", label: "Main Hover", value: "#2E9BB4" },
      { token: "--violet", label: "Violet", value: "#DEDAFF" },
      { token: "--violet-gradient", label: "Violet Gradient", gradient: true },
    ],
  },
  {
    name: "Text",
    tokens: [
      { token: "--text-black", label: "Text / Black", value: "#112D35" },
      { token: "--text-error", label: "Text / Error", value: "#EF6262" },
      { token: "--text-success", label: "Text / Success", value: "#109E6F" },
      { token: "--text-white", label: "Text / White", value: "#FFFFFF" },
      { token: "--text-grey", label: "Text / Grey", value: "#7F8598" },
      { token: "--text-transparent-grey", label: "Text / Transparent Grey", value: "rgba(17,45,53,0.4)" },
    ],
  },
  {
    name: "Background",
    tokens: [
      { token: "--bg-blue", label: "Background / Background Blue", value: "#D9FBFF" },
      { token: "--bg-tan", label: "Background / Background Tan", value: "#FFEEE3" },
      { token: "--bg-grey", label: "Background / Background Grey", value: "#F6F6F6" },
      { token: "--bg-green-transparent", label: "Background / Background Green Transparent", value: "#E4FBF3" },
      { token: "--bg-violet", label: "Background / Background Violet", value: "#EEDCFF" },
      { token: "--bg-light-blue-grey", label: "Background / Background Light Blue-Grey", value: "#F7F8FD" },
      { token: "--bg-blue-dark", label: "Background / Background Blue Dark", value: "#B1E5EF" },
      { token: "--bg-green-clear", label: "Background / Background Green Clear", value: "#D0F1DC" },
      { token: "--bg-red-light", label: "Background / Background Red light", value: "#FDE6E3" },
      { token: "--bg-pink-preg", label: "Background / Pink (Preg)", value: "#F5D7F3" },
      { token: "--bg-brown", label: "Background / Brown", value: "#ECDAC8" },
      { token: "--bg-blue-bbt", label: "Background / Blue BBT", value: "#CDDCFB" },
    ],
  },
  {
    name: "Symptoms",
    tokens: [
      { token: "--symptoms-discharge-mood", label: "Symptoms / Discharge & Mood", value: "#F0950E" },
      { token: "--symptoms-flow-discharge", label: "Symptoms / Flow & Discharge", value: "#F46E5C" },
      { token: "--symptoms-discharge-meds-mood", label: "Symptoms / Discharge, Meds & Mood", value: "#409CC3" },
      { token: "--symptoms-vaginal-discharge-mood", label: "Symptoms / Vaginal Discharge & Mood", value: "#86A430" },
      {
        token: "--symptoms-vaginal-discharge-mood-2",
        label: "Symptoms / Vaginal Discharge & Mood (2nd style, different node)",
        value: "#A98A5B",
      },
      { token: "--symptoms-sex-insemination", label: "Symptoms / Sex & Insemination", value: "#D96BCF" },
      { token: "--symptoms-pregnancy-test", label: "Symptoms / Pregnancy Test", value: "#56B9B9" },
      { token: "--symptoms-follicle-tracking", label: "Symptoms / Follicle Tracking", value: "#AB66A5" },
      { token: "--symptoms-bbt", label: "Symptoms / BBT", value: "#7F8598" },
      { token: "--symptoms-blood-test-values", label: "Symptoms / Blood test values", value: "#E35454" },
      { token: "--symptoms-mood", label: "Symptoms / Mood", value: "#3389E1" },
      { token: "--symptoms-pelvic", label: "Symptoms / Pelvic pain", value: "#DB4368" },
      { token: "--symptoms-weight", label: "Symptoms / Weight", value: "#666975" },
      { token: "--symptoms-caffeine", label: "Symptoms / Caffeine", value: "#94816C" },
      { token: "--symptoms-alcohol", label: "Symptoms / Alcohol", value: "#414458" },
    ],
  },
  {
    name: "Hormones",
    tokens: [
      { token: "--hormones-e3g", label: "Hormones / E3G", value: "#109E6F" },
      { token: "--hormones-pdg", label: "Hormones / PdG", value: "#1989BC" },
      { token: "--hormones-lh", label: "Hormones / LH", value: "#8828E2" },
      { token: "--hormones-fsh", label: "Hormones / FSH", value: "#ED9512" },
      { token: "--hormones-hcg", label: "Hormones / hCG", value: "#AB66A5" },
    ],
  },
  {
    name: "Daily log fills (app-facing, src/components/ds/DailyLog.jsx)",
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
  { token: "--gradient-ovulation", label: "Ovulation" },
  { token: "--gradient-high-fertility", label: "High Fertility" },
  { token: "--gradient-low-fertility", label: "Low Fertility" },
  { token: "--gradient-miss-fertility", label: "Miss Fertility" },
  { token: "--gradient-fertile-window", label: "Fertile window" },
  { token: "--gradient-notify", label: "Notify" },
  { token: "--gradient-pregnancy", label: "Pregnancy" },
  { token: "--gradient-wfpr", label: "WFPR" },
];

export const TEXT_STYLES = [
  { variant: "header-1", label: "Header 1", sample: "Header 1", note: "40/40 Medium" },
  { variant: "header-2", label: "Header 2", sample: "Header 2", note: "28/32 Bold" },
  { variant: "header-3", label: "Header 3", sample: "Header 3", note: "24/27 SemiBold" },
  { variant: "header-4", label: "Header 4", sample: "Header 4", note: "20/24 SemiBold" },
  { variant: "lead", label: "Lead", sample: "Lead text", note: "20/20 Medium" },
  { variant: "body", label: "Body", sample: "Body text for longer copy.", note: "14/20 Medium" },
  {
    variant: "body-strikethrough",
    label: "Body Strikethrough",
    sample: "Body text for longer copy.",
    note: "14/20 Medium · line-through — Figma \"05.2 Body Strikethrough\"",
  },
  { variant: "caption-bold-16", label: "Caption Bold 16", sample: "Caption Bold 16", note: "16/20 SemiBold" },
  { variant: "caption-16", label: "Caption 16", sample: "Caption 16", note: "16/20 Medium" },
  { variant: "caption-bold-14", label: "Caption Bold 14", sample: "Caption Bold 14", note: "14/16 SemiBold" },
  { variant: "caption-14", label: "Caption 14", sample: "Caption 14", note: "14/16 Medium" },
  { variant: "mini", label: "Mini", sample: "Mini 12", note: "12/14 Medium · tracking 0.1" },
  { variant: "mini-semibold", label: "Mini Semibold", sample: "Mini Semibold", note: "12/14 SemiBold" },
  { variant: "menu-caption", label: "Menu Caption", sample: "Menu", note: "9/11 SemiBold" },
];

// Community type scale — Figma "New - SFPro - Community" (node 22321:5) on the 🧬 Text Styles
// page. A deliberately separate SF Pro scale from the Montserrat TEXT_STYLES above; per the task
// this is the ONLY one of the four text-style frames on that page to surface here (the sibling
// frames "App Styles/ Mode 1", "New App Styles - for redesign - not used", and "Website - not
// used" are intentionally excluded). Rendered via the .tc-* classes in src/styles/ds.css rather
// than Text.jsx's variant prop, since Text.jsx's `t-${variant}` prefix is reserved for the
// Montserrat scale. SF Pro isn't a licensed web font; see --font-community in tokens.css for the
// system-font fallback stack actually applied.
export const TEXT_STYLES_COMMUNITY = [
  {
    className: "tc-title-20-semibold",
    label: "Title 20 semibold",
    sample: "Title 20 semibold",
    note: "20/24 Semibold · -0.5px",
  },
  {
    className: "tc-subtitle-16-semibold",
    label: "Subtitle 16 semibold",
    sample: "Subtitle 16 semibold",
    note: "16/19 Semibold · -0.5%",
  },
  {
    className: "tc-body-14-semibold",
    label: "Body 14 semibold",
    sample: "Body 14 semibold",
    note: "14/16 Semibold · -0.5%",
  },
  { className: "tc-body-14", label: "Body 14", sample: "Body 14 for longer copy.", note: "14/18 Regular · -0.5%" },
  {
    className: "tc-body-13-semibold",
    label: "Body 13 semibold",
    sample: "Body 13 semibold",
    note: "13/15 Semibold · -0.4%",
  },
  { className: "tc-body-13", label: "Body 13", sample: "Body 13 for longer copy.", note: "13/15 Regular · -0.4%" },
  {
    className: "tc-body-12-medium",
    label: "Body 12 medium",
    sample: "Body 12 medium",
    note: "12/14 Medium · -0.4%",
  },
  { className: "tc-body-12", label: "Body 12", sample: "Body 12 for longer copy.", note: "12/16 Regular · -0.4%" },
  {
    className: "tc-caption-11-semibold",
    label: "Caption 11 semibold",
    sample: "Caption 11 semibold",
    note: "11/12 Semibold · -0.2%",
  },
  { className: "tc-caption-11", label: "Caption 11", sample: "Caption 11", note: "11/12 Regular · -0.2px" },
  { className: "tc-caption-8", label: "Caption 8", sample: "Caption 8", note: "8/12 Regular · 0" },
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
  { token: "--radius-4", value: "4px" },
  { token: "--radius-8", value: "8px" },
  { token: "--radius-20", value: "20px" },
  { token: "--radius-24", value: "24px" },
  { token: "--radius-28", value: "28px" },
  { token: "--radius-36", value: "36px" },
  { token: "--radius-pill", value: "100px" },
];
