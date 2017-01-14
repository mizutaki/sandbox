module.exports = {
  entry: {
    'react/bundle': './src/app.jsx',
    'js/dragdrop': './src/dragdrop',
    'js/main': './src/main'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: 'babel-loader', // 使用するloader
        query:
        {
          presets:["react", 'stage-2']
        }
      }
    ]
  }
};
