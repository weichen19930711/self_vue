const state = {
    count: 1
}

const mutations = {
    add(state, n) {
        state.count+=n
    },
    reduce(state) {
        state.count--
    }
}

const getters = {
    count: function(state) {
        return state.count += 100
    }
}

const actions = {
    addAction(context) {
        context.commit('add', 10)
        setTimeout(() => {context.commit('reduce', 1)}, 5000)
        console.log("reduce之前执行了")
    },

    reduceAction({commit}) {
        commit('reduce')
    }
}

const count = {
    state,
    mutations,
    getters,
    actions
}

export default count