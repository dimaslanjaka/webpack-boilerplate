const { merge } = require('webpack-merge');
const paths = require('./paths.cjs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const excludePatterns = require('./webpack.excludes');
const { modifyConfigJson } = require('./utils');

/**
 * @type {import('webpack').Configuration}
 */
const config = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: paths.base,
    filename: 'runtime/js/[name].[contenthash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s[a|c]ss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: excludePatterns.css
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
    // analyze webpack bundle
    // new BundleAnalyzerPlugin({
    //   // report filename
    //   reportFilename: 'runtime/index.html',
    //   // generate report file in output directory
    //   generateStatsFile: true,
    //   // auto open browser
    //   openAnalyzer: false,
    //   // 'static': generate static html on production
    //   analyzerMode: 'static'
    // })
  ]
});

module.exports = merge(config, require('./webpack.entry'));

// write to ../config.json
modifyConfigJson({ mode: 'production' });
