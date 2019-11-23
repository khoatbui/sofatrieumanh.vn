<template>
  <div>
    <HeaderComponent />
    <nuxt class="body__component" />
    <FooterComponent />
  </div>
</template>
<script>
import Vue from 'vue';
import Vuesax from 'vuesax';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/v.2/FooterComponent.vue';

import 'vuesax/dist/vuesax.css'; // Vuesax styles
import 'material-icons/iconfont/material-icons.css';
Vue.use(Vuesax);
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style>
html {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.body__component {
  min-height: 80vh;
}
</style>
