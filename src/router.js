import Vue from 'vue'
import Router from 'vue-router'
import Frame from './views/Frame.vue'
import Components from './views/Components.vue'
import ComponentContent from './components/ComponentContent.vue'

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
          name: 'components',
          component: Components,
          children: [
            {
              path: ':name',
              name: 'ComponentContent',
              component: ComponentContent,
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
