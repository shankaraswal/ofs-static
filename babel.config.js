module.exports = api => {
  const isDevelopment = api.env('development')
  const isProduction = api.env('production')
  const isTest = api.env('test')

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ]

  if (isProduction) {
    plugins.push('@babel/plugin-transform-react-inline-elements')
    plugins.push('transform-react-remove-prop-types')
  }

  return {
    plugins,
    presets: [
      'react-app',
      [
        '@babel/preset-env',
        {
          corejs: 3,
          modules: isTest ? 'commonjs' : false,
          useBuiltIns: 'entry',
        },
      ],
      ['@babel/preset-react', { development: isDevelopment }],
    ],
  }
}
