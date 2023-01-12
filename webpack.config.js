/*work without images*/
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]',
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      theme: path.resolve(__dirname, 'src/theme/'),
      types: path.resolve(__dirname, 'src/types/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      src: path.resolve(__dirname, 'src/'),
      mocks: path.resolve(__dirname, 'src/mocks/'),
      routes: path.resolve(__dirname, 'src/routes/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public', 'index.html'),
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/assets'),
          to: path.resolve(__dirname, 'build/assets'),
        },
      ],
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
};
