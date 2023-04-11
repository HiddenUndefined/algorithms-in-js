module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['warn', 'single'],
    'comma-dangle': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'template-curly-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup']
  }
}
