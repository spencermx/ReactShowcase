const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before each build
  },

  // Development server configuration
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true, // Opens the browser automatically
    hot: true, // Enables hot module replacement
  },

  // Module rules for processing different file types
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Matches .css files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
      filename: 'index.html', // Output HTML file
    }),
  ],

  // Development mode
  mode: 'development',
};
