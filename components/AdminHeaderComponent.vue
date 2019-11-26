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
        <nuxt-link to="/admin/menu">Menus</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <nuxt-link to="/admin/product">Sản phẩm</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <nuxt-link to="/admin/charactery">Đặc điểm</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <nuxt-link to="/admin/blog">Bài viết/ Tin tức</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <nuxt-link to="/admin/dictionary">Từ điển</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <nuxt-link to="/admin/promotion">Khuyến mại</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="6">
        <nuxt-link to="/admin/order">Đơn hàng</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="7">
        <nuxt-link to="/admin/advisor">Yêu cầu</nuxt-link>
      </vs-navbar-item>
      <vs-navbar-item index="7">
        <nuxt-link to="/admin/about">About</nuxt-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    colorx: '#1F74FF',
    indexActive: 0,
  }),
};
</script>
<style lang="scss">
.admin__header__component .vs-navbar--item a {
  font-size: 1rem !important;
  font-weight: normal !important;
}
.logo__admin {
  color: $white__color !important;
}
.admin__header__component .vs-navbar--item a {
  color: #fff !important;
}
</style>
