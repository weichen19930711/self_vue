const user = {
    state: {
        name: 'test'
    },
    mutations: {
        CHANGE_NAME: (state, data) => {
            state.name = data
        }
    },
    actions: {
        changeName({commit}, data) {
            commit('CHANGE_NAME', data)
        }
    }
}

export default user