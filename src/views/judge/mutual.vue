<template>
  <page class="mutual">
    <x-header>考评系统</x-header>
    <h4 class="label" :props="defaultProps">{{label}}</h4>
    <div class="main" v-for="(item ,index) in data" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="content">{{item.content}}</p>
      <div class="radioList">
        <checker v-model="item.radio" default-item-class="checker-item" selected-item-class="checker-item-selected" type="checkbox">
          <checker-item v-for="(it,i) in item.fenshu" :key="it.value" :value="it.value">{{it.caption}}</checker-item>
        </checker>
      </div>
    </div>

    <div class="button">
      <x-button type="primary" @click.native="showPlugin">保存</x-button>
    </div>
  </page>
</template>

<script>
import { XHeader, XButton, Checker, CheckerItem, Alert } from 'vux'

export default {
  name: 'mutual',
  data() {
    return {

      label: '',
      defaultProps: {
        label: 'label'
      },
      data: [{
        radio: '',
        title: '班级工作计划总结',
        content: '班级工作计划总结',
        fenshu: [
          {
            caption: "优(8分)",
            value: "0"
          }, {
            caption: "优(6分)",
            value: "1"
          }, {
            caption: "优(4分)",
            value: "2"
          }, {
            caption: "优(0分)",
            value: "3"
          }
        ]
      },
      {
        radio: '',
        title: '班会班干部会记录',
        content: '班会班干部会记录',
        fenshu: [
          {
            caption: "优(12分)",
            value: "0"
          }, {
            caption: "良(8分)",
            value: "1"
          }, {
            caption: "中(4分)",
            value: "2"
          }, {
            caption: "差(0分)",
            value: "3"
          }
        ]
      },
      {
        radio: '',
        title: '与任课老师、家长沟通',
        content: '与任课老师、家长沟通',
        fenshu: [
          {
            caption: "优(16分)",
            value: "0"
          }, {
            caption: "良(12分)",
            value: "1"
          }, {
            caption: "中(8分)",
            value: "2"
          }, {
            caption: "差(0分)",
            value: "3"
          }
        ]
      },
      {
        radio: '',
        title: '助进生教育转化',
        content: '助进生教育转化',
        fenshu: [
          {
            caption: "优(16分)",
            value: "0"
          }, {
            caption: "良(12分)",
            value: "1"
          }, {
            caption: "中(8分)",
            value: "2"
          }, {
            caption: "差(0分)",
            value: "3"
          }
        ]
      },
      {
        radio: '',
        title: '主题教育活动班级活动',
        content: '主题教育活动班级活动',
        fenshu: [
          {
            caption: "优(32分)",
            value: "0"
          }, {
            caption: "良(24分)",
            value: "1"
          }, {
            caption: "中(16分)",
            value: "2"
          }, {
            caption: "差(4分)",
            value: "3"
          }
        ]
      },
      {
        radio: '',
        title: '班级管理日志',
        content: '班级管理日志',
        fenshu: [
          {
            caption: "优(8分)",
            value: "0"
          }, {
            caption: "良(6分)",
            value: "1"
          }, {
            caption: "中(4分)",
            value: "2"
          }, {
            caption: "差(0分)",
            value: "3"
          }
        ]
      },
      {
        radio: '',
        title: '学生考评成绩公布',
        content: '学生考评成绩公布',
        fenshu: [
          {
            caption: "优(8分)",
            value: "0"
          }, {
            caption: "良(6分)",
            value: "1"
          }, {
            caption: "中(4分)",
            value: "2"
          }, {
            caption: "差(0分)",
            value: "3"
          }
        ]
      }
      ]
    }
  },
  activated() {
    this.label = this.$route.params.label
    this.data.forEach(function (item, index) {
      item.radio = ""
    })
  },
  methods: {
    showPlugin() {
      var state = false 
      this.data.forEach(function (item, index) {
        if (item.radio === "") {
          state = true
        }
      })
      if(state){
        this.$vux.alert.show({
            title: '提示',
            content: '您还有没选择的项目',
          })
      }else{
        console.log("向服务器发送请求")
        this.$router.back()
      }
       
    }
  },
  components: {
    XHeader,
    XButton,
    Checker,
    CheckerItem,
    Alert
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



.checker-item {
  width: 67px;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}

.checker-item-selected {
  background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>


