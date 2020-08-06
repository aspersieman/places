import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueMaterial from 'vue-material';
import * as VeeValidate from 'vee-validate';
import infiniteScroll from 'vue-infinite-scroll'
import './sass/base.scss'

Vue.use(VeeValidate);
Vue.use(infiniteScroll)
Vue.use(VueMaterial);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
