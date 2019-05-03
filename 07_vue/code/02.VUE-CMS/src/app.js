import Vue from 'vue'
import App from './App.vue'

/* import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload) */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

import Cookies from 'js-cookie'
Cookies.set("test", "777")
console.log(Cookies.get("test"))

import plugins from "../plugins"
Vue.use(plugins)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import router from './router'

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import store from './vuex/store'

import './filters/dateFormat.js'
router.beforeEach((to, from, next) => {
    console.log("before each...")
    console.log(to.path)
    console.log(from.path)
    console.log(next)
    let browser = Cookies.get('browser')
    console.log(browser)
    if (browser == 'ucf') { 
        console.log("ucf")
        next()
    } else {
        next()
    }

})

router.afterEach(() => {
    console.log("after each....")
})

var vm = new Vue({
    el:'#app',
    render: c => c(App),
    router,
    store
})
console.log(vm.$modal)