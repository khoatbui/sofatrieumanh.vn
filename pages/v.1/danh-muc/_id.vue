<template>
  <div class="product__page">
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
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
};
</script>
<style lang="scss"></style>
