<template>
  <section class="content-panel" :style="">
    <div class="container">
      <div class="row">
        <div v-if="item.fields.imageAlignRight === 'true'" class="content">
          <div class="text">
            <h4>{{item.fields.title}}</h4>
            <p v-html="item.fields.textblob"></p>
          </div>

          <div class="image">
            <img :src="item.fields.image.url" :alt="item.fields.image.label" />
          </div>
        </div>

        <div v-else class="content abc">
          <div class="image">
            <img :src="item.fields.image.url" :alt="item.fields.image.label" />
          </div>

          <div class="text">
            <h4>{{item.fields.title}}</h4>
            <p v-html="item.fields.textblob"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      
    }
  },
  props: {
    contentID: Number,
    item: Object,
    page: Object,
    pageInSitemap: Object,
    dynamicPageItem: Object
  }
};
</script>
