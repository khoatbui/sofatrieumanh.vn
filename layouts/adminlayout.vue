<template>
  <div class="admin__layout">
    <AdminHeaderComponent />
    <nuxt class="admin__body__section" />
    <AdminFooterComponent />
  </div>
</template>
<script>
export default {
  components: {
    AdminHeaderComponent: () => import('@/components/AdminHeaderComponent'),
    AdminFooterComponent: () => import('@/components/AdminFooterComponent'),
  },
};
</script>
<style lang="scss">
.admin__layout {
  background-color: $secondary__bg__color;
}
.admin__body__section {
  min-height: 90vh;
}
.admin__layout .vs-inputx {
  border-radius: 0px !important;
}
</style>
