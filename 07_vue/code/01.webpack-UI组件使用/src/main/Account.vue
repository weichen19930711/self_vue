<<template>
  <div>
      <h1>这是Account组件</h1>
      <router-link to="/account/login">login</router-link>
      <router-link to="/account/register">register</router-link>
      <router-view></router-view>
  </div>
</template>
<<script>

</script>
<style lang="scss" scoped>
  body {
    div {
      font-style: italic;
    }
  }
</style>
