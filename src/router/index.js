import judge from 'views/judge/index.vue'
import personal from 'views/judge/personal.vue'
import mutual from 'views/judge/mutual.vue'
import satisfaction from 'views/judge/satisfaction.vue'
import score from 'views/judge/score.vue'

const routers = [{
  path: '/',
  name: 'judge',
  component: judge
}, {
  path: '/toPersonal',
  name: 'personal',
  component: personal
}, {
  path: '/toMutual',
  name: 'mutual',
  component: mutual
}, {
  path: '/toSatisfaction',
  name: 'satisfaction',
  component: satisfaction
}, {
  path: '/toScore',
  name: 'score',
  component: score
}]

export default routers
