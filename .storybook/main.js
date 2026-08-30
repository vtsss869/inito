/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    // Prevent build output from thrashing the running Storybook HMR graph.
    // Watching storybook-static after `build-storybook` caused repeated
    // storybook-stories.js reloads and stale sidebar/HMR story IDs.
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
