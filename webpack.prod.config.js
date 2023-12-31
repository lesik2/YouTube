/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
