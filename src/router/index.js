import Vue from 'vue'
import Router from 'vue-router'
import judge from 'views/judge/index.vue'

Router.prototype.forward = function (location) {
  this.push(location)
}

Router.prototype.back = function (location) {
  window.history.back()
}
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'judge',
    component: judge
  }]
})
