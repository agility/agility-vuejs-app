
<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <p v-html="copyright"></p>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  data: function() {
    return {
      copyright: null
    };
  },
  mounted: async function() {
    const self = this;
    const api = this.$agility.client;

    try {
      //get the global footer
      let contentItemList = await api.getContentList({
        referenceName: "globalfooter",
        languageCode: self.$agility.config.languageCode
      });

      if (contentItemList && contentItemList.items) {
        let contentItem = contentItemList.items[0];

        self.copyright = contentItem.fields.copyright;

      }
    } catch (error) {
      if (console) console.error("Could not load global footer item.", error);
    }

  }
};
</script>