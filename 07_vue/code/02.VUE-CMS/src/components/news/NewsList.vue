<<template>
  <div>
    <ul class="mui-table-view">
        <!--key只接受 number 和 String-->
        <!--
            2个问题
                1 底部看不到 加padding-bottom
                2 时间格式问题 加全局过滤器 
        -->
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
            <router-link :to="'/home/newslist/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h1>{{ item.title }}</h1>
                    <p class='mui-ellipsis'>
                        <span>发表时间: {{ item.add_time | dateFormat }}</span>
                        <span>点击: {{ item.click }}</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
  data() {
    return {
        newsList: null
    }
  },
  
  created() {
    this.generateNewsList()
  },

  methods: {
    generateNewsList(){
        this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then(result => {
            if(result.body.status === 0) {
                this.newsList = result.body.message
            } else {
                Toast("获取新闻列表失败")
            }
        })
    }
  }


}
</script>

<<style lang="scss" scoped>
    .mui-table-view {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            color: blue;
            display:flex;
            justify-content: space-between;
        }
    }
</style>

