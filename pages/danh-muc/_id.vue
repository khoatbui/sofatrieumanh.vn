<template>
  <div class="danhmuc__page">
    <section>
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
