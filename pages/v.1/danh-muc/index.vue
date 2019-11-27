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
export default {
  layout: 'pagelayout',
  components: {
    RelatedProductComponent: () =>
      import('@/components/RelatedProductComponent'),
    ProductListComponent: () => import('@/components/ProductListComponent'),
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
