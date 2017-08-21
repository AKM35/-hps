<template>
  <page class="mutual">
    <x-header>考评系统</x-header>
    <h4 class="label" :props="defaultProps">{{label}}</h4>
    <div class="main" v-for="(item ,index) in data" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="content">{{item.content}}</p>
      <div class="radioList">
        <el-radio-group v-model="radio">
          <el-radio  v-for="(value,id) in item.fenshu" :key="id" :id="id" :label="id">{{value}}</el-radio>

        </el-radio-group>
      </div>
    </div>
    <div class="button">
      <x-button type="primary">保存</x-button>
    </div>
  </page>
</template>

<script>
import { XHeader, XButton } from 'vux'

export default {
  name: 'mutual',
  data() {
    return {
      radio: '',
      label: '',
      defaultProps: {
        label: 'label'
      },
      data: [
        { title: '班级工作计划总结', content: '班级工作计划总结', fenshu: { excellent: "优(8分)", good: "良(6分)", fair: "中(4分)", poor: "差(0分)" } },
        { title: '班会班干部会记录', content: '班会班干部会记录',fenshu: { excellent: "优(12分)", good: "良(8分)", fair: "中(4分)", poor: "差(0分)" } },
        { title: '与任课老师、家长沟通', content: '与任课老师、家长沟通' ,fenshu: { excellent: "优(16分)", good: "良(12分)", fair: "中(8分)", poor: "差(0分)" }},
        { title: '助进生教育转化', content: '助进生教育转化' ,fenshu: { excellent: "优(16分)", good: "良(12分)", fair: "中(8分)", poor: "差(0分)" }},
        { title: '主题教育活动班级活动', content: '主题教育活动班级活动',fenshu: { excellent: "优(32分)", good: "良(24分)", fair: "中(16分)", poor: "差(4分)" } },
        { title: '班级管理日志', content: '班级管理日志',fenshu: { excellent: "优(8分)", good: "良(6分)", fair: "中(4分)", poor: "差(0分)" } },
        { title: '学生考评成绩公布', content: '学生考评成绩公布' ,fenshu: { excellent: "优(8分)", good: "良(6分)", fair: "中(4分)", poor: "差(0分)" }}
      ]
    }
  },
  mounted() {
    this.label = this.$route.params.label
    console.log(this.label)
  },
  components: {
    XHeader,
    XButton
  }
};
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mutual .label {
  text-align: center;
}

.mutual .main {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 0 15px;
}

.mutual .title {
  font-size: 14px;
  font-weight: bold;
}

.mutual .content {
  font-size: 12px;
}

.radioList {
  margin-bottom: 10px;
}

.button {
  margin-top: 10px;
}
</style>
<style>
.mutual .el-radio__label {
  font-size: 10px;
  padding-left: 2px;
}

.mutual .el-radio__inner {
  width: 12px;
  height: 12px;
}
</style>

