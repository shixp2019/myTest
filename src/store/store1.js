import Vue from 'vue'
import Vuex from 'vuex'
import store2 from './store2'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: store2,
  state: {
    pi: 3,
    object: {name: '张三'},
    todos: [
      {id: 1, text: 'totd1', done: true},
      {id: 2, text: 'totd2', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosByParam: state => done => {
      return state.todos.filter(todo => todo.done === done)
    }
  },
  mutations: {
    changePi (state, payload) {
      state.pi = state.pi + payload.mount + store2.getters.getPi2
    },
    addObject (state, payload) {
      state.object = {...state.object, age: 20}
    },
    updateObject (state, payload) {
      // this.state.object.name = payload.name
      console.log('updateObject')
    }
  },
  // 支持异步
  actions: {
    changePiAsyc (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // context.commit('changePi', payload)
          console.log('changePiAsyc')
          resolve()
        }, 1000)
      })
    },
    async changePiAsyc2 ({dispatch, commit}) {
      await dispatch('changePiAsyc')
      console.log('updateObject')
    },
    addObjectAsyc (context) {
      setTimeout(() => {
        context.commit('addObject')
      }, 1000)
    }
  }
})
