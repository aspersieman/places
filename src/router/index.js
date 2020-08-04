import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue';
import ImageSearch from '../views/ImageSearch.vue';
import VideoSearch from '../views/VideoSearch.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/imagesearch',
      name: 'imagesearch',
      component: ImageSearch
    },
    {
      path: '/videosearch',
      name: 'videosearch',
      component: VideoSearch
    }
  ]
})
