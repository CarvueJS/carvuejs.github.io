import Vue from 'vue'
import Router from 'vue-router'
import Frame from './views/Frame.vue'
import Components from './views/Components.vue'
import ComponentContent from './components/ComponentContent.vue'
import GetStarted from './views/GetStarted.vue'

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
          component: Components,
          children: [
            {
              path: ':name',
              name: 'ComponentContent',
              component: ComponentContent,
            },
          ],
        },
        {
          path: 'getStarted',
          name: 'getStarted',
          component: GetStarted,
        },
      ],
    },
    {
      path: '*',
      redirect: '/component/Accordion',
    },
  ],
})
