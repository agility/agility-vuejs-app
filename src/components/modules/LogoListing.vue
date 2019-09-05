<template>
  <section class="section-logo-listing">
    <div class="container">
      <h3>{{item.fields.title}}</h3>

      <div class="logo-list">
        <template v-for="logo in logos">
          <div class="logo" :key="logo.contentID">
            <span v-if="logo.url && logo.image">
              <a :href="logo.url" :title="logo.url.title">
                <img :src="logo.image.url" :alt="logo.image.label" />
              </a>
            </span>
            <span v-else>
              <img v-if="logo.image" :src="logo.image.url" :alt="logo.image.label" />
            </span>
          </div>
        </template>
      </div>
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
      logos: []
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
        referenceName: "customerlogos",
        languageCode: self.$agility.config.languageCode
      });

      let logos = [];

      contentListResult.items.forEach(item => {
        let img = null;
        if (item.fields.image) {
          img = {
            url: item.fields.image.url,
            label: item.fields.image.label
          };
        }

        logos.push({
          contentID: item.contentID,
          url: item.fields.url,
          image: img
        });

        this.logos = logos;
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