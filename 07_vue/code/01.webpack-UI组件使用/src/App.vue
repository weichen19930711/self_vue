<template> 
  <div>
    <h1>这是 App 组件</h1>
    <mt-button type="default" @click="show">default</mt-button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodsList">GoodsList</router-link>
    <router-view></router-view>

    <button type="button" class="mui-btn mui-btn-warning">
      黄色
    </button>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  import './css/myToast.css'

  export default {
    data() {
      return {
        toastInstance: null
      }
    },
    created(){
      this.getList()
    },
    methods:{
      getList(){
        this.show()
        setTimeout(() => {
          this.toastInstance.close()
        }, 5000)
      },
      show(){
        this.toastInstance = Toast({
          message: '提示信息',
          duration: -1,
          position: 'top',
          className: 'myToast',
          iconClass: 'glyphicon glyphicon-ok'
        })
      }
    }
  }
</script>
<style>
    
</style>
