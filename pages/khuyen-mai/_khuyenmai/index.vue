<template>
  <div class="tintuc__page">
    <div class="section__padding--b">
      <PromotionDetailComponent class="mb-4 border-bottom" />
      <SlideProductComponent class="mt-4 container" />
    </div>
  </div>
</template>
<script>
import PromotionDetailComponent from '@/components/PromotionDetailComponent';
import SlideProductComponent from '@/components/SlideProductComponent';
export default {
  layout: 'pagelayout',
  components: {
    PromotionDetailComponent,
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
