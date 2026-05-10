/*
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{css,scss,json,md}': ['prettier --write'],
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
};
