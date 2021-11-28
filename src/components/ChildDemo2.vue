<template>
  <div>
    <div>
      <button @click="showFlag = true">测试teleport</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildDemo2',
  data () {
    return {
      showFlag: false
    }
  }
  // beforeCreate () {
  //   console.log('beforeCreate2')
  // },
  // created () {
  //   console.log('created2')
  // },
  // beforeMount () {
  //   console.log('beforeMount2')
  // },
  // mounted () {
  //   console.log('mounted2')
  // },
  // activated () {
  //   console.log('activated2')
  // },
  // deactivated () {
  //   console.log('deactivated2')
  // }
}
</script>

<style>

</style>
