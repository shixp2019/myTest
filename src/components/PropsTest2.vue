<template>
  <div>
    <div>孙组件：{{testData}}</div>
    <div>孙组件:<button @click="output">输出</button></div>
  </div>
</template>

<script>
export default {
  name: 'PropsTest2',
  data () {
    return {
      testData: 'aaa'
    }
  },
  methods: {
    output () {
      console.log(this.$parent.testData)
    }
  },
  mounted () {
    // console.log(this.$parent)
  }
}
</script>

<style scoped>

</style>
