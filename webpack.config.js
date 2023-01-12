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
  },
};

/*******4****** */

// const path = require('path');
// const process = require('process');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   stats: {
//     children: true,
//   },
//   mode: 'production',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: '[name].js',
//     clean: true,
//     assetModuleFilename: '[name][ext]',
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js', 'jsx'],
// alias: {
//   app: path.resolve(__dirname, 'src/app/'),
//   components: path.resolve(__dirname, 'src/components/'),
//   pages: path.resolve(__dirname, 'src/pages/'),
//   constants: path.resolve(__dirname, 'src/constants/'),
//   utils: path.resolve(__dirname, 'src/utils/'),
//   theme: path.resolve(__dirname, 'src/theme/'),
//   types: path.resolve(__dirname, 'src/types/'),
//   hooks: path.resolve(__dirname, 'src/hooks/'),
//   src: path.resolve(__dirname, 'src/'),
//   mocks: path.resolve(__dirname, 'src/mocks/'),
//   routes: path.resolve(__dirname, 'src/routes/'),
// },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'ts-loader',
//         },
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, './public', 'index.html'),
//     }),
//   ],
//   performance: { hints: false },
// };

/****3*******/

// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.tsx',

//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'build'),
//     publicPath: '/',
//     assetModuleFilename: (pathData) => {
//       const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
//       return `${filepath}/[name][ext]`;
//     },
//   },
//   plugins: [
// new HtmlWebpackPlugin({
//   template: path.join(__dirname, './public', 'index.html'),
// }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.bundle\.ts$/,
//         use: {
//           loader: 'bundle-loader',
//           options: {
//             name: '[name]',
//           },
//         },
//       },
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/,
//         type: 'asset/resource',
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//     alias: {
//       app: path.resolve(__dirname, 'src/app/'),
//       components: path.resolve(__dirname, 'src/components/'),
//       pages: path.resolve(__dirname, 'src/pages/'),
//       constants: path.resolve(__dirname, 'src/constants/'),
//       utils: path.resolve(__dirname, 'src/utils/'),
//       theme: path.resolve(__dirname, 'src/theme/'),
//       types: path.resolve(__dirname, 'src/types/'),
//       hooks: path.resolve(__dirname, 'src/hooks/'),
//       src: path.resolve(__dirname, 'src/'),
//       mocks: path.resolve(__dirname, 'src/mocks/'),
//       routes: path.resolve(__dirname, 'src/routes/'),
//     },
//   },
// };

/******2***** */
// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
// stats: {
//   children: true,
// },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.jsx', '.js'],
//     alias: {
//       app: path.resolve(__dirname, 'src/app/'),
//       components: path.resolve(__dirname, 'src/components/'),
//       pages: path.resolve(__dirname, 'src/pages/'),
//       constants: path.resolve(__dirname, 'src/constants/'),
//       utils: path.resolve(__dirname, 'src/utils/'),
//       theme: path.resolve(__dirname, 'src/theme/'),
//       types: path.resolve(__dirname, 'src/types/'),
//       hooks: path.resolve(__dirname, 'src/hooks/'),
//       src: path.resolve(__dirname, 'src/src/'),
//       mocks: path.resolve(__dirname, 'src/mocks/'),
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'ts-loader',
//         },
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//     }),
//   ],
//   performance: { hints: false },
// };

/***********1***********/
// const path = require('path');

// module.exports = {
//   mode: 'production',
//   entry: './src/index.tsx',
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts'],
//     alias: {
//       app: path.resolve(__dirname, 'src/app/'),
//       components: path.resolve(__dirname, 'src/components/*'),
//       pages: path.resolve(__dirname, 'src/pages/*'),
//       constants: path.resolve(__dirname, 'src/constants/*'),
//       utils: path.resolve(__dirname, 'src/utils/*'),
//       theme: path.resolve(__dirname, 'src/theme/*'),
//       types: path.resolve(__dirname, 'src/types/*'),
//       hooks: path.resolve(__dirname, 'src/hooks/*'),
//       src: path.resolve(__dirname, 'src/src/*'),
//       mocks: path.resolve(__dirname, 'src/mocks/*'),
//     },
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };
