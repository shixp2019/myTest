<template>
  <div id = "caiNiaoDemo" v-bind:class="backColorClass">
    <div class = "title3">
      <select v-model.number="selectValue">
        <option v-for="object in backColorData" :key="object.value" :value="object.value">{{object.name}}</option>
      </select>
    </div>
    <p class = "title" ref="getTitle">{{ title }}</p>
    <p class = "title2">{{ title2 }}</p>
    <ul>
      <li><a href = 'https://www.runoob.com/html/html-tutorial.html' target = '_blank'>学习HTML</a></li>
      <li><a href = 'https://www.runoob.com/html/html5-intro.html' target = '_blank'>学习HTML5</a></li>
      <li><a href = 'https://www.runoob.com/css/css-tutorial.html' target = '_blank'>学习CSS</a></li>
    </ul>
    <div class = "title2">常见功能</div>
    <div><input v-model="reverseValue" placeholder = "反转输入的字符串"><label class = "preClass">{{ reverseValue|reverseFunction }}</label></div>
    <div><input v-model = "reverseValue2" placeholder= "反转输入的字符串"><label class = "preClass">{{ reverseFunction2}}</label></div>
    <div><input v-model = "reverseValue3" placeholder="两者互为反转"><input v-model = "reverseValue4" placeholder="两者互为反转"></div>
    <div>
      <label>那些属于直辖市？</label>
      <input type = "checkbox" value = "1" v-model = "checkboxArray">北京市
      <input type = "checkbox" value = "2" v-model = "checkboxArray">上海市
      <input type = "checkbox" value = "3" v-model = "checkboxArray">深圳市
      <input type = "checkbox" value = "4" v-model = "checkboxArray">重庆市
      <button @click="submitData">提交</button>
    </div>
    <div>
      <label>世界最大的沙漠？</label>
      <input type = "radio" value = "1" v-model="radioValue">撒哈拉沙漠
      <input type = "radio" value = "2" v-model="radioValue">塔克拉玛干沙漠
      <button @click="submitRadio">提交</button>
    </div>
    <div>
      <input v-model="inputValue_parent" placeholder="父子组件相互传递v-model">
      <PropsTest v-model="inputValue_parent" @hook:mounted="onFn">
        <template v-slot:default>父组件传给子组件slot</template>
        <template v-slot:slot1={slotValueChild}>{{slotValueChild.name}}</template>
      </PropsTest>

<!--      <div>-->
<!--        <input v-model="parent_sync" placeholder="父子组件相互传递-sync">-->
<!--        <PropsTest :parent_sync.sync="parent_sync"></PropsTest>-->
<!--      </div>-->

      <PropsTest2></PropsTest2>
      <button @click="changeChildValue">修改子组件的值</button>
<!--      <PropsTest v-bind:inputValue = "inputValue_parent" v-on:inputValue_return="inputValue_return_function"></PropsTest>-->
    </div>
    <div><input type="button" @click="postMethod" value="测试异步获取数据"></div>
    <div>
      <ul>
        <li v-for="object in backColorData" :key="object.value">
          <input type="checkbox">{{object.name}}
        </li>
      </ul>
      <button @click="testKey">测试key</button>
    </div>
    <div>
      <button @click="adda">测试Vue.set</button>{{vueSetValue}}
      <button @click="addb">测试Vue.set手动添加属性</button>{{vueSetValue}}
      <button @click="addArray">测试数组</button>{{testArray}}
    </div>
    <div><label>接收路由传过来的值：</label><label>{{this.$route.params.id}}{{this.$route.params.name}}</label></div>
    <div><button @click="testRouter">js跳转</button></div>
    <div><input :value="testData" @input="testData=$event.target.value"></div>
    <div><input v-model="provideObject.name" placeholder="测试provide和inject"><input v-model="provideAge" placeholder="测试provide属性"></div>
    <div><ProvideTest></ProvideTest></div>
    <div><button @click="changeObjectValue">测试修改vuex组件</button></div>
    <div>测试不需要响应式：{{special2.name}}</div>
    <div @click="outer()">js冒泡测试outer<div @click="innner()">inner</div></div>
  </div>
</template>

