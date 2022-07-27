const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*': ['yarn pretty:write'], // .prettierrc takes care of filtering files.
  '*.{js,jsx,ts,tsx}': ['yarn test:all'],
};
