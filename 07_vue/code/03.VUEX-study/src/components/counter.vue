<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="this.$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    remove() {

    },
    add() {
      this.$store.commit("increment")
    },
    remove() {
      this.$store.commit("substract", {c: 1, d:3})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
