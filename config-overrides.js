const path = require("path");

module.exports = function override(config) {
  config.ignoreWarnings = [/Failed to parse source map/];
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src"),
  };
  return config;
};
