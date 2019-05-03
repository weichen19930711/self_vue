import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    substract(state, obj) {
      state.count -= (obj.c + obj.d)
    }
  },
  getters: {
    countOpt: function(state) {
      return "当前的count的值为：" + state.count
    }
  }
})

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store
})