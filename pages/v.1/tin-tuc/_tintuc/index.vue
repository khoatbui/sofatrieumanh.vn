<template>
  <div class="tintuc__page">
    <div class="container section__padding">
      <BlogDetailComponent class="mb-4 border-bottom" />
      <SlideProductComponent class="mt-4" />
    </div>
  </div>
</template>
<script>
import BlogDetailComponent from '@/components/BlogDetailComponent';
import SlideProductComponent from '@/components/SlideProductComponent';
export default {
  layout: 'pagelayout',
  components: {
    BlogDetailComponent,
    SlideProductComponent,
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.tintuc__page {
  background-color: $secondary__bg__color;
}
</style>
