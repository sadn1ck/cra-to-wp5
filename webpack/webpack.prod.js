const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Codevolution'),
        }),
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ],
}
