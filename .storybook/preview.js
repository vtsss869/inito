import "../src/styles/global.css";
import "../src/styles/ds.css";

// global.css sets body { background: #b0b0b0 } for the app's own device-frame
// demo page, and body { font-family: var(--font) } (Montserrat) as the page
// default. Neither is right for Storybook's canvas: override the background
// to white, and default text to the SF Pro stack instead of Montserrat.
// Actual DS components are unaffected — they set font-family explicitly on
// their own classes — this only changes plain/unstyled text (story headings,
// category labels) and leaves any story that explicitly demonstrates the
// Montserrat type scale (e.g. Text Styles) alone, since those set their own
// font-family via the .tc-* / style classes.
const style = document.createElement("style");
style.textContent = `
  body {
    background: #ffffff;
    font-family: -apple-system, "SF Pro Text", "SF Pro Display", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
`;
document.head.appendChild(style);

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "grey", value: "#f6f6f6" },
      ],
    },
  },
};

export default preview;
