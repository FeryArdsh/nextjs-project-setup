module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'prettier --write'],
  '*.{json,js,ts,jsx,tsx,html}': ['prettier --write --ignore-unknown'],
  'package.json': 'sort-package-json',
};
