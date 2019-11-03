<template>
  <div class="admin__header__component">
    <vs-navbar
      v-model="indexActive"
      class="nabarx"
      :color="colorx"
      text-color="rgba(255,255,255,1)"
      active-text-color="rgba(255,255,255,1)"
    >
      <div slot="title">
        <vs-navbar-title class="logo__admin">
          TrieuManh Admin
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <nuxt-link to="/admin/product">Product</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <nuxt-link to="/admin/menu">Menus</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <nuxt-link to="/admin/charactery">Đặc điểm</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <nuxt-link to="/admin/blog">Blog / News</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <nuxt-link to="/admin/order">Order</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <nuxt-link to="/admin/issues">Issues</nuxt-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    colorx: '#1F74FF',
    indexActive: 0
  })
}
</script>
<style lang="scss">
.admin__header__component .vs-navbar--item a {
  font-size: 1rem !important;
  font-weight: normal !important;
}
.logo__admin {
  color: $white__color !important;
}
</style>
