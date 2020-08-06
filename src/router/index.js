import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../views/Home.vue';
import PlacesSearch from '../views/PlacesSearch.vue';
import ImageSearch from '../views/ImageSearch.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: PlacesSearch
    },
    {
      path: '/places',
      name: 'places',
      component: PlacesSearch
    },
    {
      path: '/places/:id',
      name: 'images',
      component: ImageSearch
    },
    {
      path: '/imagesearch',
      name: 'imagesearch',
      component: ImageSearch
    },
  ]
})
