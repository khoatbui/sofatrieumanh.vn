<template>
  <div class="admin__layout">
    <AdminHeaderComponent />
    <nuxt class="admin__body__section" />
    <AdminFooterComponent />
  </div>
</template>
<script>
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import AdminFooterComponent from '@/components/AdminFooterComponent.vue';
export default {
  components: {
    AdminHeaderComponent,
    AdminFooterComponent,
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
