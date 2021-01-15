
module.exports = {
  plugins: [
    require('postcss-import')({
      from: './src/asets/css/',
    }),
    require('autoprefixer'),
    require('postcss-modules')({
      scopeBehaviour: 'global',
    }),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
  ]
};
