<template>
  <div class="container">
    <div v-html="item.fields.textblob"></div>
  </div>
</template>

<script>
export default {
  props: {
    contentID: Number,
    item: Object,
    page: Object,
    pageInSitemap: Object,
    dynamicPageItem: Object
  }
};
</script>