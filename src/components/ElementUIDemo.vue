<template>
  <div id="elementUIDemo">
    <el-row class="elRow1">
      <i class="el-icon-edit"></i><i class="el-icon-share"></i><i class="el-icon-delete"></i><i class="el-icon-search"></i><i class="el-icon-date"></i>
    </el-row>
    <el-row>
      <el-button :loading="true">默认按钮</el-button><el-button type="primary" size="small">主要按钮</el-button><el-button type="success">成功按钮</el-button><el-button type="info">信息按钮</el-button><el-button type="warning">警告按钮</el-button><el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button plain>默认按钮</el-button><el-button type="primary" plain>主要按钮</el-button><el-button type="success" plain>成功按钮</el-button><el-button type="info" plain>信息按钮</el-button><el-button type="warning" plain>警告按钮</el-button><el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button><el-button type="primary" round disabled>主要按钮</el-button><el-button type="success" round>成功按钮</el-button><el-button type="info" round>信息按钮</el-button><el-button type="warning" round>警告按钮</el-button><el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
    </el-row>
    <el-row>
      <el-button type="text">没有边框的按钮</el-button><el-button type="text" disabled>没有边框的按钮</el-button><el-button type="primary" icon="el-icon-search">搜索</el-button><el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>
    <el-row>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button><el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </el-row>
    <el-row>
      <el-link type="primary" href="https://www.runoob.com/" target="_blank">默认链接</el-link><el-link type="primary" href="https://www.runoob.com/" target="_blank" :underline="false">无下划线链接</el-link>
      <el-link type="primary" icon="el-icon-edit" href="https://www.runoob.com/" target="_blank">编辑</el-link><el-link type="primary" href="https://www.runoob.com/" target="_blank">查看<i class="el-icon-view el-icon--right"></i></el-link>
    </el-row>
    <el-row>
      <el-radio v-model="radioValue" label="1">中国</el-radio>
      <el-radio v-model="radioValue" label="2">美国</el-radio>
      <el-radio-group v-model="radioValue2" @change="getRadioValue2">
        <el-radio label="1">中国</el-radio>
        <el-radio label="2">美国</el-radio>
        <el-radio label="3">英国</el-radio>
      </el-radio-group>
      <el-radio-group v-model="radioValue3" size="medium">
        <el-radio-button label="1">中国</el-radio-button>
        <el-radio-button label="2">美国</el-radio-button>
        <el-radio-button label="3">英国</el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="radioValue4" size="medium">
        <el-radio label="1" border>中国</el-radio>
        <el-radio label="2" border>美国</el-radio>
        <el-radio label="3" border>英国</el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-checkbox v-model="checkboxValue" :indeterminate="isIndeterminate" @change="getCheckboxValue">全选</el-checkbox>
      <el-checkbox-group v-model="checkedOptions" @change="getCheckedOptions">
        <el-checkbox v-for="value in options" :key="value" :label="value"></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row class="elRow2">
      <el-input v-model="inputValue" prefix-icon="el-icon-search" placeholder="测试输入" class="input_class"></el-input>
      <el-input v-model="inputValue2" suffix-icon="el-icon-date" placeholder="测试输入" show-password class="input_class"></el-input>
      <el-input v-model="inputValue3" placeholder="测试输入" class="input_class"><i slot="suffix" class="el-input__icon el-icon-search"></i></el-input>
    </el-row>
    <el-row>
      <el-input type="textarea" placeholder="文本框" v-model="textarea1" :autosize="{minRows: 2, maxRows: 5}"></el-input>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-autocomplete show-word-limit v-model="completeData" :fetch-suggestions="querySearch" prefix-icon="el-icon-search" placeholder="搜索" class="inline-input"></el-autocomplete>
      </el-col>
      <el-col :span="8">
        <el-select v-model="selectData" filterable>
          <el-option v-for="object in searchArray" :key="object.value" :label="object.value" :value="object.value">
            <span style="float:left;">{{object.value}}</span>
            <span style="float:right; color: #8492a6; font-size: 13px;">{{object.url}}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-switch v-model="switchValue" active-text="按年付费" inactive-text="按月付费" :width="100" @change="getSwitchValue"></el-switch>
      </el-col>
      <el-col :span="8">
        <el-switch v-model="switchValue2" active-color="#13ce66" inactive-color="#ff4949" active-text="年薪" inactive-text="月薪" disabled></el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-slider v-model="sliderValue" :show-tooltip="true" :format-tooltip="getFormatTooltip" show-input :show-input-controls="false" :marks="marks" label="aaaaa"></el-slider>
      <el-slider v-model="sliderValue2" vertical height="100px"></el-slider>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList" :before-upload="beforeUpload" :before-remove="beforeRemove" :on-change="handleChange">
          <el-button type="primary" size="small">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
      <el-col :span="8">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" multiple drag>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处或点击上传</div>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row class="loadingService">
    <el-table class="loadingService1" v-loading="loadingTable1" :data="elTableData" ref="singleTable" border :row-class-name="rowClassName" stripe max-height="200" highlight-current-row @current-change="handleCurrentChange" :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="日期" width="150" sortable>
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          {{scope.row.date}}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteRow(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-button type="primary" size="small" @click="setCurrent(elTableData[1])">选中第二行</el-button>
      <el-button type="primary" size="small" @click="setCurrent()">取消</el-button>
    </el-row>
    <el-table class="loadingService2" v-loading="loadingTable2" :data="elTableData2" ref="multipleTable" border :row-class-name="rowClassName" stripe max-height="200" highlight-current-row @current-change="handleCurrentChange">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="date" label="日期" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteRow(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-row>
    <el-row>
      <el-button type="primary" size="small" @click="toggleSelection([elTableData[0], elTableData[1]])">选中第一二行</el-button>
      <el-button type="primary" size="small" @click="setCurrent()">取消</el-button>
    </el-row>
    <el-row>
      <el-image :src=imageUrl fit="contain" style="width:100px;height:100px;">
        <div slot="placeholder">加载中...</div>
        <div slot="error"><i class="el-icon-picture-outline"></i></div>
      </el-image>
    </el-row>
    <el-row v-for="(item, index) in imageUrlArray" :key="index">
      <el-image :src="item" :preview-src-list="[item]" fit="contain" style="width:100px;height:100px;" lazy @load="loadPicture"></el-image>
    </el-row>
    <el-row>
      <el-pagination layout="total,sizes,prev,pager,next,jumper,slot" :total="100" :page-size.sync="pageSize" :page-sizes="[10,20,30]" @size-change="handleSizeChange" @current-change="handleSizeCurrentChange" :current-page.sync="currentPage">
        <el-button>搜索</el-button>
      </el-pagination>
    </el-row>
    <el-row v-loading="loading" element-loading-text="加载中" element-loading-spinner="el-icon-loading" element-loading-background="#aaa">
    <el-form ref="form" :model="form" :rules="rules" label-width="auto" class="form-class" status-icon>
      <el-form-item :label="$t('message.hello')" prop="name" class="form-item-class"><el-input v-model="form.name"></el-input></el-form-item>
      <el-form-item label="区域" class="form-item-class">
        <el-select v-model="form.region">
          <el-option label="上海" :value="1"></el-option>
          <el-option label="北京" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" prop="date" class="form-item-class">
        <el-date-picker v-model="form.date"></el-date-picker>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="form-item-class">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword" class="form-item-class">
        <el-input type="password" v-model="form.checkPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
        <el-button @click="cancelForm('form')">取消</el-button>
      </el-form-item>
    </el-form>
    </el-row>
    <el-row>
      <el-button @click="dialogValue=true">打开一个对话框</el-button>
      <el-dialog v-dialogDrag :visible.sync="dialogValue" :before-close="beforeClose" center :lock-scroll="false" :close-on-click-modal="false" :show-close="false" @opened="openDialog" @close="closeDialog">
        <el-dialog title="内层对话框" :visible.sync="dialogValue2" :append-to-body="false"></el-dialog>
        <span slot="title">测试对话框-slot</span>
        <div v-loading="dialogLoading" class="dialogContent">测试内容</div>
        <span slot="footer">
          <el-button @click="dialogValue=false">取消</el-button>
          <el-button @click="dialogValue2=true">打开内层对话框</el-button>
        </span>
      </el-dialog>
    </el-row>

  </div>
</template>

<script>
// import {showFullScreenLoading, hideFullScreenLoading} from './loadingDemo'
import {showLoading, cancelLoading} from './loading/loadingService'
const axios = require('axios')
export default {
  name: 'ElementUIDemo',
  data () {
    // async validation
    let validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPassword) {
          this.$refs.form.validateField('checkPassword')
        }
      }
      callback()
    }
    let validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'))
      } else if (this.form.password !== value) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      radioValue: '1',
      radioValue2: '1',
      radioValue3: '1',
      radioValue4: '1',
      checkboxValue: false,
      isIndeterminate: true,
      options: ['a', 'b', 'c', 'd'],
      checkedOptions: ['a'],
      inputValue: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
      textarea1: '',
      completeData: '',
      searchArray: [],
      selectData: '',
      switchValue: true,
      switchValue2: true,
      sliderValue: [2, 5], // el-slider
      sliderValue2: 10,
      marks: {
        50: {
          style: {
            color: '#1989FA',
            fontWeight: 'bold'
          },
          label: '50%'
        }
      },
      // el-upload
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      beforeUplodFlag: false,
      elTableData: [],
      elTableData2: [],
      imageUrl: '',
      imageUrlArray: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'],
      infinityValue: 1,
      loadScroll: false,
      currentPage: 8,
      pageSize: 10,
      form: {
        name: '',
        region: '',
        date: '',
        password: '',
        checkPassword: ''
      },
      rules: {
        name: [{required: true, message: '请输入活动内容', trigger: 'blur'}],
        date: [{required: true, message: '请输入活动日期', trigger: 'blur'}, {required: true, message: '请输入活动日期', trigger: 'change'}],
        password: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPassword: [{ required: true, validator: validatePass2, trigger: 'blur' }]
      },
      loading: false,
      loadingTable1: false,
      loadingTable2: false,
      dialogValue: false,
      dialogValue2: false,
      dialogLoading: false
    }
  },
  // 初始化
  mounted () {
    axios.get('/static/webStudy.json').then(response => {
      this.searchArray = response.data.webStudy
    }).catch(error => {
      this.loading = false
      console.log(error)
    })
    showLoading('.loadingService1')
    // 获取el-table配置数据
    axios.get('/static/webStudy.json').then(response => {
      setTimeout(() => {
        cancelLoading('.loadingService1')
        this.elTableData = response.data.elTableData
      }, 1000)
    }).catch(error => {
      console.log(error)
    })
    axios.get('/static/webStudy.json').then(response => {
      this.elTableData2 = response.data.elTableData
    }).catch(error => {
      console.log(error)
    })
    // 测试图片url
    setTimeout(() => {
      this.imageUrl = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }, 3000)
    // 清空定时器
    // let timer = setInterval(() => {
    //   console.log('setInterval')
    // }, 3000)
    // this.$once('hook:beforeDestroy', () => {
    //   clearInterval(timer)
    //   timer = null
    // })
  },
  methods: {
    getRadioValue2: function (nvalue) {
      alert(this.radioValue2 + '->' + nvalue)
    },
    getCheckboxValue: function (value) {
      this.checkedOptions = value ? this.options : []
      this.isIndeterminate = false
    },
    getCheckedOptions: function (value) {
      this.checkboxValue = value.length === this.options.length
      this.isIndeterminate = value.length > 0 && value.length < this.options.length
    },
    querySearch: function (search, cb) {
      let tempArray = []
      tempArray = search ? this.searchArray.filter(item => {
        if (item.value.toLowerCase().includes(search.toLowerCase())) {
          return item
        }
      }) : []
      return cb(tempArray)
      // setTimeout(() => {
      //   return cb(tempArray)
      // }, 500)
    },
    // 获取switch值
    getSwitchValue: function (value) {
      alert(value)
    },
    // slider
    getFormatTooltip: function (value) {
      return value + '%'
    },
    // el-uplod
    handleExceed: function (files, fileList) {
      this.$message.warning(`当前限制选择3个文件，本次选择了${files.length}个文件，共选择了${files.length + fileList.length}个文件`)
    },
    beforeUpload: function (file) {
      console.log(file)
      let isJpg = file.type === 'image/jpeg'
      let isLess2m = file.size / 1024 / 1024 < 2
      if (!isJpg) {
        this.$message.error(`上传图片只能是JPG格式！`)
      }
      if (!isLess2m) {
        this.$message.error(`图片大小不能超过2MB！`)
      }
      return isJpg && isLess2m
    },
    beforeRemove: function (file) {
      if (file.status === 'success') {
        return this.$confirm(`确认移除${file.name}`)
      }
    },
    handleChange: function (file, fileList) { // 上传文件 删除文件不会
      this.beforeUplodFlag = !this.beforeUplodFlag
    },
    // el-table
    rowClassName: function (row) {
      if (row.rowIndex === 1) {
        return 'success-row'
      }
    },
    handleClick: function (row) {
      console.log(row)
    },
    deleteRow: function (index) {
      this.elTableData.splice(index, 1)
    },
    handleCurrentChange: function (currentRow) {
      // console.log(currentRow)
    },
    setCurrent: function (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    toggleSelection: function (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
          // this.$refs.multipleTable.toggleAllSelection()
        })
      } else {
        this.$refs.multipleTable.toggleRowSelection()
      }
    },
    // 图片加载
    loadPicture (e) {
      // console.log(e)
    },
    // el-pagination
    handleSizeChange () {
      console.log(`当前每页共展示${this.pageSize}条`)
    },
    handleSizeCurrentChange () {
      console.log(`当前第${this.currentPage}页`)
    },
    prevClick (value) {
      console.log(value)
    },
    // 表单
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit')
        } else {
          alert('请将信息填写完整在提交')
          return false
        }
      })
    },
    cancelForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 对话框
    openDialog () {
      this.dialogLoading = true
      setTimeout(() => {
        this.dialogLoading = false
      }, 1000)
    },
    beforeClose (done) {
      done()
    },
    closeDialog () {
      // console.log('close')
    }
  },
  computed: {
    scrollDisabled () {
      return this.loadScroll || this.noMore
    },
    noMore () {
      return this.infinityValue > 10
    }
  },
  watch: {
    radioValue: function (nvalue, ovalue) {
      alert(ovalue + '->' + nvalue)
    }
  }
}
</script>

<style scoped>
#elementUIDemo {
  text-align: left;
}
.el-row {
  margin-bottom: 10px;
}
.elRow1 i {
  font-size: 30px;
  color: #409eff;
  margin: 0 10px;
}
.input_class {
  width: 20%;
}
.el-link {
  margin-right: 10px;
}
.el-checkbox-group {
  display: inline-block;
}
.backColorClass {
  text-align: right;
}
.form-class .el-select {
  width: 100%;
}
.form-class .form-item-class {
  width: 33%;
  display: inline-block;
}
.form-class .el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100%;
}
</style>

<style>
.el-switch__core {
  width: 100px;
}
.el-table .success-row {
  background: chocolate;
}
.infinite-ul-class {
  height: 100px;
}
.infinite-li-class {
  height: 20px;
  overflow-y: hidden;
}
</style>
