<template>
  <div class="Login">
    <LoginTop middleTop="登录Bilibili">
      <div
        slot="right"
        @click="$router.push('/register')"
        style="font-size: 3.889vw"
      >
        去注册
      </div>
    </LoginTop>

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

    <LoginBtn btnText="登录" @registerSubmit="registerSubmit"></LoginBtn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
  props: [],
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async registerSubmit() {
      let reg = /^.{6,16}$/
      if (reg.test(this.username) && reg.test(this.password)) {
        const res = await this.$http.post('/login', {
          username: this.username,
          password: this.password
        })
        this.$msg.fail(res.data.msg)
        if (res.data.code === 301 || res.data.code === 302) {
          return
        }
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.token)
        setTimeout(() => {
          this.$router.push('/userInfo')
        }, 1000)
      } else {
        this.$msg.fail('格式错误,请重新输入')
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
