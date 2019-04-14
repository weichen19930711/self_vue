<template> 
  <div class="app-container">
    <!--header-->
    <mt-header fixed title="饿了么"></mt-header>
    <!--content-->
    <!-- <h1>这是 App 组件</h1>
		<router-link to="/login">login</router-link>
		<router-link to="/count">count</router-link>
		<router-view></router-view> -->
    <!--tabbar-->

		<!--mode="out-in" 前面的画面完全消失，之后的画面才出现
				用户体验不好：感觉就像是要稍等一会，下一个画面才会出现，
				不能实现前面的画面边消失，后面的画面边进来
			-->
		<transition>
			<router-view></router-view>
		</transition>

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lib" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
  
</script>
<style lang="scss" scoped>
	.app-container {
		padding-top: 40px;
		padding-bottom: 65px;
		overflow-x: hidden;//注意只能给x轴加上over-flow属性
	}

	/*
    动画4个问题
      1 标题移动
      2 进来的时候先在底部，再到顶部
      3 底部消失，底部出现 滚动条
      4 从右到左进入，从左往右出
		
		解决
			1 去掉滚动条【当前后两个画面同框时div的宽变大了，所有出现 1 和 3】
  */
 
  /* //进来之前 时间点
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  //进来的过程 【整个过程都有】
  .v-enter-active{
    transform: all 0.5s ease;
  }

	//离开的过程【不包括最后离开 v-leave】
  .v-leave-to {
		opacity: 0;
		transform: translateX(100%);
  }
	//离开的过程【离开的整个过程】
  .v-leave-active {
		 transform: all 0.5s ease;
  } */

		.v-enter {
      opacity: 0;
      transform: translateX(100%);
    }
    .v-enter-active {
      transition: all 0.5s ease;
    }

    .v-leave-to {
      opacity: 0;
      transform: translateX(-100%);
			position: absolute;
    }
    .v-leave-active {
      transition: all 0.5s ease;
    }

		.mint-header {
			z-index: 99;
		}
		.mui-bar-tab .mui-tab-item-lib.mui-active {
				color: #007aff;
		}
		.mui-bar-tab .mui-tab-item-lib {
			display: table-cell;
			overflow: hidden;
			width: 1%;
			height: 50px;
			text-align: center;
			vertical-align: middle;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #929292;
		}

		.mui-bar-tab .mui-tab-item-lib .mui-icon {
				top: 3px;
				width: 24px;
				height: 24px;
				padding-top: 0;
				padding-bottom: 0;
		}

		.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-tab-label {
				font-size: 11px;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
		}
</style>
