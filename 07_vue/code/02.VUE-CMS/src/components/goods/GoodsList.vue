<template>
  <!-- router-link 跳转 标签跳转-->
  <!-- <div class="goods-list">
    <router-link v-for="item in goodsList" :key="item.id" class="goods-item" :to="'/home/goodsinfo/' + item.id" tag="div">
      <img :src="item.img_url"/>
      <h3> {{ item.title }}</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div> -->

  <!-- 编程式跳转-->
  <div class="goods-list">
    <div v-for="item in goodsList" :key="item.id" class="goods-item" @click="goDetail(item.id)">
      <img :src="item.img_url"/>
      <h3> {{ item.title }}</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      goodsList: []
    }
  },
  methods: {
    generateGoodsList() {
      this.$http.get("api/getgoods?pageindex=" + this.pageIndex).then(result => {
        if (result.body.status == 0) {
          this.goodsList = this.goodsList.concat(result.body.message)
        }
      })
    },
    getMore() {
      this.pageIndex++
      this.generateGoodsList()
    },
    goDetail(id) {
      //注意this.$route和this.$router的区别
      // 注意： 一定要区分 this.$route 和 this.$router 这两个对象，
      // 其中： this.$route 是路由【参数对象】，所有路由中的参数， params, query 都属于它
      // 其中： this.$router 是一个路由【导航对象】，用它 可以方便的 使用 JS 代码，实现路由的 前进、后退、 跳转到新的 URL 地址
      //简单跳转
      //this.$router.push("/home/goodsinfo/" + id)
      //传递对象
      //this.$router.push({path: "/home/goodsinfo/" + id})
      //传递命名的路由
      //this.$router.push({name: "goodsinfo", params:{id: id}}) 
      this.$router.push({name: "goodsinfo", params:{ id }}) //{id: id} ==> {id}
    }
  },
  created() {
    this.generateGoodsList()
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex; //flex布局，默认是流式布局，第一级子div 会是横向展示，而不是竖向展示
  flex-wrap: wrap; //如果 第一级子div 不能完全展示在父div上，会让 第一级子div 换行
  padding: 7px;
  justify-content: space-between; //两端对齐
  .goods-item {
    width: 49%;
    border: 1px solid #ccc; //div 的边框
    box-shadow: 0 0 8px #ccc; //div 的阴影
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 280px;
    img {
      width: 100%
    }
    h3 {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin-bottom: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  
}
</style>
 