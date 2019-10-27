<template>
  <div class="product__page">
    <div class="container section__margin">
      <div class="row mp--none">
        <div class="col-12 mp--none">
          <ProductDetailComponent />
        </div>
      </div>
    </div>
    <RelatedProductComponent class="section__margin" />
  </div>
</template>
<script>
import RelatedProductComponent from '@/components/RelatedProductComponent.vue'
import ProductDetailComponent from '@/components/ProductDetailComponent.vue'
export default {
  layout: 'mainlayout',
  components: {
    RelatedProductComponent,
    ProductDetailComponent
  },
  data: () => ({})
}
</script>
<style lang="scss"></style>
