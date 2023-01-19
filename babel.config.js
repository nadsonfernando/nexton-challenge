module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@domain": "./src/domain",
            "@shared": "./src/shared",
            "@services": "./src/services",
            "@models": "./src/models",
            "@theme": "./src/theme",
          },
        },
      ],
    ],
  };
};
