<template>
  <div>
    <div>当前组件pi={{getPi2}}，测试vuex,获取pi={{getPi}},object={{getObject}},pi={{this.$store.state.pi}}
      <button @click="changePi">修改pi</button>
      <button @click="addObject">增加object属性</button>
      <button @click="addObjectAsycn">测试actions</button>
    </div>
    <div>测试getters{{this.$store.getters.doneTodos}},{{this.$store.getters.doneTodosByParam(false)}}</div>
    <div><input v-model="name"></div>
    <div>module测试</div>
  </div>
</template>

<script>

export default {
  name: 'Vuex',
  data () {
    return {
      pi: 10,
      object: {a: '1'}
    }
  },
  methods: {
    changePi: function () {
      // this.$store.commit('changePi', 100)
      this.$store.commit('changePi', {mount: 10})
    },
    addObject: function () {
      this.$store.commit({type: 'addObject'})
    },
    addObjectAsycn: function () {
      // this.$store.dispatch('addObjectAsyc')
      this.$store.dispatch('changePiAsyc2', {mount: 20})
    }
  },
  computed: {
    getPi () {
      return this.$store.state.pi
    },
    getPi2 () {
      return this.pi
    },
    getObject () {
      return this.$store.state.object
    },
    name: {
      get () {
        return this.$store.state.object.name
      },
      set (value) {
        this.$store.commit('updateObject', {name: value})
      }
    }
  },
  mounted () {
    // console.log(this.$store.state.pi)
  }
}
</script>

<style>

</style>
