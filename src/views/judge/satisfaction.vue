<template>
  <page class="mutual">
    <x-header>考评系统</x-header>
    <h4 class="label" :props="defaultProps">{{label}}</h4>
    <div class="main" v-for="(item ,index) in data" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="content">{{item.content}}</p>
      <div class="radioList">
        <checker v-model="item.radio" default-item-class="checker-item" selected-item-class="checker-item-selected">
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
        title: '学生教育工作1',
        content: '作风严谨，为人师表，通过自己日常一言一行告诉学生如何做人做事。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生教育工作2',
        content: '经常深入到学生中，及时掌握学生思想、学习和生活情况，关心帮助学生，做学生的良师益友',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生教育工作3',
        content: '鼓励、引导学生开展各种类型的教育活动，注重学生综合素质的提高，效果明显。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生教育工作4',
        content: '针对特殊学生，能经常有针对性的开展各种教育活动。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生教育工作5',
        content: '举止文明，仪表端庄，求真务实，勤勉敬业，言传与身教并重。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生管理工作1',
        content: '经常深入班级，及时处理学生各种问题，方法适当。重视班级考勤工作，培养学生良好行为习惯。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生管理工作2',
        content: '作风正派，办事公道，在学生的各类评比、评选活动中，能做到公开、公平和公正。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生管理工作3',
        content: '重视学生干部队伍建设，本班学生干部在学习、工作和生活中发挥了先锋模范作用。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生管理工作4',
        content: '重视学风建设，帮助学生端正学习态度、改进学习方法、提高学习效率，培养优良的学风。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '学生管理工作5',
        content: '清正廉洁，以身作则，不参加学生及家长的宴请、不接受任何形式的钱、物。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '整体印象1',
        content: '你认为班级中班风正、人心齐、凝聚力强。',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
      },
      {
        radio: '',
        title: '整体印象2',
        content: '整体而言，你对本班辅导员、班主任的满意度程度是',
        fenshu: [{
          caption: "满意",
          value: 0
        }, {
          caption: "基本满意",
          value: 1
        }, {
          caption: "不满意",
          value: 2
        }]
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
      if (state) {
        this.$vux.alert.show({
          title: '提示',
          content: '您还有没选择的项目',
        })
      } else {
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


