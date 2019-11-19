<template>
  <div class="product__page">
    <div class="section__margin">
      <div class="row mp--none">
        <div class="col-12 mp--none">
          <ProductDetailComponent />
        </div>
      </div>
    </div>
    <div class="section__margin">
      <RequestAdvisorComponent />
    </div>
    <RelatedProductComponent class="section__margin" />
  </div>
</template>
<script>
import RelatedProductComponent from '@/components/RelatedProductComponent.vue';
import ProductDetailComponent from '@/components/v.2/ProductDetailComponent.vue';
import RequestAdvisorComponent from '@/components/RequestAdvisorComponent.vue';
export default {
  layout: 'pagelayout',
  components: {
    RelatedProductComponent,
    ProductDetailComponent,
    RequestAdvisorComponent,
  },
  data: () => ({}),
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
<style lang="scss"></style>
