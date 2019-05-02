<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg"/>
      <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥2195</span>
          <span class="old">￥2499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg"/>
      <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥2195</span>
          <span class="old">￥2499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg"/>
      <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
      <div class="info">
        <p class="price">
          <span class="now">￥2195</span>
          <span class="old">￥2499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
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
