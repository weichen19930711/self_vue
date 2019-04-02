import Vue from 'vue'

import app from './App.vue'
import router from './router.js'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
import { Button } from 'mint-ui' //按需导入
Vue.component(Button.name, Button)
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})