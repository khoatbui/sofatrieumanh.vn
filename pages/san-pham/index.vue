<template>
  <div class="product__page">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0 p-0">
        <ProductDetailComponent @categoryDate="updateCategory" />
      </div>
    </div>
    <div class="section__margin--y">
      <RequestAdvisorComponent />
    </div>
    <RelatedProductComponent
      class="section__margin--y"
      :category="categoryList"
    />
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
  data: () => ({
    categoryList: [],
  }),
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
  methods: {
    updateCategory(variable) {
      this.categoryList = variable;
    },
  },
};
</script>
<style lang="scss"></style>
