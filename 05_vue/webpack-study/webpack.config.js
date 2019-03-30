const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
console.log("根目录: === "+__dirname)
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: 'index.html'
        })
    ],
    module: {
        rules:[
            {
                /*compiler?, enforce?, exclude?, include?, issuer?, loader?, loaders?, oneOf?, options?, 
                parser?, query?, resolve?, resource?, resourceQuery?, rules?, sideEffects?, test?, type?, use? */
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //从右到左
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}