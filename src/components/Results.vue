<template>
  <div class="center">
    <div class="results">
      <div class="md-layout">
        <md-card v-for="r in searchResults" :key="r.id" class="picture">
          <div v-if="type == 'image'">
            <md-card-media>
              <md-ripple>
                <img :src="r.previewURL" class="image" />
              </md-ripple>
            </md-card-media>

            <md-card-actions>
              <md-button>Details</md-button>

              <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>share</md-icon>
              </md-button>
            </md-card-actions>
          </div>
          <md-card-media v-if="type == 'video'">
            <video class="image">
              <source :src="r.videos.tiny.url" type="video/mp4" />
            </video>
          </md-card-media>
        </md-card>
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
      return this.$store.state.searchResults;
    }
  },
  data() {
    return {};
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
