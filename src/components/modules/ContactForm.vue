<template>
    <section class="section-contact-form">

        <form>
            <p>{{item.fields.formIntroText}}</p>
            
            <div class="form-group">
                <label for="">Name:</label>
                <input type="text" />
            </div>

            <div class="form-group">
                <label for="">Email:</label>
                <input type="email" />
            </div>

            <div class="form-group">
                <label for="">Phone:</label>
                <input type="phone" />
            </div>

            <div class="form-group">
                <label for="">Company:</label>
                <input type="text" />
            </div>

            <div class="form-group">
                <label for="">Questions / Comments:</label>
                <textarea rows="" cols=""></textarea>
            </div>

            <button type="submit" class="btn btn-md">Submit Form</button>
        </form>

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
