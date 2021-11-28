<template>
  <div>
    <div class="input_class"><input v-model="searchValue" placeholder="搜索..."></div>
    <div>
      <ul class="ul_class">
        <li v-for="object in webStudyData" :key="object.title"><a :href="object.url" target="_blank">{{object.title}}</a><p>{{object.desc}}</p></li>
      </ul>
    </div>
    <div v-on:click="clickFather">我是爸爸-stop<div @click.stop="clickSon">我是儿子-stop</div></div>
    <div v-on:click.self="clickFather">我是爸爸-self<div @click="clickSon">我是儿子-self</div></div>
    <div v-on:click.capture="clickFather">我是爸爸-capture<div @click.capture="clickSon">我是儿子-capture</div></div>
    <div><a href="http://www.baidu.com" @click.self.prevent="clickFather">我是父节点-self.prevent<span @click="clickSon">我是子节点</span></a></div>
    <div><a href="http://www.baidu.com" @click.prevent.self="clickFather">我是父节点-prevent.self<span @click="clickSon">我是子节点</span></a></div>
    <div v-once>{{ onceValue }}<button @click="editVonce">点击修改不了</button></div>
    <div><input v-model.lazy="testData">{{testData}}</div>
    <div v-color:red>防抖节流-lodash<button @click="submit">提交-lodash</button></div>
    <div><button v-debounce="submit2">提交-自定义指令</button></div>
    <div><ChildDemo :level="1">设置</ChildDemo></div>
    <div><input v-model.number="keepAlive"><keep-alive include="ChildDemo2"><ChildDemo2 v-if="keepAlive > 5"></ChildDemo2></keep-alive></div>
    <div><input v-model="componentId" placeholder="测试component"><component :is="componentId"></component></div>
    <div>
      <img loading="lazy" v-for="(item, i) in imageList" :src="item.url" :key="i">
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import ChildDemo from './ChildDemo'
import ChildDemo2 from './ChildDemo2'
import {myMixin} from './mixins/testMixin'
// const axios = require('axios')
import {httpGet} from '../api/http'
export default {
  name: 'SearchDemo',
  components: { ChildDemo, ChildDemo2 },
  mixins: [myMixin],
  // directives: {
  //   focus: {
  //     inserted: function (el) {
  //       el.focus()
  //     }
  //   }
  // },
  data () {
    return {
      searchValue: '',
      webStudyArray: [],
      webStudyData: [],
      onceValue: 'aaaa', // 测试v-once
      testData: '',
      keepAlive: 8,
      componentId: '',
      imageList: [
        {
          url: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg'
        },
        {
          url: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg'
        },
        {
          url: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg'
        }
      ]
    }
  },
  // beforeCreate () {
  //   console.log('beforeCreate')
  // },
  // created () {
  //   console.log('created')
  // },
  // beforeMount () {
  //   console.log('beforeMount')
  // },
  // 初始化
  mounted () {
    // // 取消请求
    // const CancelToken = axios.CancelToken
    // axios.get('/static/webStudy.json', {
    //   cancelToken: new CancelToken(function executor (c) {
    //     // cancel = c
    //   })
    // }).then(response => {
    //   this.webStudyArray = response.data.webStudy
    //   // console.log(this.webStudyArray)
    // }).catch(error => {
    //   console.log(error)
    // })
    // cancel()
    httpGet('/static/webStudy.json').then(res => {
      this.webStudyArray = res.data.webStudy
    }).catch(error => {
      console.log(error)
    })
    // let params = {
    //   name: '张三',
    //   sex: '男'
    // }
    // httpGet('/test/mock/99390d2568008c23d525570aff0a9321/test1/user', {params}).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },
  methods: {
    getWebStudy: function () {
      this.webStudyData = []
      let tempSearchValue = this.searchValue.trim().toLowerCase()
      if (!tempSearchValue) {
        return this.webStudyData
      }
      this.webStudyData = this.webStudyArray.filter(item => {
        if (item.value.toLowerCase().includes(tempSearchValue)) {
          return item
        }
      })
      // console.log(this.webStudyData)
    },
    Test: function () {

    },
    clickFather () {
      console.log('father')
    },
    clickSon () {
      console.log('son')
    },
    editVonce () {
      this.onceValue = 'bbbbb'
    },
    submit: _.debounce(() => {
      console.log('只提交一次-lodash')
    }, 500),
    submit2 () {
      console.log('只提交一次-自定义指令')
    }
  },
  watch: {
    searchValue: function () {
      this.getWebStudy()
    }
  },
  computed: {
    // getWebStudy: function () {
    //   let webStudyValue = []
    //   let tempSearchValue = this.searchValue.trim().toLowerCase()
    //   if (!tempSearchValue) {
    //     return webStudyValue
    //   }
    //   webStudyValue = this.webStudyArray.filter(item => {
    //     if (item.title.toLowerCase().includes(tempSearchValue)) {
    //       return item
    //     }
    //   })
    //   console.log(webStudyValue)
    //   return webStudyValue
    // }
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
.input_class {
  margin: 20px auto 20px;
}
.input_class input {
  width: 400px;
  line-height: 35px;
  outline: none;
  text-indent: 40px;
  font-size: 17px;
  color: #738289;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #a9a9a9
}
.ul_class {
  list-style: none;
  text-align: left;
  font-size: 18px;
}
.ul_class li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ul_class a {
  text-decoration: none;
}
.ul_class p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  font-size: 16px;
  margin: 0px auto 0px;
}
</style>
