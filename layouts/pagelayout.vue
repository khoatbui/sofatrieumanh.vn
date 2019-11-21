<template>
  <div>
    <FixedHeaderComponent />
    <nuxt class="body__section" />
    <FooterComponent />
  </div>
</template>
<script>
export default {
  components: {
    FixedHeaderComponent: () => import('@/components/v.2/FixedHeaderComponent'),
    FooterComponent: () => import('@/components/v.2/FooterComponent'),
  },
};
</script>
<style lang="scss">
.body__section {
  min-height: 80vh;
}
</style>
