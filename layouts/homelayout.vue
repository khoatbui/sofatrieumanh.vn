<template>
  <div>
    <HeaderComponent />
    <nuxt />
  </div>
</template>
<script>
export default {
  components: {
    HeaderComponent: () => import('@/components/v.2/HeaderComponent'),
  },
};
</script>
