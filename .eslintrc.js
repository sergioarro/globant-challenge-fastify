module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    '@typescript-eslint/no-unused-vars': 1
  }
}
