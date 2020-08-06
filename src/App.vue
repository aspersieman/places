<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <h3 class="md-title">Places</h3>
        <router-link to="/">
          <md-button class="header-button">
            Home
          </md-button>
        </router-link>
      </div>
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Places</span>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link to="/">
            <span class="md-list-item-text">Home</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/places">
            <span class="md-list-item-text">Places Search</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-drawer>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data: () => {
    return {
      showNavigation: false
    };
  }
};
</script>
<style scoped>
.header-button {
  margin-left: 20px !important;
}
</style>
