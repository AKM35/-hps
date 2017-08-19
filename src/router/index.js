import judge from 'views/judge/index.vue'
import personal from 'views/judge/personal.vue'

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
