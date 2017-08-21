<template>
  <page class="personal">
    <x-header>考评系统</x-header>
    <h4 class="evaluation-name">被考评人名称：{{label}}</h4>
    <el-tree class="filter-tree" :data="data" :props="defaultProps" ref="tree2" accordion highlight-current @node-click="handleNodeClick" :render-content="renderContent">
    </el-tree>
  </page>
</template>

<script>
import { XHeader } from 'vux'

export default {
  name: 'parsonal',
  data() {
    return {
      label: '',
      data: [{
        id: '1',
        label: '辅导员、班主任工作互评表(100)'
      }, {
        id: '2',
        label: '辅导员、班主任满意度测评表(100)'
      }, {
        id: '3',
        label: '中职 学年学工部考核成绩表(100)'
      }],
      defaultProps: {
        label: 'label'
      }
    }
  },
  activated() {
    if (this.$route.params.label) {
      this.label = this.$route.params.label;
    }
  },
  methods: {
    handleNodeClick(data, node) {
      if (data.id == 1) {
        this.$router.forward({
          name: "mutual",
          params: {
            label: data.label
          }
        })
      } else if (data.id == 2) {
        this.$router.forward({
          name: "satisfaction",
          params: {
            label: data.label
          }
        })
      } else {
        this.$router.forward({
          name: "score",
          params: {
            label: data.label
          }
        })
      }

    },
    renderContent(h, { node, data, store }) {
      return h('span', {
        'class': {
          'el-tree-node__label': true
        }, style: {
          width: '100%'
        }
      }, [node.label,
      h('a', {
        'class': {
          'tc-tree-node__label': true
        }
      })
        ])
    }
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

.el-tree {
  border-bottom: none;
}
</style>
<style>
.personal .tc-tree-node__label {
  content: " ";
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #c8c8cd;
  border-style: solid;
  -webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
  transform: matrix(.71, .71, -.71, .71, 0, 0);
  position: absolute;
  margin-top: 14px;
  right: 15px;
}
</style>

