const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [{
                test: /\.js/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /.\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.svg|png/,
                use: [{
                    loader: 'file-loader',
                }, ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        }),
        new MiniCssExtractPlugin()

    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
    },
}