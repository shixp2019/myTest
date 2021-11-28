<template>
  <div>
    <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><el-link href="https://element.eleme.cn/" target="_blank">订单管理</el-link></el-menu-item>
    </el-menu>
    <el-row>
      <el-col :span="4">
        <el-menu :default-active="activeIndex2" @select="handleSelect2">
          <el-menu-item index="b-1"><i class="el-icon-location"></i><span slot="title">处理中心</span></el-menu-item>
          <el-submenu index="b-2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="b-2-1">选项1</el-menu-item>
            <el-menu-item index="b-2-2">选项2</el-menu-item>
            <el-menu-item index="b-2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="b-3"><i class="el-icon-setting"></i>消息中心</el-menu-item>
          <el-menu-item index="b-4"><el-link href="https://element.eleme.cn/" target="_blank">订单管理</el-link></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-tabs v-model="tabsValue" type="border-card" tab-position="left" style="height:200px" @tab-click="handleTabClick">
      <el-tab-pane name="1"><span slot="label"><i class="el-icon-date">我的行程</i></span>用户管理11</el-tab-pane>
      <el-tab-pane name="2" label="配置管理">配置管理11</el-tab-pane>
      <el-tab-pane name="3" label="角色管理">角色管理11</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'NavDemo',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: 'b-3',
      tabsValue: '1' // el-tabs
    }
  },
  methods: {
    handleSelect: function (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleSelect2: function (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleTabClick: function (tab, event) {
      // console.log(tab, event)
    }
  },
  mounted () {
    // async function testSometing () {
    //   console.log('执行testSometing')
    //   Promise.resolve('testP').then(response => {
    //     console.log(response)
    //     Promise.resolve('testP2').then(response => {
    //       console.log(response)
    //     })
    //   })
    //   return '返回testSometing'
    // }
    // async function test () {
    //   console.log('test start...')
    //   let as1 = await testSometing()
    //   console.log(as1)
    // }
    // test()
    // let promise = new Promise((resolve, reject) => {
    //   console.log('promise start')
    //   resolve('promise')
    // })
    // promise.then(response => {
    //   console.log(response)
    // }).then(response => {
    //   console.log('promise2')
    // })
  }
}
</script>

<style scoped>

</style>
