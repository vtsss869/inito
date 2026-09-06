import "../src/styles/global.css";
import "../src/styles/ds.css";

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
