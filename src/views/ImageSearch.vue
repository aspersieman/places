<template>
  <div class="imagesearch">
    <div class="center">
      <h1>Images for {{$store.state.selectedPlace.name}}</h1>
    </div>
    <div v-if="loading" class="center fullwidth">
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>
    <Results type='image' />
  </div>
</template>
<script>
// @ is an alias to /src
import Results from "@/components/ImagesResults.vue";
import { photosMixin } from "@/mixins/photosMixin";
export default {
  name: "home",
  components: {
    Results
  },
  props: {
    name: String
  },
  data() {
    return {
      venue: {
        name: "Test",
      },
      searchData: {},
      loading: false
    };
  },
  mixins: [ photosMixin ],
  beforeMount() {
    this.$store.commit("setSearchResultsImages", []);
  },
  mounted() {
    this.search();
  },
  methods: {
    async search() {
      this.venue.images = [];
      this.loading = true;
      const response = await this.searchPhoto(this.$store.state.selectedPlace);
      this.$store.commit("setSearchResultsImages", response.data.response.photos.items);
      this.loading = false;
    },
  },
};
</script>
<style scoped>
form {
  width: 95vw;
  margin: 0 auto;
}
</style>
