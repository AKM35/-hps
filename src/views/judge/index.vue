<template>
  <page class="judge">
    <x-header>考评系统</x-header>
    <swiper auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo01_list" :key="index">
        <img :src="item.imgUrl">
      </swiper-item>
    </swiper>

    <el-tree class="filter-tree" :data="data" :props="defaultProps" ref="tree2" accordion highlight-current @node-click="handleNodeClick" :render-content="renderContent">
    </el-tree>
  </page>
</template>
<script>
import { XHeader, Swiper, SwiperItem } from 'vux'
export default {
  name: 'judge',
  data() {
    return {
      // imgUrl: '../../assets/log.png',
      demo01_list: [
        { imgUrl: require('assets/images/1.jpg') },
        { imgUrl: require('assets/images/2.jpg') },
        { imgUrl: require('assets/images/3.jpg') }
      ],
      data: [{
        id: '1',
        label: '三院区班主任/辅导员评优选先正式测评系统',
        state: true
      }, {
        id: '2',
        label: '学生评教满意度测评项目test',
        state: true
      }, {
        id: '3',
        label: '2016-2017学年班主任,辅导员满意度测评',
        state: true
      }, {
        id: '4',
        label: '中职 中药康复系 学工使用',
        state: true
      }, {
        id: '5',
        label: '二院区图书馆分管',
        state: true
      }, {
        id: '6',
        label: '学生评教满意度测评项目',
        state: true
      }, {
        id: '7',
        label: '测试',
        state: true
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
      }
    };
  },
  methods: {
    handleNodeClick(data, node, component) {
      
      if (data.state) {
        this.$router.forward({
          name: "section",
          params: {
            id: data.id
          }
        })
      } else{
        if(data.label.indexOf('结束了') == -1)
        data.label = data.label + '-结束了'
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
    Swiper,
    SwiperItem

  }
};
</script>
<style scoped>
.judge {
  padding: 0;
}

.el-tree {
  border-bottom: none;
}
</style>
<style>
.judge .tc-tree-node__label {
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
