<template>
  <div class="article">
    <NavBar></NavBar>
    <div class="detailInfo">
      <div class="video">
        <video controls :src="model.content"></video>
        <div class="detailTextInfo">{{ model.name }}</div>
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
      model: {}
    }
  },
  created() {
    this.articleItemData()
  },
  methods: {
    async articleItemData() {
      const res = await this.$http.get(`/article/${this.$route.params.id}`)
      this.model = res.data[0]
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
    }
  }
}
</style>
