const path = require('path');
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: [
            './src/scripts/pages/index.js',
            "./src/styles/pages/index.scss"
        ],
        members: [
            './src/scripts/pages/members.js',
            './src/styles/pages/members.scss'
        ],
        project_career: [
            './src/scripts/pages/project_career.js',
            './src/styles/pages/project_career.scss'
        ],
        project_recruit: [
            './src/scripts/pages/project_recruit.js',
            './src/styles/pages/project_recruit.scss'
        ],
        project_tb: [
            './src/scripts/pages/project_tb.js',
            './src/styles/pages/project_tb.scss'
        ],
        project_tuv: [
            './src/scripts/pages/project_tuv.js',
            './src/styles/pages/project_tuv.scss'
        ],
        errorPage: [
            './src/scripts/pages/errorPage.js',
            './src/styles/pages/errorPage.scss'
        ],
    },
    // entry:entries,
    // output: {
    //     filename: 'js/[name].[chunkhash:8].js',
    //     path: __dirname + '/dist'
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/members.html',
            filename: 'members.html',
            chunks: ['members']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_career.html',
            filename: 'project_career.html',
            chunks: ['project_career']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_recruit.html',
            filename: 'project_recruit.html',
            chunks: ['project_recruit']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_tb.html',
            filename: 'project_tb.html',
            chunks: ['project_tb']
        }),
        new HtmlWebpackPlugin({
            template: './src/project_tuv.html',
            filename: 'project_tuv.html',
            chunks: ['project_tuv']
        }),
        new HtmlWebpackPlugin({
            template: './src/errorPage.html',
            filename: 'errorPage.html',
            chunks: ['errorPage']
        }),
    ],
    // plugins: html,
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.html$/,
            loader: "raw-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。
        }, 
        {
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
        port: 3000
    }

};