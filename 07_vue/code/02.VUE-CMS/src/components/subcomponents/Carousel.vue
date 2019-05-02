<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in carouselPics" :key="item.id" >
        <img :class="{'full': isfull}" :src="item.img" alt=""/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: {
    carouselPics: {
      type: Array
    },
    isfull: Boolean 
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height:200px;
  .mint-swipe-item {
    text-align: center;
    /* &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: yellow;
    } */
    img {
      //width: 100%;
      height: 100%;
    }
  }
}
.full {
  width: 100%;
}
</style>

