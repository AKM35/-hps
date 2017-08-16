// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import 'assets/js/fastclick.js'
import 'assets/css/normalize.css'
import router from './router'
import { Tree } from 'element-ui'
import 'assets/css/common.css'

window.FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Tree)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
