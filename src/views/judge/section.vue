<template>
  <page class="section">
    <x-header>考评系统</x-header>
    <swiper auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo01_list" :key="index">
        <img :src="item.imgUrl">
      </swiper-item>
    </swiper>
    <el-input placeholder="输入关键字进行查询" v-model="filterText"></el-input>
  
    <el-tree class="filter-tree" :data="data" :props="defaultProps" :filter-node-method="filterNode" ref="tree2" accordion highlight-current @node-click="handleNodeClick" :render-content="renderContent">
    </el-tree>
  </page>
</template>
<script>
import { XHeader, Swiper, SwiperItem } from 'vux'
export default {
  name: 'section',
  data() {
    return {
      id:'',//首页传过来的id
      demo01_list: [
        { imgUrl: require('assets/images/1.jpg') },
        { imgUrl: require('assets/images/2.jpg') },
        { imgUrl: require('assets/images/3.jpg') }
      ],
      filterText: '',
      data: [{
        id: '1',
        label: '团委',
        children: [
          { id: '2', label: '刘丽丽' },
          { id: '2', label: '伍婷' }
        ]
      }, {
        id: '1',
        label: '学生处',
        children: [
          { id: '2', label: '杨奕' },
          { id: '2', label: '张子安' },
          { id: '2', label: '袁惠莉' },
          { id: '2', label: '谷敏' },
        ]
      }, {
        id: '1',
        label: '安全保卫处后勤管理处',
        children: [
          { id: '2', label: '田向阳' }
        ]
      }, {
        id: '1',
        label: '图书馆',
        children: [
          {
            id: '1',
            label: '一院区图书馆分管',
            children: [
              { id: '2', label: '陈献玲' }
            ]
          },
          {
            id: '1',
            label: '二院区图书馆分管',
            children: [
              { id: '2', label: '张冬冬' }
            ]
          }
        ]
      },
      {
        id: '1',
        label: '相关医学与管理系',
        children: [
          { id: '2', label: '张紫乐' }
        ]
      }, {
        id: '1',
        label: '护理系',
        children: [
          { id: '2', label: '崔志鹏' }

        ]
      }, {
        id: '1',
        label: '中药与康复系',
        children: [
          { id: '2', label: '刘洪玉' }

        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  activated() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleNodeClick(data, node) {
      if (!node.isLeaf == false) {
        this.$router.forward({
          name: "personal",
          params: {
            label: data.label
          }
        })
      }

    },
    renderContent(h, { node, data, store }) {
      if (node.isLeaf) {
        
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
      } else {
        return h('span', {
          'class': {
            'el-tree-node__label': true
          }
        }, node.label)
      }

    }
  },
  components: {
    XHeader,
    Swiper,
    SwiperItem

  }
};
</script>
<style scoped>
.section {
  padding: 0;
}

.el-tree {
  border-bottom: none;
}
</style>
<style>
.section .is-expanded .tc-tree-node__label {
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
