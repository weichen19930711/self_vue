import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App.vue'
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path: "/",
            component: account
        },
        {
            path: "/account",
            component: account
        },
        {
            path: "/goodsList",
            component: goodsList
        }
    ]
})

var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(app),
    router
})