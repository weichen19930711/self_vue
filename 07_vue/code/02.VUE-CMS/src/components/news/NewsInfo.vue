<<template>
  <div class="news-info-container">
      <h3 class="title">{{ newsInfo.title }}</h3>
      <p class="subtitle">
          <span>发表时间: {{ newsInfo.add_time | dateFormat }}</span>
          <span>点击次数: {{ newsInfo.click }}</span>
      </p>
      <div class="content" v-html="newsInfo.content"></div>

      <comment-box :id="id"></comment-box>
  </div>
</template>

<<script>
import {Toast} from "mint-ui"
import comment from '../subcomponents/Comment.vue'
export default {
  data() {
      return {
          id: this.$route.params.id,
          newsInfo: {

          }
      }
  },
  created() {
      this.generateNewsInfo()
  },
  methods: {
      generateNewsInfo() {
          this.$http.get("api/getnew/" + this.id).then(result => {
            if(result.body.status === 0) {
                this.newsInfo = result.body.message[0]
            } else {
                Toast("获取新闻失败")
            }
          })
      }
  },
  components: {
      "comment-box": comment
  }
}
</script>

<<style lang="scss" scoped>
  .news-info-container{
    padding: 0px 4px;
    .title{
        font-size: 16px;
        color: red;
        margin: 15px 0;
        text-align: center;
    }
    .subtitle {
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }
    .content {

    }
  }           
</style>
