<template>
  <div class="danhmuc__page">
    <section class="section__margin--b">
      <ProductListComponent />
    </section>
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  components: {
    ProductListComponent: () => import('@/components/v.2/ProductListComponent'),
  },
};
</script>
