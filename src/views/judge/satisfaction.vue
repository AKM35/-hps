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
        { title: '学生教育工作1', content: '作风严谨，为人师表，通过自己日常一言一行告诉学生如何做人做事。', fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"} },
        { title: '学生教育工作2', content: '经常深入到学生中，及时掌握学生思想、学习和生活情况，关心帮助学生，做学生的良师益友',fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"} },
        { title: '学生教育工作3', content: '鼓励、引导学生开展各种类型的教育活动，注重学生综合素质的提高，效果明显。' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}},
        { title: '学生教育工作4', content: '针对特殊学生，能经常有针对性的开展各种教育活动。' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}},
        { title: '学生教育工作5', content: '举止文明，仪表端庄，求真务实，勤勉敬业，言传与身教并重。',fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"} },
        { title: '学生管理工作1', content: '经常深入班级，及时处理学生各种问题，方法适当。重视班级考勤工作，培养学生良好行为习惯。',fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"} },
        { title: '学生管理工作2', content: '作风正派，办事公道，在学生的各类评比、评选活动中，能做到公开、公平和公正。' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}},
        { title: '学生管理工作3', content: '重视学生干部队伍建设，本班学生干部在学习、工作和生活中发挥了先锋模范作用。' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}},
        { title: '学生管理工作4', content: '重视学风建设，帮助学生端正学习态度、改进学习方法、提高学习效率，培养优良的学风。' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}},
        { title: '学生管理工作5', content: '清正廉洁，以身作则，不参加学生及家长的宴请、不接受任何形式的钱、物。' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}},
        { title: '整体印象1', content: '你认为班级中班风正、人心齐、凝聚力强。' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}},
        { title: '整体印象2', content: '整体而言，你对本班辅导员、班主任的满意度程度是' ,fenshu: { satisfaction: "满意", basicallySatisfied: "基本满意", discontent: "不满意"}}
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

