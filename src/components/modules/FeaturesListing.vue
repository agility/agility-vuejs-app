<template>
  <section class="features-listing">
    <div class="container">
      <h1>{{item.fields.title}}</h1>

      <template v-for="feature in features">
        <div class="feature" :key="feature.contentID">
          <img v-if="feature.image != null" :src="feature.image.url" :alt="feature.image.label" />
          <h2>
            {{feature.title}}
          </h2>
          <p v-html="feature.description"></p>
        </div>
      </template>
    </div>
  </section>
</template>


<script>

export default {
  props: {
    contentID: Number,
    item: Object,
    page: Object
  },
  data: function() {
    return {
      features: []
    };
  },
  async mounted() {
    const self = this;
    const api = self.$agility.client;
    try {
      //TODO: Should add these to the Vuex Store
      
      let sitemap = await api.getSitemapFlat({
        channelName: self.$agility.config.channelName,
        languageCode: self.$agility.config.languageCode
      });

      //then get our features
      let contentListResult = await api.getContentList({
        referenceName: "features",
        languageCode: self.$agility.config.languageCode
      });

      let features = [];

      contentListResult.items.forEach(item => {
        let img = null;
        if (item.fields.image) {
          img = {
            url: item.fields.image.url,
            label: item.fields.image.label
          };
        }

        features.push({
          contentID: item.contentID,
          title: item.fields.title,
          description: item.fields.description,
          image: img
        });

        this.features = features;
      });
    } catch (error) {
      if (console) console.error(error);
    }
  },
  methods: {
    
  }
};
</script>


<style scoped>

</style>