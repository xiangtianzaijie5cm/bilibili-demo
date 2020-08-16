<template>
  <div class="article" v-if="model">
    <NavBar></NavBar>
    <div class="detailInfo">
      <div class="video">
        <video controls :src="model.content"></video>
        <div class="detailTextInfo">
          <div>
            <span>{{ model.category.title }}</span>
            <span>{{ model.name }}</span>
          </div>

          <div>
            <span>{{ model.userinfo.name }}</span>
            <span>146.7万次观看</span>
            <span>5140弹幕</span>
            <span>{{ model.date }}</span>
          </div>

          <div>
            <div>
              <svg
                t="1597470420705"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2341"
                width="20"
                height="20"
              >
                <path
                  d="M957.258525 404.23316c-3.78431-11.352931-13.589115-19.609609-25.458088-21.501764l-270.406182-41.799429L540.640349 82.394759c-5.332437-11.180917-16.513355-18.40551-28.898371-18.40551 0 0 0 0 0 0-12.385016 0-23.565933 7.052579-28.898371 18.40551l-121.78599 258.021166L90.135394 381.183269c-11.868974 1.720141-21.673778 9.976818-25.630102 21.32975s-1.032085 23.909961 7.396607 32.510667L268.342012 637.140265 221.38216 921.995632c-2.064169 12.040988 3.096254 24.25399 13.073072 31.306568 9.976818 7.052579 23.221905 7.740635 33.88678 1.892155L510.193852 822.227448l241.335797 133.826978c4.816395 2.580212 10.148833 3.956325 15.48127 3.956325 0.172014 0 0.516042 0 0.688056 0 17.717453 0 31.994625-14.277171 31.994625-31.994625 0-3.956325-0.688056-7.740635-2.064169-11.352931l-44.895683-278.662859 196.956157-201.256509C958.118596 428.143121 961.042836 415.586091 957.258525 404.23316z"
                  p-id="2342"
                ></path>
              </svg>
              <span>收藏</span>
            </div>
            <div>
              <svg
                t="1597470558536"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3396"
                width="20"
                height="20"
              >
                <path
                  d="M586.7 400V64H437.4v336h-112l186.7 224 186.6-224h-112z"
                  p-id="3397"
                ></path>
                <path
                  d="M760.1 138.7h-98.7v74.7H712l169.6 373.3h-203l-74.7 112h-184l-74.7-112h-203l169.7-373.3h50.6v-74.7H264L64 578.6V960h896V578.6L760.1 138.7z"
                  p-id="3398"
                ></path>
              </svg>
              <span>缓存</span>
            </div>
            <div>
              <svg
                t="1597470605003"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4132"
                width="20"
                height="20"
              >
                <path
                  d="M896 469.333333l-298.666667-298.666666v170.666666C298.666667 384 170.666667 597.333333 128 810.666667c106.666667-149.333333 256-217.6 469.333333-217.6V768l298.666667-298.666667z"
                  fill=""
                  p-id="4133"
                ></path>
              </svg>
              <span>分享</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      model: null,
      commendList: []
    }
  },
  created() {
    this.articleItemData()
    this.commendData()
  },
  methods: {
    async articleItemData() {
      const res = await this.$http.get(`/article/${this.$route.params.id}`)
      this.model = res.data[0]
    },
    async commendData() {
      const res = await this.$http.get(`/commend`)
      this.commendList = res.data
    }
  }
}
</script>

<style scoped lang="less">
.detailInfo {
  .video {
    width: 100%;
    video {
      width: 100%;
    }
    .detailTextInfo {
      padding: 15px;
      > div:nth-child(1) {
        > span:nth-child(1) {
          padding: 0 10px;
          color: #fb7299;
          background-color: #f4f4f4;
          border-radius: 10px;
        }
      }
      > div:nth-child(2) {
        padding: 10px 10px;
        span {
          color: #aaa;
          font-size: 12px;
          margin-right: 5px;
        }
        > span:nth-child(1) {
          font-size: 15px;
          color: #000;
          padding-right: 10px;
        }
      }
      > div:nth-child(3) {
        display: flex;
        div {
          display: flex;
          align-items: center;
          color: #757575;
          padding: 5px 8px;
          span {
            margin: 0 3px;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
