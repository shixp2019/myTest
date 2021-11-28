<template>
  <div>
    <div id="myChart" ref="myChart" class="myChart"></div>
  </div>
</template>

<script>
export default {
  name: 'first',
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(this.$refs.myChart, 'dark')
      myChart.setOption({
        title: {text: '在vue中使用echarts'},
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '裤子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 30],
          color: ['#dd6b66']
        }]
      })
      window.onresize = function () {
        myChart.resize()
      }
    }
  },
  mounted () {
    this.drawLine()
  }
}
</script>

<style scoped>
.myChart {
  width: 50%;
  height: 200px;
}
</style>
