<<template>
    <div class="photo-info-container">
        <h3 class="title">{{ photoInfo.title }}</h3>
        <div class="subTitle">
            <span>发表时间: {{ photoInfo.add_time | dateFormat }}</span>
            <span>点击: {{ photoInfo.click }}</span>
        </div>
        <hr/>
        <!-- 图片展示 -->
        <div class="thumbs">
            <!-- <img class="preview-img" v-for="(item, index) in thumbs" :src="item.src" 
            @click="$preview.open(index, thumbs)" height="100" :key="item.src"> -->
            <template>
                <vue-preview :slides="thumbs" @close="handleClose"></vue-preview>
            </template>
        </div>
        <!-- 图片描述 -->
        <div class="content" v-html="photoInfo.content"></div>

        <!-- comment -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
import comment from '../subcomponents/Comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      thumbs: []
    }
  },
  components: {
      "cmt-box": comment
  },
  created() {
    this.generatePhotoInfo()
    this.generateThumbs()
  },
  methods: {
     generatePhotoInfo() {
        let getUrl = "api/getimageInfo/" + this.id 
        this.$http.get(getUrl).then(result => {
          if (result.body.status === 0) {
            this.photoInfo = result.body.message[0]
          } else {

          }
        })
     },
     generateThumbs() {
         let getUrl = "api/getthumimages/" + this.id
        this.$http.get(getUrl).then(result => {
          if (result.body.status === 0) {
            result.body.message.forEach(item => {
                item.w = 400
                item.h = 300
                item.msrc = item.src
            })
            this.thumbs = result.body.message
          } else {

          }
        })
     },
     handleClose() {
         console.log("close")
     }
  }
}
</script>

<<style lang="scss" scoped>
    .photo-info-container {
        padding: 3px;
        .title {
            font-size: 14px;
            text-align: center;
            margin: 15px 0;
            color: #26a2ff;
        }
        .subTitle {
            font-size: 13px;
            display: flex;
            justify-content: space-between;
        }
        .content {
            font-size: 13px;
            line-height: 30px;
        }

        .test{
            figure {
                margin: 1em 10px;
                position: relative;
                width: 100px;
                display: inline;
                img{
                    margin: 10px;
                    height: 100px;
                    box-shadow: 0 0 8px #999;
                }
            }
        }
    }
</style>
