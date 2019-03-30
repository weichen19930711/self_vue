const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")


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
            template: path.resolve(__dirname, "./src/index.html"),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 7631, //是否转为Base64  Yes 图片字节 < limit   No 图片字节 >= limit
                    name: 'media/[name].[hash:7].[ext]' //指定生成图片的名称
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, './src'),
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            //'vue$': 'vue/dist/vue.esm.js'
        }
    }
}