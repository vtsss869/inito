import "../src/styles/tokens.css";
import "../src/styles/ds.css";
import "./preview.css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        white: { name: "White", value: "#FFFFFF" },
        grey: { name: "Background Grey", value: "#F6F6F6" },
        highFertility: {
          name: "High Fertility",
          value: "linear-gradient(163.04deg, #0ACA89 0%, #109E6F 99.16%)",
        },
      },
    },
    a11y: {
      test: "todo",
    },
  },
  initialGlobals: {
    backgrounds: { value: "white" },
  },
};

export default preview;
