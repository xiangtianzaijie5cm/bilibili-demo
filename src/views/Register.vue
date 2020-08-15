<template>
  <div class="Register">
    <LoginTop middleTop="注册Bilibili">
      <div
        slot="right"
        @click="$router.push('/login')"
        style="font-size: 3.889vw"
      >
        去登录
      </div>
    </LoginTop>
    <LoginText
      type="text"
      label="姓名"
      placeholder="请输入姓名"
      style="margin: 4.167vw 0"
      rule="^.{6,16}$"
      @inputChange="content => (name = content)"
    ></LoginText>
    <LoginText
      type="text"
      label="用户名"
      placeholder="请输入用户名"
      rule="^.{6,16}$"
      @inputChange="content => (username = content)"
    ></LoginText>
    <LoginText
      type="password"
      label="密码"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @inputChange="content => (password = content)"
    ></LoginText>

    <LoginBtn btnText="注册" @registerSubmit="registerSubmit"></LoginBtn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'

export default {
  data() {
    return {
      name: '',
      username: '',
      password: ''
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods: {
    async registerSubmit() {
      let reg = /^.{6,16}$/
      //正则校验
      if (
        reg.test(this.name) &&
        reg.test(this.username) &&
        reg.test(this.password)
      ) {
        const res = await this.$http.post('/register', {
          name: this.name,
          username: this.username,
          password: this.password
        })
        if (res.data.code === 200) {
          this.$msg.success(res.data.msg)
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('token', res.data.token)
          setTimeout(() => {
            this.$router.push('/userInfo')
          }, 1000)
        }
        if (res.data.code === 302) {
          this.$msg.fail(res.data.msg)
        }
      } else {
        this.$msg.fail('格式错误')
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
