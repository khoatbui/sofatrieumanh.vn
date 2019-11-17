<template>
  <div>
    <HeaderComponent />
    <nuxt />
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
