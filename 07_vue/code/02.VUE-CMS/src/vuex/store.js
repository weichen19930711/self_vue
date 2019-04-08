import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        count,
        user
    },
    getters
}) 

export default store