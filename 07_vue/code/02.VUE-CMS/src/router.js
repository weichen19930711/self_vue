import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login.vue'
import count from './components/count.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path: "/",
            component: login
        },
        {
            path: "/login",
            component: login
        },
        {
            path: "/count",
            component: count
        }
    ]
})

export default router