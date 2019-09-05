<template>
  <div class="two-column-template">
    
    <ContentZone
      name="MainContentZone"
      :page="page"
      :pageInSitemap="pageInSitemap"
      :dynamicPageItem="dynamicPageItem"
    />

    <section class="body-columns">

      <div class="main-column">
        <ContentZone
          name="FeatureContentZone"
          :page="page"
          :pageInSitemap="pageInSitemap"
          :dynamicPageItem="dynamicPageItem"
        />
      </div>

      <aside class="side-column">
        <ContentZone
          name="SideContentZone"
          :page="page"
          :pageInSitemap="pageInSitemap"
          :dynamicPageItem="dynamicPageItem"
        />
      </aside>

    </section>
  </div>
</template>

<script>
import ContentZone from "../../agility/AgilityContentZone";
export default {
  props: {
    page: Object,
    pageInSitemap: Object,
    dynamicPageItem: Object
  },
  components: {
    ContentZone
  }
};
</script>