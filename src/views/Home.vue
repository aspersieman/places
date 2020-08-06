<template>
  <div class="home">
    <div class="center">
      <h1>Home</h1>
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10">
        <md-card v-for="p in photos" :key="p.id">
          <md-card-media>
            <img :src="p.previewURL" class="image" />
          </md-card-media>
        </md-card>
      </div>
    </div>
  </div>
</template>
<script>
import { photosMixin } from "@/mixins/photosMixin";
export default {
  name: "home",
  components: { },
  data() {
    return {
      photos: [],
      page: 1
    };
  },
  mixins: [ photosMixin ],
  beforeMount() {
    this.getAllPhotos();
  },
  methods: {
    async getAllPhotos() {
      const response = await this.getPhotos();
      this.photos = response.data.hits;
    },
    async loadMore() {
      this.page++;
      const response = await this.getPhotos(this.page);
      this.photos = this.photos.concat(response.data.hits);
    }
  }
};
</script>
<style lang="scss" scoped>
.md-card {
  width: 30vw;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.home {
  margin: 0 auto;
}
</style>
