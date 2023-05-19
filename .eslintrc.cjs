module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 0,
    'no-undef': 'off',
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
      },
    ],
  },
};
