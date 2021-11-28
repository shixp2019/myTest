<template>
  <div>
    <div class="container">
      <span class="div-test1"></span>
      <div class="div-test2"></div>
    </div>
    <div class="parent">
      <div class="child">测试水平居中测试水平</div>
    </div>
    <div class="bfc-container">
      <div class="bfc-child1"></div>
      <div class="bfc-child2"></div>
<!--      <div class="bfc-clear-both"></div>-->
    </div>
<!--    <div class="line-height-class">而且第三个div是一个更多字而且第是一个更多字而且第是而且第三个div是一个更多字而且第是一个更多字而且第是而且第三个div是一个更多字而且第是一个更多字而且第是</div>-->
<!--    <div class="left-class">左列定宽</div>-->
<!--    <div class="right-class">右列自适应</div>-->
<!--    <img src="../assets/boxModel.png">-->
<!--    <div class="boxModel">这里是盒子内的实际内容。有 25px 内间距，25px 外间距、25px 绿色边框。</div>-->

  </div>
</template>

<script>
export default {
  name: 'CaiNiaoDemoCss'
}
</script>

<style scoped>
.container {
  display: flex;
  width: 600px;
  height: 200px;
  background-color: #b3e19d;
}
.div-test1 {
  flex: 0 1 10px;
  border: 1px solid red;
}
.div-test2 {
  flex: 1;
  border: 1px solid red;
}
.text-align-class {
  text-align: center;
}
.margin-class {
  width: 100px;
  margin: 0 auto;
}
.line-height-class {
  height: 150px;
  line-height: 150px;
  background-color: #3a8ee6;
}
.left-class {
  background-color: #8c939d;
  width: 100px;
  height: 200px;
  float: left;
}
.right-class {
  background-color: #8cc5ff;
  height: 200px;
  overflow: hidden;
}
.boxModel {
  width: 206px;
  padding: 10px;
  border: 15px solid #8cc5ff;
  margin: 0px;
}
.parent {
  background-color: chocolate;
  width: 200px;
  height: 200px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.child {
  display: inline-block;
  border: 1px solid #a0cfff;
}
.parent-vertical {
  background-color: #f0c78a;
  width: 200px;
  height: 300px;
  position: relative;
}
.child-vertical {
  width: 100px;
  height: 100px;
  border: 1px solid #00ff00;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.img-vertical {
  vertical-align: middle;
}
.bfc-container {
  width:400px;
  border:1px solid #F00;
  background:#FF0;
  overflow: hidden;
}
.bfc-child1 {
  width:180px;
  height:100px;
  border:1px solid #00F;
  background:#FFF;
  float: left;
}
.bfc-child2 {
  width:180px;
  height:100px;
  border:1px solid #00ff00;
  background:#FFF;
  float: right;
}
.bfc-clear-both {
  clear: both;
}
.bfc-wrap {
  overflow: hidden;
}
.float-container {
  background-color: #8cc5ff;
}
.float-img {
  float: left;
}
</style>
