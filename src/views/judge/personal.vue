<template>
  <div class="personal">
    <x-header>考评系统</x-header>
    <h4 class="evaluation-name">被考评人名称：{{label}}</h4>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="辅导员,班主任工作互评表" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="辅导员,班主任满意度测评表" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="中职 学年学工部考核成绩表" name="3">
        <table>
          <thead>
            <tr>
              <th>指标项名称</th>
              <th>指标项描述</th>
              <th>得分</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>中职 班级建设：1计划与总结</td>
              <td>按时完成班级学期工作计划和工作总结</td>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr>
              <td>中职 班级建设：1计划与总结</td>
              <td>按时完成班级学期工作计划和工作总结</td>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr>
              <td>中职 班级建设：1计划与总结</td>
              <td>按时完成班级学期工作计划和工作总结</td>
              <td>
                <input type="text">
              </td>
            </tr>
          </tbody>
        </table>
      </el-collapse-item>
    </el-collapse>
  
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'parsonal',
  data() {
    return {
      activeName: '1',
      label: ''
    }
  },
  mounted() {
    this.label = this.$route.params.label
    console.log(this.label)
  },
  components: {
    XHeader,
  }
};
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.evaluation-name {
  text-align: center;
}
</style>
