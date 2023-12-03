const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExstractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: "./src/app.js",
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        },
        {
            test: /\.css$/,
            use: [
                MiniCSSExstractPlugin.loader,
                'css-loader'
            ]
        }
    ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            //filename: 'main.html'
        }),
        new MiniCSSExstractPlugin({
            //filename: 'main.css'
        }
       )
    ]
}