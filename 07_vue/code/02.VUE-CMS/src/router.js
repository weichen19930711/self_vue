import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './views/login.vue'
import count from './components/count.vue'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'

import GoodsList from './components/goods/GoodsList.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomeContainer
        },
        {
            path: "/login",
            component: login
        },
        {
            path: "/count",
            component: count
        },
        {
            path: "/home",
            component: HomeContainer
        },
        {
            path: "/member",
            component: MemberContainer
        },
        {
            path: "/search",
            component: SearchContainer
        },
        {
            path: "/cart",
            component: ShopcarContainer
        },
        {
            path: "/home/newslist",
            component: NewsList
        },
        {
            path: "/home/newslist/:id",
            component: NewsInfo
        },
        {
            path: "/home/photolist",
            component: PhotoList
        },
        {
            path: "/home/photoInfo/:id",
            component: PhotoInfo
        },
        {
            path: "/home/goodslist",
            component: GoodsList
        }
    ],
    linkActiveClass: "mui-active"
})

export default router