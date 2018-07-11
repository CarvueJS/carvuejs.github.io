import Vue from 'vue'
import Router from 'vue-router'
import Content from './components/Content.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/component/:name',
      name: 'home',
      component: Content,
    },
  ],
})
