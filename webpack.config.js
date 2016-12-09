module.exports = {
  entry: "./client/js/index.js",
  output: {
    filename: "client/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components|fixtures)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
