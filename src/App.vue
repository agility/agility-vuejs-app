<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <GlobalHeader />
    <PreviewBar />
    <main class="main">
      <router-view :key="$route.fullPath" />
    </main>
    <GlobalFooter />
  </div>
</template>

<script>
import PreviewBar from "./agility/PreviewBar";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    PreviewBar
  },
  data: function() {
    return {};
  },
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
};
</script>

