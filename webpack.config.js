const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
    entry: ["@babel/polyfill", "./Client/index.js"],
    devServer: { port: 4000, open: true, hot: true, proxy: { "/api/*": "http://localhost:3000" } },
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/react'], plugins: ['@babel/plugin-proposal-class-properties'] }},
            { test: /\.css$/i, use: ['style-loader', 'css-loader']},
            {
                test: /\.s[ac]ss$/i, use:
                    [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader', options:
                                {
                                    plugins: function()
                                    {
                                        return [require('precss'), require('autoprefixer')];
                                    }
                                }
                        },
                        { loader: 'sass-loader' }
                    ]
            },
            {test: /\.(png|svg|jpe?g|gif)$/, loader: ['file-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: "Client/index.html", favicon: "Client/components/favicon.ico"}),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: { filename: "bundle.js", path: path.join(__dirname, outputDirectory) },
};