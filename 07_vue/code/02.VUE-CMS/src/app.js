import Vue from 'vue'
import App from './App.vue'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import "./lib/mui/css/mui.min.css"

new Vue({
    el:'#app',
    render: c => c(App)
})