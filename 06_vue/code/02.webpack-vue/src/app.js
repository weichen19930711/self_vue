//webpack ./src/app.js -o ./dist/bundle.js
console.log('ok')
//ES6写法
import Vue from 'vue'
//方式1
//import Vue from '../node_modules/vue/dist/vue.js'
//方式2 修改webpack.config 文件 resolve: {alias: {'vue$': 'vue/dist/vue.ems.js'} }
// import Vue from 'vue'
 //Node 写法 var Vue = require('vue')

import login from "./login.vue"

new Vue({
    el:'#app',
    data: {
        msg: 'webpack vue'
    },
    // comments:{
    //     login
    // },
    render: c => c(login)
})