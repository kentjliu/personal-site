const StaticFilesCopy = require('parcel-plugin-static-files-copy');
const path = require("path");

module.exports = {
  plugins: [
    new StaticFilesCopy({
      assets: [
        { from: 'audio', to: 'audio' },
        { from: 'img', to: 'img' }
      ],
    }),
  ],
  config: path.resolve(__dirname, 'webpack.config.js'),
};
