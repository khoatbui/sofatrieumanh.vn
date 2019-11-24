<template>
  <div class="product__page">
    <div class="container">
      <div class="row mp--none">
        <div class="col-12 mp--none">
          <ProductListComponent />
        </div>
      </div>
    </div>
    <RelatedProductComponent class="section__margin" />
  </div>
</template>
<script>
import RelatedProductComponent from '@/components/RelatedProductComponent.vue';
import ProductListComponent from '@/components/ProductListComponent.vue';
export default {
  layout: 'pagelayout',
  components: {
    RelatedProductComponent,
    ProductListComponent,
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
  methods: {},
};
</script>
<style lang="scss"></style>
