module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
    'jest':true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq' : 'error',
    'no-trailing-spaces' : 'error',
    'object-curly-spacing' : [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before' : true, 'after' : true }
    ],
    'no-console' : 0
  }

}
