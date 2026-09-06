import "../src/styles/global.css";
import "../src/styles/ds.css";

const style = document.createElement("style");
style.textContent = `
  body {
    background: #ffffff;
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
