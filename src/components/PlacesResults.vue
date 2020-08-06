<template>
  <div class="center">
    <div class="results">
      <div class="md-layout">
        <div>
          <md-card md-with-hover v-for="r in searchResults" :key="r.id" class="place center">
            <md-ripple>
              <md-card-header>
                <div class="md-title">{{r.name}}</div>
                <div class="md-subhead">{{r.location.state}} {{r.location.country}}</div>
              </md-card-header>

              <md-card-content>
                <md-chip v-for="category in r.categories" :key="category.id">{{category.name}}</md-chip>
              </md-card-content>

              <md-card-actions>
                <md-button @click="viewImages(r)">Images</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "results",
  props: {
    type: String
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResultsPlaces;
    },
  },
  methods: {
    viewImages(place) {
      this.$store.commit("setPlace", place);
      this.$router.replace('/places/'+place.id);
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.md-card {
  width: 320px;
  min-width: 320px;
  max-width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: center;
}

</style>
