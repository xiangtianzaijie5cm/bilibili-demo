<template>
  <div class="edit" v-if="model">
    <div style="margin-bottom: 10px;">
      <NavBar></NavBar>
    </div>
    <div class="upload-div">
      <van-uploader
        class="upload-avatar"
        preview-size="100vw"
        :after-read="afterRead"
      />
      <EditBanner left="头像">
        <img v-if="model.user_img" :src="model.user_img" alt="" slot="right" />
        <img v-else src="@/assets/avatar.jpg" alt="" />
      </EditBanner>
    </div>
    <EditBanner left="姓名">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </EditBanner>
    <EditBanner left="昵称" @bannerClick=";(show = true), (title = '昵称')">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </EditBanner>
    <EditBanner left="性别" @bannerClick="selectGenderShow = true">
      <a href="javascript:;" slot="right">{{
        model.gender === 1 ? '男' : '女'
      }}</a>
    </EditBanner>
    <EditBanner left="出生日期"></EditBanner>
    <EditBanner
      left="个性签名"
      @bannerClick=";(desc_dialog_show = true), (title = '个性签名')"
    >
      <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
    </EditBanner>

    <div class="edit-back" @click="$router.push('/userInfo')">
      返回个人中心
    </div>
    <van-dialog
      v-model="show"
      :title="title"
      show-cancel-button
      @confirm="confirmClick"
      @cancle="content = ''"
    >
      <van-field v-model="content" autofocus placeholder="请输入修改内容" />
    </van-dialog>
    <van-dialog
      v-model="desc_dialog_show"
      :title="title"
      show-cancel-button
      @confirm="descDialogConfirmClick"
      @cancle="content = ''"
    >
      <van-field v-model="content" autofocus placeholder="请输入修改内容" />
    </van-dialog>

    <van-action-sheet
      v-model="selectGenderShow"
      :actions="actions"
      @select="onSelect"
      cancel-text="取消"
    />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import EditBanner from '@/components/common/EditBanner'
export default {
  components: {
    NavBar,
    EditBanner
  },
  data() {
    return {
      model: {},
      show: false,
      content: '',
      title: '',
      desc_dialog_show: false,
      selectGenderShow: false,
      actions: [
        { name: '男', value: 1 },
        { name: '女', value: 0 }
      ]
    }
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get(`/user/${localStorage.getItem('id')}`)
      this.model = res.data[0]
    },
    async afterRead(file) {
      const formData = new FormData()
      formData.append('file', file.file)
      const res = await this.$http.post('/upload/', formData)
      this.model.user_img = res.data.url
      this.updataUser()
    },

    async updataUser() {
      const res = await this.$http.post(
        `/update/${localStorage.getItem('id')}`,
        this.model
      )
      if (res.data.code === 200) {
        this.$msg.success('修改成功')
      }
    },
    async confirmClick() {
      this.model.username = this.content
      // const res = await this.$http.post(`/`)
      this.content = ''
    },
    descDialogConfirmClick() {
      this.model.user_desc = this.content
      this.content = ''
    },
    onSelect(data) {
      this.model.gender = data.value
      this.updataUser()
      this.selectGenderShow = false
    }
  },
  created() {
    this.selectUser()
  }
}
</script>

<style scoped lang="less">
.edit a {
  color: #333;
}
.edit img {
  width: 47px;
  height: 47px;
  border-radius: 50%;
}
.upload-div {
  position: relative;
  overflow: hidden;

  .upload-avatar {
    position: absolute;
    opacity: 0;
  }
}
.edit-back {
  background-color: white;
  margin-top: 15px;
  font-size: 4.722vw;
  color: #999;
  padding: 15px 5px;
  text-align: center;
}
</style>
