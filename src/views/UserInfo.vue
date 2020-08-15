<template>
  <div class="userInfo">
    <NavBar></NavBar>
    <img src="@/assets/bannerTop_new.png" alt="" class="backImg" />
    <UserDetail :userInfo="model"></UserDetail>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import UserDetail from '@/components/userComponents/UserDetail'

export default {
  components: {
    NavBar,
    UserDetail
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async userInfoData() {
      const res = await this.$http.get(`/user/${localStorage.getItem('id')}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      this.model = res.data[0]
    }
  },
  created() {
    this.userInfoData()
  }
}
</script>

<style lang="less" scoped>
.userInfo .backImg {
  height: 91px;
  width: 100%;
}
</style>
