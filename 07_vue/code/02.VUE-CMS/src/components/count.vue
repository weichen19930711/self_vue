<template>
    <div>
        <h2>{{ msg }}</h2>
        <h3>$store.state.count.count:{{ $store.state.count.count }} ===> count:{{ count }}</h3>
        <div>
            <!-- <button @click="$store.commit('add', 10)">add</button>
            <button @click="$store.commit('reduce')">reduce</button> -->
            <button @click="add(1)">add</button>
            <button @click="reduce">reduce</button>

            <button @click="addAction">addAction</button>
            <button @click="reduceAction">reduceAction</button>
        </div>
    </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            msg: '这是count组件'
        }
    },
    computed: {
        /* count() {
            return this.$store.state.count.count
        } */
        ...mapGetters([
            'count'
        ])
    },
    methods: {
        ...mapMutations([
            'add','reduce'
        ]),
        ...mapActions([
            'addAction', 'reduceAction'
        ])
    },
    store
}
</script>

<style scoped>

</style>
