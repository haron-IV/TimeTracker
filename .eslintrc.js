module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import', // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    '@typescript-eslint',
  ],
  root: true, // For configuration cascading.
  rules: {
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-array-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-console': 1,
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
  overrides: [{ files: ['**/*.ts?(x)'] }],
}
