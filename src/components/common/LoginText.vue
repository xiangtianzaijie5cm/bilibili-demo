<template>
  <div class="LoginText">
    <van-cell-group>
      <van-field
        :type="type"
        :label="label"
        :placeholder="placeholder"
        :rule="rule"
        v-model="content"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: ['label', 'placeholder', 'type', 'rule'],

  data() {
    return {
      content: ''
    }
  },

  computed: {},

  created() {},

  mounted() {},

  watch: {
    content() {
      this.handleRule()
    }
  },

  methods: {
    handleRule() {
      const reg = new RegExp(this.rule)
      if (reg.test(this.content)) {
        // 正则校验成功  向父组件发送数据
        this.$emit('inputChange', this.content)
      }
    }
  },

  components: {}
}
</script>

<style scoped lang="less"></style>
