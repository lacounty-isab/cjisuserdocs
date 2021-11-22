// This plugin provides Node.js polyfills to Webpack 5.
// This is required by Redoc, which hasn't been migrated
// to Webpack 5 and relies on the default polyfills included
// with Webpack 4.
//
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function(context, options) {
  return {
    name: 'redoc-polyfill-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            fs: false,
          },
        },
        plugins: [
          new webpack.DefinePlugin({
            "process.versions.node": JSON.stringify(process.versions.node || "0.0.0"),
          }),
          new NodePolyfillPlugin(),
        ],
      };
    },
  };
};
