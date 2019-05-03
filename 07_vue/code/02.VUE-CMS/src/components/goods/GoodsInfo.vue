<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <carousel :carouselPics="carouselPics" :isfull="false"></carousel>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsInfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsInfo.market_price }}</del>&nbsp;&nbsp;
            销售价：<span class="now_price">￥{{ goodsInfo.sell_price }}</span>
          </p>
          <p>购买数量：<numbox></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsInfo.goods_no }}</p>
          <p>库存情况：{{ goodsInfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsInfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button plain type="primary" size="large" @click="goDesc()">图文介绍</mt-button>
        <mt-button plain type="danger" size="large" @click="goComments()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "../subcomponents/Carousel.vue"
import numbox from "../subcomponents/Numbox.vue"

export default {
  data() {
    return {
      id: this.$route.params.id,
      carouselPics: [],
      goodsInfo: {}
    }
  },
  components: {
    carousel,
    numbox
  },
  methods: {
    generateCarouselPics() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status == 0) {
          result.body.message.forEach(item => {
            item.img = item.src
          })
          this.carouselPics = result.body.message
        }
      })
    },
    generateGoodsInfo() {
      this.$http.get("api/goods/getinfo/" +this.id).then(result => {
        if (result.body.status == 0) {
          this.goodsInfo = result.body.message[0]
        }
      })
    },
    goDesc() {
      this.$router.push({name: "goodsDesc", params: {id: this.id}})
    },
    goComments() {
      this.$router.push({name: "goodsComment", params: {id: this.id}})
    }
  },
  created() {
    this.generateCarouselPics()
    this.generateGoodsInfo()
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    font-size: 16px;
    color: red;
    font-weight: bold;
  }

  //button的父元素div是flex， 导致button不能换行显示，button中间加上<br/>也不起作用，
  //只有更换父元素的显示方式为block
  .mui-card-footer {
    display: block;

    button {
      margin: 15px 0;
    }
  }
}

</style>
