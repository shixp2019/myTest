import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      pi2: 10
    }
  },
  getters: {
    getPi1: function (state) {
      return state.pi2
    },
    getPi2: function (state) {
      return state.pi2
    }
  },
  mutations: {
    changePi2: state => {
      return state.pi2
    }
  }
})
