<template>
  <div>
    <HeaderComponent :alway-fix="false" />
    <nuxt class="body__section" />
    <FooterComponent />
    <CallComponent />
    <CompareComponent />
  </div>
</template>
<script>
export default {
  components: {
    HeaderComponent: () => import('@/components/v.2/HeaderComponent'),
    FooterComponent: () => import('@/components/v.2/FooterComponent'),
    CallComponent: () => import('@/components/v.2/CallComponent'),
    CompareComponent: () => import('@/components/v.2/CompareComponent'),
  },
};
</script>
<style lang="scss">
.body__section {
  min-height: 80vh;
}
</style>
