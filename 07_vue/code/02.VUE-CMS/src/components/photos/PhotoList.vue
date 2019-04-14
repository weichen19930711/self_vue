<<template>
  <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active':'']" v-for="item in cates"
                     :key="item.id" @click.prevent="generatePhotos(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>
	    </div>

        <div>
            <ul class="photo-list">
                <li v-for="item in photos" :key="item.id">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h1 class="info-title">{{ item.title }}</h1>
                        <div class="info-content" v-html="item.content"></div>
                    </div>
                </li>
                </ul>
        </div>
  </div>
</template>

<<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data() {
    return {
        cates: [],
        photos: []
    }
  },
  methods: {
    generateCates() {
        let getUrl = "api/getimgcategory"
        this.$http.get(getUrl).then(result => {
            if (result.body.status === 0) {
                result.body.message.unshift({ title: "全部", id: 0 })
                this.cates = result.body.message
            } else {

            }
        })
    },
    generatePhotos(cateId) {
        let getUrl = "api/getimages/" + cateId
        this.$http.get(getUrl).then(result => {
          if (result.body.status === 0) {
                this.photos = result.body.message
            } else {

            }  
        })
    }
  },
  created() {
    this.generateCates()
    this.generatePhotos(0)
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    }) 
  }
}
</script>

<style lang="scss" scoped>
    * { touch-action: none; }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
        }
    }

    .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
        .info-title {
            font-size: 14px;
        }
        .info-content{
            font-size: 13px;
        }
    }
</style>

