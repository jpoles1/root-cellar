module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //indentation
    'no-tabs': 'off',
    'indent': ['error', 'tab'],
    'space-before-function-paren': 'off',
    'comma-dangle': ["error", "always-multiline"],
    'quotes': ["error", "double"],
    'camelcase': "error",
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
