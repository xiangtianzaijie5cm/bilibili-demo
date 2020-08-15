<template>
  <div class="editBanner" @click="handleClick">
    <span>{{ left }}</span>
    <span><slot name="right"/></span>
  </div>
</template>

<script>
export default {
  props: ['left'],
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style scoped lang="less">
.editBanner {
  background-color: white;
  padding: 4.167vw;
  font-size: 3.889vw;
  border-bottom: 1px solid #fafafa;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
