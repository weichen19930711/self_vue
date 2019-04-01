import Vue from 'vue'
import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        { 
            path: '/',
            component: account
         },
        {
            path: "/account",
            component: account,
            children: [
                {
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        },
        { 
            path: '/goodslist',
            component: goodsList
         }
    ]
})

export default router