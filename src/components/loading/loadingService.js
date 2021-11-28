import Vue from 'vue'
// let showLoadingCount = 0
let map = new Map()
export function showLoading (tag) {
  let loading = Vue.prototype.$loading({
    text: '加载中...',
    spinner: 'el-icon-loading',
    target: tag
  })
  map.set(tag, loading)
}
export function cancelLoading (tag) {
  map.get(tag).close()
}
