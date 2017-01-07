module.exports = {
  context: __dirname + '/source',
  entry: {
    //'main': './es2015/main',
    //'dragdrop': './es2015/dragdrop',
    'button': './es2015/button',
  },
  output: {
    path: __dirname + '/distribution/javascript',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
