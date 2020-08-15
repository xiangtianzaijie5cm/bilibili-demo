<template>
  <div>
    <div class="LoginTop">
      <div></div>
      <div>{{ middleTop }}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['middleTop'],
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="less">
.LoginTop {
  height: 50px;
  background-color: white;
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.722vw;
  }
}
</style>
