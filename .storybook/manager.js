import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "Inito Design System",
  brandUrl: "https://inito.com",
  brandTarget: "_self",

  colorPrimary: "#38abc5",
  colorSecondary: "#38abc5",

  appBg: "#f7f8fd",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#eaeced",
  appBorderRadius: 10,

  fontBase:
    '-apple-system, "SF Pro Text", "SF Pro Display", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode: '"SF Mono", Menlo, Monaco, Consolas, "Courier New", monospace',

  textColor: "#112d35",
  textInverseColor: "#ffffff",
  textMutedColor: "#7f8598",

  barTextColor: "#7f8598",
  barSelectedColor: "#38abc5",
  barHoverColor: "#2e9bb4",
  barBg: "#ffffff",

  inputBg: "#ffffff",
  inputBorder: "#eaeced",
  inputTextColor: "#112d35",
  inputBorderRadius: 8,
});

addons.setConfig({
  theme,
});
