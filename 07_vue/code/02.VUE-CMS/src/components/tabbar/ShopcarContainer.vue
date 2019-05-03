<template>
  <div class="shopcar-container">
    <div class="goodslist">
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
            <img :src="item.thumb_path"/>
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <shopcar-numbox :numboxVal="$store.getters.goodsCount[item.id]"></shopcar-numbox>
                <a href="#">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
        </div>
      </div>
		</div>
  </div>
</template>

<script>
  import ShopcarNumbox from "../subcomponents/ShopcarNumbox.vue"

  export default {
    data() {
      return {
        goodslist: []
      }
    },
    components: {
      ShopcarNumbox
    },
    methods: {
      generateGoodsList() {
        let idArr = []
        if (idArr.length < 0) {
          return
        }
        this.$store.getters.goods.forEach(good => {
          idArr.push(good.id)
        })
        this.$http.get("api/goods/getshopcarlist/" + idArr.join(',')).then(result => {
          if (result.body.status == 0) {
            result.body.message.forEach(item => {
              
            })
            this.goodslist = result.body.message
          }
        })
      }
    },
    created() {
      this.generateGoodsList()
    }
  }
</script>

<style lang="scss" scoped>
  .shopcar-container {
    background-color: #eee;
    overflow: hidden;

    .goodslist {
      .mui-card-content-inner {
          display: flex;
          align-items: center;
        }
      img {
        width: 60px;
        height: 60px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1 {
          font-size: 13px;
        }
        .price {
          color: red;
          font-weight: bold;
        }
      }
    }
  }
</style>


