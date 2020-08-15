<template>
  <div class="home">
    <NavBar></NavBar>

    <van-tabs swipeable v-model="active" sticky>
      <van-tab
        v-for="(item, index) in category"
        :title="item.title"
        :key="index"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="immediate_check"
        >
          <div class="detailParent">
            <Detail
              class="detailItem"
              v-for="(categoryItem, categoryIndex) in item.list"
              :key="categoryIndex"
              :detailItem="categoryItem"
            ></Detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/NavBar.vue'
import Detail from './Detail.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Detail
  },
  data() {
    return {
      category: [],
      active: 0,
      loading: false,
      finished: false,
      immediate_check: false
    }
  },
  watch: {
    active() {
      this.selectActicle()
    }
  },
  created() {
    this.selectCategory()
  },
  methods: {
    onLoad() {
      const categoryItem = this.categoryItem()
      categoryItem.page += 1
      setTimeout(() => {
        this.selectActicle()
        this.loading = false
      }, 1000)
    },
    async selectCategory() {
      const res = await this.$http.get(`/category/`)
      this.changeCategory(res.data)
    },
    changeCategory(data) {
      const category1 = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pageSize = 10
        return item
      })
      this.category = category1
      this.selectActicle()
    },
    async selectActicle() {
      const categoryItem = this.categoryItem()
      const res = await this.$http.get(`/detail/${categoryItem._id}`, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pageSize
        }
      })
      categoryItem.list.push(...res.data)
      if (res.data.length < 10) {
        this.finished = true
      }
    },

    categoryItem() {
      const categoryItem = this.category[this.active]
      return categoryItem
    }
  }
}
</script>

<style scoped lang="less">
.home {
  background-color: white;
}
.detailParent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailItem {
    width: 45%;
    margin: 5px 0;
  }
}
</style>
