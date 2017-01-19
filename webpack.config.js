module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist/js',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors",
    "deploy": "NODE_ENV=production webpack -p"
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.vue$/, loader: 'vue-loader'},
      { test: /\.js$/, loader: 'babel',exclude: /node_modules/},
      { test: /\.json$/,loader: 'json'},
      /*----start for ES6 ----------------------------------------------------------------------------------*/
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      /*---- end --------------------------------------------------------------------------------------------*/
      /*---- start for bootstrap ----------------------------------------------------------------------------*/
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      /*----end --------------------------------------------------------------------------------------------*/
    ]
  },
  resolve: {
   extensions: ['', '.js', '.es6']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
};