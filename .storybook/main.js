/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.server = config.server || {};
    config.server.watch = config.server.watch || {};
    const ignored = config.server.watch.ignored;
    const extra = ["**/storybook-static/**"];
    if (Array.isArray(ignored)) {
      config.server.watch.ignored = [...ignored, ...extra];
    } else if (ignored) {
      config.server.watch.ignored = [ignored, ...extra];
    } else {
      config.server.watch.ignored = extra;
    }
    return config;
  },
};

export default config;
