<template>
  <div class="home__page">
    <section>
      <NewCategory />
    </section>
    <section>
      <HotPromotion />
    </section>
    <section>
      <TopProductComponent />
    </section>
  </div>
</template>
<script>
export default {
  layout: 'homelayout',
  components: {
    NewCategory: () => import('@/components/v.2/NewCategory'),
    HotPromotion: () => import('@/components/v.2/HotPromotion'),
    TopProductComponent: () => import('@/components/v.2/TopProductComponent'),
  },
};
</script>
