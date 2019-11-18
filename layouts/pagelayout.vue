<template>
  <div>
    <HeaderComponent :alway-fix="true" />
    <nuxt class="body__section" />
    <FooterComponent />
  </div>
</template>
<script>
export default {
  components: {
    HeaderComponent: () => import('@/components/v.2/HeaderComponent'),
    FooterComponent: () => import('@/components/v.2/FooterComponent'),
  },
};
</script>
<style lang="scss">
.body__section {
  min-height: 80vh;
}
</style>
