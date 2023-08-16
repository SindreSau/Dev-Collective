/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 140,
  tabWidth: 2,
  semi: true,
};

module.exports = config;
