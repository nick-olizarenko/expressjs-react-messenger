const withTM = require("next-transpile-modules")();

module.exports = withTM({
  reactStrictMode: true,
  distDir: 'dist'
});
