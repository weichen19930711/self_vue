<template>
    <div>
        <h3>这是Login组件</h3>
        <span>name: {{ name }}</span>
    </div>   
</template>
<script>
import store from '@/vuex/store'
import { mapState, mapGetters } from 'vuex'

export default {
    /* computed: {
        name() {
            return this.$store.state.user.name
        }
    }, */
    /* computed: mapState({
        count: state => state.count
    }), */
    /* computed: mapState([
        'name'
    ]), */
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    store
}
</script>
<style scoped>

</style>
