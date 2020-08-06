<template>
  <div class="center">
    <div class="results">
      <div class="md-layout">
        <div style="width: 100%;">
          <md-card v-for="r in searchResults" :key="r.id" class="picture">
              <md-card-media>
                <md-ripple>
                  <img :src="r.prefix + r.width + 'x' + r.height + r.suffix" class="image" />
                </md-ripple>
              </md-card-media>

              <md-card-actions>
                <md-button @click="details(r)">Details</md-button>

                <md-button @click="favourite(r)" class="md-icon-button" :class="{ 'md-primary': isFavourite(r) }">
                  <md-icon>favorite</md-icon>
                </md-button>

                <md-button class="md-icon-button" @click="share(r.prefix + r.width + 'x' + r.height + r.suffix)">
                  <md-icon>share</md-icon>
                </md-button>
              </md-card-actions>
          </md-card>
        </div>
      </div>
    </div>
    <md-dialog-alert
      :md-active.sync="showShare"
      md-title="Share the image URL"
      :md-content="url"
      md-confirm-text="Ok" />
    <md-dialog :md-active.sync="showDetails">
      <md-dialog-title>Image details</md-dialog-title>
      <div class="image-details">
        <p class="fullwidth"><strong>Height</strong>: {{image.height}}px</p>
        <p class="fullwidth"><strong>Width</strong>: {{image.width}}px</p>
        <p class="fullwidth"><strong>Source</strong>: {{image.source.name}}</p>
        <p class="fullwidth" v-if="image.createdAt"><strong>Created</strong>: {{image.createdAt | moment("dddd, MMMM Do YYYY")}}</p>
      </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDetails = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
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
      return this.$store.state.searchResultsImages;
    }
  },
  mounted() {
    if (localStorage.getItem('images')) {
      try {
        this.images = JSON.parse(localStorage.getItem('images'));
      } catch(e) {
        localStorage.removeItem('images');
      }
    }
  },
  methods: {
    share(url) {
      this.url = url;
      this.showShare = true;
    },
    details(image) {
      this.image = image;
      this.showDetails = true;
    },
    favourite(image) {
      if (!image) {
        return;
      }
      if (this.isFavourite(image)) {
        this.removeFavourite(image)
      } else {
        this.images.push(image.id);
        this.saveFavourites();
      }
    },
    removeFavourite(image) {
      this.images.splice(image.id, 1);
      this.saveFavourites();
    },
    saveFavourites() {
      const parsed = JSON.stringify(this.images);
      localStorage.setItem('images', parsed);
    },
    isFavourite(image) {
      return this.images.includes(image.id);
    }
  },
  data() {
    return {
      showShare: false,
      showDetails: false,
      url: "",
      image: {
        height: "",
        width: "",
        source: {
          name: "",
        },
        createdAt: ""
      },
      images: []
    };
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

.center {
  text-align: center;
}

.image-details {
  margin: 5px;
  padding: 5px;
}

.fullwidth {
  width: 100%;
}
</style>
