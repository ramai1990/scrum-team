const {
  extensions: stylesExtensions,
} = require('../stylelint/validated-extensions');

// используется husky: ../../.husky/pre-commit
module.exports = {
  [`**/*`]: ['prettier --ignore-unknown --write'],

  [`**/*.{${stylesExtensions}}`]: ['stylelint --fix'],

  [`**/*.{js,jsx,ts,tsx}`]: [
    'eslint --fix',
    'jest --config=configs/jest/jest.config.js --bail --findRelatedTests --passWithNoTests',
  ],
};
