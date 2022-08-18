const path = require('path')

const prettierConfiguration = require('./.prettierrc.json')

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react', 'react-app'],
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'config', 'webpack.config.eslint.js'),
      },
      'babel-module': {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'class-methods-use-this': 'warn',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'no-multiple-empty-lines': [
      'off',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    semi: ['warn', 'never'],
    'import/named': 'warn',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/stories.js',
          '**/*.dev.js',
          '**/*.test.js',
          'server.js',
          'postcss.config.js',
          'tests/setup.js',
        ],
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/href-no-hash': 0,
    'prettier/prettier': ['warn', prettierConfiguration],
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: true,
      },
    ],
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
