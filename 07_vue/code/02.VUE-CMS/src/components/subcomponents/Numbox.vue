<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="numboxVal" 
      @change="updateGoodsAmountOfShopCat" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>  
</template>

<script>
  import mui from '../../lib/mui/js/mui.min.js'

  export default {
    props: {
      numboxMax: Number
    },
    watch: {
      numboxMax: function(newVal) {
        if (newVal) {
          mui(".mui-numbox").numbox().setOption('max', newVal)
        }
      }
    },
    methods: {
     updateGoodsAmountOfShopCat() {
       this.$emit('updateGoodsAmountOfShopCat', parseInt(this.$refs.numboxVal.value))
     }
    },
    mounted() {
      mui(".mui-numbox").numbox()
    }
  }
</script>

<style lang="scss" scoped>

</style>
