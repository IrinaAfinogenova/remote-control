const path = require("path");
const URL = require("url");

const mode = process.env.NODE_ENV;

module.exports = {
  target: "node",
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    robotjs: 'commonjs robotjs',
  },
  output: {
    filename: 'main.cjs',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
