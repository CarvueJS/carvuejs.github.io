import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Carvue from 'carvue'
import Codepen from '@/components/Codepen.vue'
import 'carvue/dist/carvue.min.css'

Vue.config.productionTip = false

Vue.use(Carvue)

Vue.component('Codepen', Codepen)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
