import Vue from 'vue'
import App from './App.vue'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import "./lib/mui/css/mui.min.css"
import Cookies from 'js-cookie'
Cookies.set("test", "777")
console.log(Cookies.get("test"))

import plugins from "../plugins"
Vue.use(plugins)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import router from './router'

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
    router
})
console.log(vm.$modal)