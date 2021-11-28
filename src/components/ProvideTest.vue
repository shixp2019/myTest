<template>
  <div>
    provide测试：<input v-model="user.name"><input v-model="provideAge">
  </div>
</template>

<script>
export default {
  name: 'ProvideTest',
  data () {
    return {
      name: ''
    }
  },
  // inject: ['user'],
  inject: {
    user: {},
    provideAge: {}
  },
  mounted: function () {
    // console.log(this.location, this.geolocation)
    // this.name = this.user.name
    // console.log(this.provideAge)
  }
}
</script>

<style>

</style>
