<template>
  <div class="btnParent">
    <div class="LoginBtn" @click="registerClick">
      {{ btnText }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['btnText'],
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    registerClick() {
      this.$emit('registerSubmit')
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.btnParent {
  padding: 4.167vw 2.778vw;
}
.LoginBtn {
  height: 12.5vw;
  background-color: #ff9db5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22.5px;
  font-size: 4.444vw;
}
</style>
