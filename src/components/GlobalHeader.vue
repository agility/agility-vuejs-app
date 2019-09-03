
<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div v-if="siteLogo">
          <img :src="siteLogo.url" :alt="siteName" />
          <span v-if="siteTagline" class="tagline">{{siteTagline}}</span>
        </div>
        <div v-else>{{siteName}}</div>

        <ul :if="sitemap != null">
          <li v-for="node in sitemap" :key="node.pageID" v-if="node.visible.menu">
            <router-link :to="node.path">{{node.menuText}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import PreviewBar from "../agility/PreviewBar";

export default {
  data: function() {
    return {
      siteName: null,
      siteLogo: null,
      siteTagline: null,
      sitemap: null
    };
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

<style scoped>
.header {
  background-color: #717171;
  color: #fff;
  padding: 16px;
}

.header img {
  width: 200px;
  height: auto;
}

.header ul {
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-right: 30px;
}

.header li {
  display: inline-block;
  margin-left: 16px;
}

.header a,
header.a:visited,
header.a:active {
  color: #fff;
}

.header a:hover {
  text-decoration: none;
}
</style>