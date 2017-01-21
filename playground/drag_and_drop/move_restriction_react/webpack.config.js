module.exports = {
  //context: __dirname + '/src',
  entry: {
    'react/bundle': './src/app.jsx',
    //'js/dragdrop': ['./src/dragdrop.js'],
    //'js/main': './src/main.js'
  },
  output: {
    path: __dirname +'/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: 'babel-loader', // 使用するloader
        query:
        {
          //presets:['react', 'es2015', 'stage-0']
          presets:['react', 'es2015']
        }
      }
    ]
  }
};
