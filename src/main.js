import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueMaterial from 'vue-material';
import * as VeeValidate from 'vee-validate';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(VeeValidate);
Vue.use(infiniteScroll)
Vue.use(VueMaterial);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
