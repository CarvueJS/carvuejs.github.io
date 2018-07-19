import Vue from 'vue'
import Router from 'vue-router'
import Frame from './views/Frame.vue'
import Right from './views/Right.vue'
import Content from './components/Content.vue'
// import GetStarted from './views/GetStarted.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'frame',
      component: Frame,
      children: [
        {
          path: 'component',
          name: 'component',
          component: Right,
          children: [
            {
              path: ':name',
              name: 'ComponentContent',
              component: Content,
            },
          ],
        },
        {
          path: '',
          component: Right,
          children: [
            {
              path: ':name',
              name: 'GetStarted',
              component: Content,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      redirect: '/component/Accordion',
    },
  ],
})
