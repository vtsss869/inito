import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            selector: ":root",
          },
        },
      ],
    },
    tailwind: {
      transformGroup: "js",
      buildPath: "src/styles/",
      files: [
        {
          destination: "tailwind-tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
  log: { verbosity: "verbose" },
  usesDtcg: true,
});

await sd.buildAllPlatforms();