<script>
import PropsTest from './PropsTest'
import PropsTest2 from './PropsTest2'
import ProvideTest from './ProvideTest'
// import * as testFile from '../utils/test'
// let compiler = require('vue-template-compiler')
const axios = require('axios')
export default {
  name: 'CaiNiaoDemo',
  data () {
    // this.special = {name: '张三'}
    return {
      title: '前端学习',
      title2: 'HTML',
      isActive: false,
      reverseValue: '',
      reverseValue2: '',
      reverseValue3: '',
      reverseValue4: '',
      checkboxArray: [],
      radioValue: '',
      selectValue: 1,
      backColorClass: {
        backColorWhite: true,
        backColorBlack: false,
        backColorRed: false
      },
      inputValue_parent: '', // 将父组件的值传给子组件
      backColorData: null,
      vueSetValue: {},
      testObject: {a: 1, b: 2, c: 3, d: 4},
      testArray: ['a'],
      testData: '',
      provideObject: {},
      provideAge: '123',
      parent_sync: 'parent-sync',
      slotValue: 'slot测试',
      special2: '张三'
    }
  },
  components: { PropsTest, ProvideTest, PropsTest2 },
  template: '',
  methods: {
    submitData: function () {
      // const array = [1, 2, 4]
      // console.log(array.sort().toString() == this.checkboxArray.sort().toString())
      if (!this.checkboxArray.includes('3') && this.checkboxArray.includes('1') && this.checkboxArray.includes('2') && this.checkboxArray.includes('4')) {
        alert('恭喜你答对了！')
      } else {
        alert('很遗憾你答错了，正确答案是北京市，上海市，重庆市')
      }
    },
    submitRadio: function () {
      if (parseInt(this.radioValue) === 1) {
        alert('恭喜你答对了！')
      } else {
        alert('很遗憾你答错了，正确答案是撒哈拉沙漠')
      }
    },
    inputValue_return_function: function (vlaue) {
      this.inputValue_parent = vlaue
    },
    // 测试post方法
    postMethod: function () {
      axios.post('/api/try/ajax/demo_axios_post.php').then(response => {
        console.log(response.data.name)
      }).catch(error => {
        console.log(error)
      })
    },
    // 测试key
    testKey: function () {
      this.backColorData[1].name = '紫色'
    },
    // 测试Vue.set
    adda: function () {
      this.vueSetValue.a = 2
    },
    addb: function () {
      this.vueSetValue.b = 20
    },
    addArray: function () {
      this.testArray[1] = '10'
    },
    // 测试router
    testRouter: function () {
      // this.$router.push({path: `/search/1234`})
      this.$router.push({name: 'search', params: {value: '12345'}})
    },
    // 测试事件的绑定原理
    nativeFn: function () {
      console.log('natvieFn')
    },
    onFn: function () {
      // console.log('onFn')
    },
    testProvide: function () {
      this.location = 'a1'
    },
    // 修改vuex的值
    changeObjectValue () {
      this.$store.commit('updateObject', {name: '李五'})
    },
    // 修改子组件的值通过父组件
    changeChildValue () {
      console.log(this.$children)
    },
    innner () {
      console.log('click')
      setTimeout(() => {
        console.log('timeout')
      }, 0)
      Promise.resolve().then(() => {
        console.log('promise')
      })
    },
    outer () {
      console.log('click1')
      // setTimeout(() => {
      //   console.log('timeout')
      // }, 0)
      // Promise.resolve().then(() => {
      //   console.log('promise')
      // })
    }
  },
  // 过滤器
  filters: {
    reverseFunction: function (value) {
      return value.split('').reverse().join('')
    }
  },
  // 计算
  computed: {
    reverseFunction2: function () {
      return this.reverseValue2.split('').reverse().join('')
    }
  },
  // 监听
  watch: {
    // reverseValue3: function (value) {
    //   this.reverseValue4 = value.split('').reverse().join('')
    // },
    reverseValue3: {
      handler: function (value) {
        this.reverseValue4 = value.split('').reverse().join('')
      },
      deep: false,
      immediate: false
    },
    reverseValue4: function (value) {
      this.reverseValue3 = value.split('').reverse().join('')
    },
    selectValue: function () {
      if (this.selectValue === 1) {
        this.backColorClass.backColorWhite = true
        this.backColorClass.backColorBlack = false
        this.backColorClass.backColorRed = false
      } else if (this.selectValue === 2) {
        this.backColorClass.backColorWhite = false
        this.backColorClass.backColorBlack = true
        this.backColorClass.backColorRed = false
      } else if (this.selectValue === 3) {
        this.backColorClass.backColorWhite = false
        this.backColorClass.backColorBlack = false
        this.backColorClass.backColorRed = true
      }
    },
    backColorData: {
      handler: function () {
        // console.log('值发生变化')
      },
      deep: true // 监控对象属性
      // immediate: true // 初始值加载handler
    },
    testData: function () {
      console.log(this.testData)
    },
    testObject: {
      handler () {
        console.log('testObject')
      },
      deep: true
    }
  },
  created () {

  },
  // 测试axios
  mounted () {
    async function fn2 () {
      return new Promise((resolve, reject) => {
        resolve()
      }).then(response => {
        console.log('fn2-2')
      })
      // return Promise.resolve('fn2-3')
    }
    async function fn1 () {
      let a = await fn2()
      console.log(a)
    }
    fn1()
    new Promise((resolve, reject) => {
      resolve()
    }).then(response => {
      console.log('fn3-2')
    }).then(response => {
      console.log('fn3-3')
    })
    // console.log(this.$options.data()) // 获取初始值
    // 测试fast-mock get
    let params = {
      name: '张三',
      sex: '男'
    }
    axios.get('/test/mock/99390d2568008c23d525570aff0a9321/test1/user', {params}).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
    // let promise1 = new Promise((resolve, reject) => {
    //   resolve('success')
    // })
    // let then1 = promise1.then(response => {
    //   console.log(response)
    //   throw new Error('测试')
    // })
    // let then2 = then1.then(response => {
    //   console.log(response)
    // }, response => {
    //   console.log('then捕捉错误')
    // }).catch(error => {
    //   console.log(error)
    // })
    // console.log(promise1, then1, then2)
    // let promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('图片请求超时')
    //   }, 3000)
    // })
    // Promise.race([promise1, promise2]).then(response => {
    //   console.log(response)
    // }).catch(error => {
    //   console.log(error)
    // })
    // 测试并发请求
    // function getTestJson1 () {
    //   return axios.get('/static/testJson.json')
    // }
    // function getTestJson2 () {
    //   return axios.get('/static/testJson.json')
    // }
    // axios.all([getTestJson1(), getTestJson2()]).then(axios.spread((response1, response2) => {
    //   console.log(response1)
    //   console.log(response2)
    // }))
    // 获取皮肤颜色配置
    axios.get('/static/testJson.json').then((response) => {
      this.backColorData = response.data.backColor
    }).catch(
      error => (console.log(error))
    )
    // 创建实例
    // const instance = axios.create({
    //   baseURL: '/api/try/ajax/demo_axios_post.php',
    //   timeout: 10000,
    //   method: 'post',
    //   headers: {'X-Requested-With': 'XMLHttpRequest'}
    // })
    // instance.request().then(response => {
    //   console.log(response.data)
    // }).catch(
    //   error => (console.log(error))
    // )
    this.testArray[0] = 'b'
    this.vueSetValue = {'a': 1}
    // this.vueSetValue.b = 2
    // this.$set(this.vueSetValue, 'c', 3)
    // setTimeout(() => {
    //   console.log('setIimeout')
    // }, 0)
    // this.$nextTick(() => {
    //   console.log('nextTick1')
    // })
  },
  provide () {
    return {
      user: this.provideObject,
      provideAge: this.provideAge
    }
  },
  beforeRouteEnter (to, from, next) {
    // console.log('beforeRouteEnter')
    // next(vm => {
    //   console.log('vm-search')
    // })
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // console.log('beforeRouteLeave')
    next()
    // this.$confirm('确认离开吗？').then(() => next()).catch(() => next(false))
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
}
.title2 {
  font-size: 20px;
  font-weight: normal;
}
.title3 {
  display: flex;
  justify-content: flex-end;
}
#caiNiaoDemo li {
  display: inline-block;
  margin: 0 10px;
}
#caiNiaoDemo a {
  color: #42b983;
  text-decoration: none;
}
.backColorWhite {
  background-color: white;
}
.backColorBlack {
  background-color: black;
}
.backColorRed {
  background-color: red;
}
.preClass {
  white-space: pre;
}
</style>
