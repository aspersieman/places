import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    searchResultsImages: [],
    searchResultsPlaces: [],
    selectedPlace: {}
  },
  mutations: {
    setSearchResultsImages(state, payload) {
      state.searchResultsImages = payload;
    },
    setSearchResultsPlaces(state, payload) {
      state.searchResultsPlaces = payload;
    },
    setPlace(state, payload) {
      state.selectedPlace = payload;
    }
  },
  actions: {
  }
})
