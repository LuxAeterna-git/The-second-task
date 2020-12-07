 const path = require('path')
 const HTMLWebpackPlagin = require('html-webpack-plugin')
 const MiniCssExtractPlugin = require('mini-css-extract-plugin')

 module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlagin({
            filename: `index.html`,
            template: './src/index.pug',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader
                  },
                  'css-loader', 'sass-loader'
                ],
            }
        ]
    },
    
}