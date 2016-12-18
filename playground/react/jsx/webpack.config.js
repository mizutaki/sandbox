module.exports = {
  entry: './src/app_spread_style.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/, // 対象となるファイルの拡張子（正規表現可）
        exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
        loader: 'babel-loader' // 使用するloader
      }
    ]
  }
};
