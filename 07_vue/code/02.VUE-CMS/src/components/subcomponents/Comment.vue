<<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr/>
      <textarea placeholder="请输入评论, 最多输入120个字符" maxlength="120" v-model="comment"></textarea>
      <mt-button type="primary" size="large" @click="addComment">提交</mt-button>
      <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
            <div class="cmt-item-title">
                第 {{ i+1 }}楼&nbsp;&nbsp;{{ item.user_name }}：&nbsp;&nbsp;发表时间：{{ item.add_tiem | dateFormat}}
            </div>
            <div class="cmt-item-content">
                {{ item.content === "undefined" || item.content.trim() === "" ? "该用户很懒，没有评论" : item.content  }}
            </div>
          </div>
      </div>
      <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>
  </div>
</template>

<<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            pageIndex: 1,
            comments: [],
            comment: ""
        }
    },
    props: {
        id: String,
        hasPage: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.generateComments()
    },
    methods: {
        generateComments() {
            let getUrl = "api/getcomments/" + this.id + "?pageindex=" + this.pageIndex
            this.$http.get(getUrl).then(result => {
                if(result.body.status === 0) {
                    this.comments = this.comments.concat(result.body.message)
                } else {
                    Toast("获取评论失败")
                }
            })
        },
        getMoreComments() {
            this.pageIndex += 1
            this.generateComments()
        },
        addComment() {
            if(this.comment.trim().length === 0){
                return Toast("评论不能为空")
            }
            let addUrl = "api/postcomment/" + this.id
            this.$http.post(addUrl, {content: this.comment}).then(result => {
                if(result.body.status === 0) {
                    let newComment = {
                        user_name: "匿名用户",
                        add_time: Date.now(),
                        content: this.comment
                    }
                    this.comments.unshift(newComment)
                } else {
                    Toast("添加评论失败")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .cmt-container{
        h3 {
            font-size: 14px;
        }
        textarea {
            font-size: 13px;
            margin-bottom: 0;
            height: 85px;
        }
        .cmt-list {
            margin: 5px 0px;
            .cmt-item {
                font-size: 13px;
                .cmt-item-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-item-content {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>

