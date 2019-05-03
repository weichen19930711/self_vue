import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import user from './modules/user'
import car from './modules/car'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        count,
        user,
        car
    },
    getters
}) 

export default store