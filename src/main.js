// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import 'assets/js/fastclick.js'
import 'assets/css/normalize.css'
import components from 'components'
import VueRouter from 'vue-router'
import routers from './router'
import { Tree, Input, Collapse, CollapseItem, Table, TableColumn, Radio, RadioGroup, Button } from 'element-ui'
import 'assets/css/common.css'

window.FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Tree)
Vue.use(Input)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(components)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)

VueRouter.prototype.forward = function (location) {
  this.push(location)
}

VueRouter.prototype.back = function (location) {
  window.history.back()
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
