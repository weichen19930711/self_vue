const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const VueLoaderPlugin = require("vue-loader/lib/plugin")

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
        }),
        new VueLoaderPlugin()
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
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { 
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'url-loader' 
            }
        ]
    },
    resolve: {
        alias: {
            //import ** from "vue" 以vue结尾的时候，指定导入的文件，修改配置文件要重新编译
            //'vue$': 'vue/dist/vue.esm.js'
        }
    }
}