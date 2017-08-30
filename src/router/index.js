import judge from 'views/judge/index.vue'
import section from 'views/judge/section.vue'
import personal from 'views/judge/personal.vue'
import mutual from 'views/judge/mutual.vue'
import satisfaction from 'views/judge/satisfaction.vue'
import score from 'views/judge/score.vue'

const routers = [{
  path: '/',
  name: 'judge',
  component: judge
}, { // 首页
  path: '/toSection',
  name: 'section',
  component: section
}, {// 部门
  path: '/toPersonal',
  name: 'personal',
  component: personal
}, {// 个人的评价项目
  path: '/toMutual',
  name: 'mutual',
  component: mutual
}, {// 辅导员、班主任工作互评表(100)
  path: '/toSatisfaction',
  name: 'satisfaction',
  component: satisfaction
}, { // 辅导员、班主任满意度测评表(100) 
  path: '/toScore',
  name: 'score',
  component: score
  // 中职 学年学工部考核成绩表(100)
}]

export default routers
