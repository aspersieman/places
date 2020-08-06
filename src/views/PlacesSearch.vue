<template>
  <div class="imagesearch">
    <div class="center">
      <h1>Places Search</h1>
    </div>
    <form @submit="search" novalidate class="center">
      <md-field :class="{ 'md-invalid': errors.has('near') }">
        <md-icon>search</md-icon>
        <label for="near">Keyword</label>
        <md-input md-clearable type="text" name="near" v-model="searchData.near" v-validate="'required'"></md-input>
        <span class="md-error" v-if="errors.has('near')">{{errors.first('near')}}</span>
      </md-field>
      <md-button class="md-raised" type="submit">Search</md-button>
    </form>
    <Results type='place' />
    <div v-if="loading" class="center fullwidth">
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>
  </div>
</template>
<script>
import Results from "@/components/PlacesResults.vue";
import { placesMixin } from "@/mixins/placesMixin";
export default {
  name: "home",
  components: {
    Results
  },
  data() {
    return {
      places: [],
      searchData: {},
      loading: false
    };
  },
  mixins: [ placesMixin ],
  beforeMount() {
    this.$store.commit("setSearchResultsPlaces", []);
  },
  computed: {
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  },
  methods: {
    async search(evt) {
      evt.preventDefault();
      if (!this.isFormDirty || this.errors.items.length > 0) {
        return;
      }
      this.places = [];
      this.$store.commit("setSearchResultsPlaces", []);
      this.loading = true;
      const response = await this.searchPlace(this.searchData);
      this.places = response.data.response.venues;
      this.$store.commit("setSearchResultsPlaces", response.data.response.venues);
      this.loading = false;
    },
  }
};
</script>
<style scoped>
form {
  width: 50vw;
  margin: 0 auto;
}
.center {
  text-align: center;
}
</style>

