
<template>
  <fixed-header :threshold="0">
    <header class="header" >
      <div class="container">
        <div class="row flex-items">
          <div v-if="siteLogo">
            <router-link to="/" title="Home"><img :src="siteLogo.url" :alt="siteName" /></router-link>
            <span v-if="siteTagline" class="tagline">{{siteTagline}}</span>
          </div>
          <div v-else>{{siteName}}</div>

          <nav class="global-nav">
            <ul :if="sitemap != null">
              <li v-for="node in sitemap" :key="node.pageID" v-if="node.visible.menu">
                <router-link :to="node.path">{{node.menuText}}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </fixed-header>
</template>

<script>
import Vue from 'vue'
import PreviewBar from "../agility/PreviewBar";
import FixedHeader from 'vue-fixed-header';

export default {
  data: function() {
    return {
      siteName: null,
      siteLogo: null,
      siteTagline: null,
      sitemap: null
    };
  },
  components: {
    FixedHeader
  },
  mounted: async function() {
    const self = this;
    const api = this.$agility.client;

    try {
      //get the global header
      let contentItemList = await api.getContentList({
        referenceName: "globalheader",
        languageCode: self.$agility.config.languageCode
      });

      if (contentItemList && contentItemList.items) {
        let contentItem = contentItemList.items[0];

        self.siteName = contentItem.fields.siteName;
        self.siteLogo = contentItem.fields.siteLogo;
        self.siteTagline = contentItem.fields.siteTagline;
      }
    } catch (error) {
      if (console) console.error("Could not load global header item.", error);
    }

    try {
      //get the nested sitemap
      let sitemap = await api.getSitemapNested({
        channelName: self.$agility.config.channelName,
        languageCode: self.$agility.config.languageCode
      });

      self.sitemap = sitemap;
    } catch (error) {
      if (console) console.error("Could not load nested sitemap.", error);
    }
  }
};
</script>