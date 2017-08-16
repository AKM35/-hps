import Vue from 'vue'
import Router from 'vue-router'
import judge from 'views/judge/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'judge',
      component: judge
    }
  ]
})
