<template>
  <div class="shopcar-container">
    <div class="goodslist">
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch 
              v-model="$store.getters.goodsSelected[item.id]"
              @change="switchChanged(item.id, $store.getters.goodsSelected[item.id])">
            </mt-switch>
            <img :src="item.thumb_path"/>
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <shopcar-numbox :numboxVal="$store.getters.goodsCount[item.id]" :goodsId="item.id"></shopcar-numbox>
                <a href="#" @click.prevent="removeGoods(item.id, i)">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods_settle">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品<span class="goods_count">{{ $store.getters.goodsSettleInfo.count }}</span>件，
              总价 ￥<span class="goods_price">{{ $store.getters.goodsSettleInfo.amount }}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
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
      },
      removeGoods(id, i) {
        this.$store.commit("removeGoods", id)
        //根据数组索引删除指定索引的 对象
        this.goodslist.splice(i, 1)
      },
      switchChanged(id, selected) {
        this.$store.commit("updateGoodsSelected", {id, selected})
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
  .goods_settle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .goods_count, .goods_price {
      font-size: 16px;
      font-weight: bold;
      color: red
    }
  }
</style>


