<template>
  <div
    v-if="completedGetData == true || productList.length > 0"
    class="related__component"
  >
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
          <h6 class="component__title">Sản phẩm liên quan</h6>
        </div>
      </div>
      <div class="row m-0 p-0">
        <div
          v-for="(pro, ist) in getTop8Product"
          :key="ist + 'prod'"
          class="col-12 col-sm-6 col-md-3 col-lg-3 m-0 p-0"
        >
          <ProductItemComponent :product="pro" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ProductItemComponent: () => import('@/components/v.2/ProductItemComponent'),
  },
  props: {
    category: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      productList: [],
      completedGetData: false,
    };
  },
  computed: {
    getTop8Product() {
      if (this.productList.length > 0) {
        return this.productList.filter((product, index) => {
          return index < 8;
        });
      }
      return [];
    },
  },
  mounted() {
    this.getProductByCategory();
  },
  methods: {
    redirectToProductPage(url) {
      this.$router.replace(`/san-pham/${url}`);
    },
    redirectToComparePage() {
      this.$router.replace('/so-sanh');
    },
    getProductByCategory() {
      if (this.category.length > 0) {
        this.$axios
          .get(
            `${process.env.API_HTTP}/productapi/product-list-by-category/${this.category[0].url}`
          )
          .then(response => {
            this.productList = response.data;
            this.$vs.loading.close();
            this.completedGetData = true;
          })
          .catch(error => {
            this.$vs.notify({
              color: 'danger',
              title: 'Opps!',
              text: error,
            });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      } else {
        this.$axios
          .get(`${process.env.API_HTTP}/productapi/product-list-by-state/hot`)
          .then(response => {
            this.productList = response.data;
            this.$vs.loading.close();
          })
          .catch(error => {
            this.$vs.notify({
              color: 'danger',
              title: 'Opps!',
              text: error,
            });
          })
          .finally(() => {
            this.$vs.loading.close();
          });
      }
    },
  },
};
</script>
<style lang="scss">
.product__item__img {
  background-image: url('/images/product/pro_01.jpg');
  min-height: 200px;
  max-height: 300px;
  background-size: cover;
  background-position: center;
}
.product__item__img--04 {
  background-image: url('/images/product/pro_04.jpg');
}
.product__item__img--02 {
  background-image: url('/images/product/pro_02.jpg');
}
.product__item__img--03 {
  background-image: url('/images/product/pro_05.jpg');
}
</style>
