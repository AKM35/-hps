<template>
  <page class="mutual">
    <x-header>考评系统</x-header>
    <h4 class="label" :props="defaultProps">{{label}}</h4>
    <div class="main" v-for="(item ,index) in data" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="content">{{item.content}}</p>
      <group class="input">
        <x-input v-model="item.val" placeholder="请输入评分,满分100分" :min="1" :max="3" type="number" @on-blur="blur(item)"></x-input>
      </group>
    </div>
    <div class="button">
      <x-button type="primary" @click.native="showPlugin">保存</x-button>
    </div>
  </page>
</template>

<script>
import { XHeader, XButton, XInput, Group } from 'vux'

export default {
  name: 'mutual',
  data() {
    return {
      label: '',
      defaultProps: {
        label: 'label'
      },
      data: [
        { title: '中职 班级建设：1计划与总结', content: '	按时完成班级学期工作计划和工作总结', val: '' },
        { title: '中职 中职 班级建设：2班级文化建设', content: '	按要求每月完成一期班级板报	', val: '' },
        { title: '中职 中职 班级建设：3学生干部培养', content: '	每周召开一次班团干部会', val: '' },
        { title: '中职 中职 班级管理：1日常管理', content: '	1、每周组织学生参加升国旗仪式（周讲评' },
        { title: '中职 中职 班级管理：1日常管理', content: '	2、每周召开班会一次（含每学期主题班会两次，并上交主题班会材料）', val: '' },
        { title: '中职 中职 班级管理：1日常管理', content: '	3、班级大扫除每周一次', val: '' },
        { title: '中职 中职 班级管理：1日常管理', content: '	4、组织学生课间操，每周到岗不少于二次', val: '' },
        { title: '中职 中职 班级管理：2学习指导', content: '	与任课老师沟通每月不少于四次', val: '' },
        { title: '中职 中职 班级管理：3学生教育', content: '	与学生谈话每月不少四人次', val: '' },
        { title: '中职 中职 班级管理：4班级活动', content: '	每月组织一次课外活动', val: '' },
        { title: '中职 中职 班级管理：5家校沟通', content: '	每月与学生家长沟通不少于五人次', val: '' },
        { title: '中职 中职 班级管理：6住宿管理', content: '	每周深入宿舍不少于二次', val: '' },
        { title: '中职 中职 其他管理：1例会', content: '	每周按时参加班主任例会', val: '' },
        { title: '中职 中职 其他管理：2值班', content: '	按时参加班主任值班，处理问题及时，认真填写值班日志', val: '' },
        { title: '中职 中职 其他管理：3上交材料', content: '	每月30日上交班主任手册（遇休息日顺延）', val: '' },
        { title: '中职 中职 奖励：1临时工作', content: '	认真、准确、及时完成学院和学生处布置的的其他工作', val: '' },
        { title: '中职 中职 奖励：2晚自习管理	', content: '	到校查看班级晚自习情况', val: '' },
        { title: '中职 中职 奖励：3活动奖励', content: '	1、校级竞赛一等奖奖励3分，二等奖奖励2分，三等奖奖励1分，优秀奖奖励0.5分', val: '' },
        { title: '中职 中职 奖励：3活动奖励', content: '	2、年级或专业学科竞赛一等奖奖励2分，二等奖奖励1分，三等奖奖励0.5分', val: '' },
        { title: '中职 中职 奖励：4学生纪律', content: '	班级当月之内未出现违纪事件（通报批评或各级处分）', val: '' }


      ]
    }
  },
  activated() {
    this.label = this.$route.params.label
    this.data.forEach(function (item, index) {
      item.val = ""
    })
  },
  methods: {
    showPlugin() {
      var state = false
      this.data.forEach(function (item, index) {
        if (item.val === "") {
          state = true
        }
      })
      if (state) {
        this.$vux.alert.show({
          title: '提示',
          content: '您还有没选择的项目',
        })
      } else {
        console.log("向服务器发送请求了")
        this.$router.back()
      }
    },
    blur(item) {
      if(item.val>100)
      item.val = 100
    }
  },
  components: {
    XHeader,
    XButton,
    XInput,
    Group
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

.button {
  margin-top: 10px;
}

.input {
  font-size: 12px;
}
</style>
<style>
.mutual .weui-cells {
  margin-top: 1.17647059em;
  background-color: #FFFFFF;
  line-height: 1.41176471;
  font-size: 12px;
  overflow: hidden;
  position: relative;
}
</style>



