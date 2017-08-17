import Vue from 'vue'
import Router from 'vue-router'
import judge from 'views/judge/index.vue'
import personal from 'views/judge/personal.vue'

Router.prototype.forward = function (location) {
  this.push(location)
}

Router.prototype.back = function (location) {
  window.history.back()
}
Vue.use(Router)

const routers = [{
  path: '/',
  name: 'judge',
  component: judge
}, {
  path: '/toPersonal',
  name: 'personal',
  component: personal
}]

export default routers
