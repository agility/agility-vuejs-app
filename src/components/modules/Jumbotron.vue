<template>
  <section class="jumbotron" :style="[item.fields.backgroundImage ? { backgroundImage: `url(${item.fields.backgroundImage.url})` } : { backgroundColor: `#585858`}]">
    <h1>{{item.fields.title}}</h1>
    <h2>{{item.fields.subTitle}}</h2>

    <div class="cta-btns" v-if="item.fields.primaryButton || item.fields.secondaryButton">
      <a 
        v-if="item.fields.primaryButton" 
        :href="item.fields.primaryButton.href" 
        class="btn btn-lg">
        {{ item.fields.primaryButton.text }}
      </a>

      <a 
        v-if="item.fields.secondaryButton" 
        :href="item.fields.secondaryButton.href" 
        class="btn btn-lg btn-sec">
        {{ item.fields.secondaryButton.text }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
     
    };
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
