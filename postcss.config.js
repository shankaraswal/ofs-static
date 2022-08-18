const postCssAutoPrefixer = require('autoprefixer')

module.exports = {
  // Necessary for external CSS imports to work
  // https://github.com/facebook/create-react-app/issues/2677
  ident: 'postcss',
  plugins: [postCssAutoPrefixer()],
}
