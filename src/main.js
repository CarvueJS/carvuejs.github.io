import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Carvue from 'carvue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import 'carvue/dist/carvue.min.css'

Vue.config.productionTip = false

Vue.use(Carvue)

Vue.component('CodeSnippet', CodeSnippet)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
