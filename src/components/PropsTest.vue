<template>
  <div>
    <input :value="value" @input="$emit('input', $event.target.value)" placeholder="父子组件相互传递">
    <div><input v-model="testData"></div>
    <button @click="updateValue">点击修改PropsTest2的值</button>
    <div><PropsTest2></PropsTest2></div>
    <div>测试sync修饰符<input v-model="parent_sync" @input="$emit('update:parent_sync', $event.target.value)"></div>
    <slot name="slot1" :slotValueChild="slotValueChild">{{slotValueChild.name}}</slot>
    <slot>我是默认显示内容slot</slot>
  </div>
</template>

<script>
import PropsTest2 from './PropsTest2'
export default {
  name: 'PropsTest',
  components: {PropsTest2},
  props: ['value', 'parent_sync'],
  data () {
    return {
      testData: '',
      slotValueChild: {
        name: '测试slot'
      }
    }
  },
  methods: {
    nativeFn: function () {
      console.log('PropsTest-click')
    },
    updateValue () {
      this.$children[0].testData = 'bbb'
    }
  },
  mounted () {
    this.testData = this.$parent.title
  }
}
</script>

<style scoped>
.whiteSpaceStyle {
  white-space: pre;
}
</style>
