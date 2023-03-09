module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'max-len': [
      'error', {
        comments: 250,
        code: 120
      }],

    semi: [
      'error',
      'always'
    ]
  }
};
