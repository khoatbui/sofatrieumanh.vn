<template>
  <div v-if="productList.length > 0" class="productlist__component">
    <div class="row mp--none">
      <div class="col-12 mp--none mt-4 mb-2">
        <h5 class="list__title">
          <strong class="list__title__style">
            {{ categoryDetail.menuName }}</strong
          >
        </h5>
      </div>
    </div>
    <div class="row mp--none">
      <div
        class="col-12 mp--none d-flex justify-content-start align-items-center flex-wrap"
      >
        <div
          v-for="(product, index) in productList"
          :key="index + 'pro'"
          class="card border-0 product__item"
        >
          <div class="card-body p-1">
            <div
              class="product__item__img"
              :style="
                `background-image: url('${
                  typeof product.images !== 'undefined' &&
                  product.images.length > 0
                    ? product.images[0].path
                    : '/images/product/pro_01.jpg'
                }')`
              "
              @click="redirectToProductPage(product.url)"
            >
              <div class="discount__tag"></div>
            </div>
            <div class="product__item__detail">
              <h6
                class="product__item__name"
                @click="redirectToProductPage(product.url)"
              >
                {{ product.productName }}
              </h6>
              <div class="product__item__price">
                <span class="current__price">{{
                  new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  }).format(product.price)
                }}</span>
                <span class="discount__price">{{
                  new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  }).format(product.oldPrice)
                }}</span>
              </div>
              <div class="product__item__action">
                <vs-button
                  :color="'#156867'"
                  type="border"
                  class="border__radius--none px-2 py-1 m-1"
                  @click="redirectToComparePage"
                  >Xem nhanh</vs-button
                >
                <vs-button
                  :color="'#156867'"
                  type="filled"
                  class="border__radius--none px-2 py-1 m-1 border__primary"
                  @click="redirectToProductPage(product.url)"
                  >Mua ngay</vs-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 product__item custom__product__card">
          <div
            class="card-body p-1 d-flex justify-content-center align-items-center"
          >
            <div class="product__item__detail">
              <h6 class="product__item__name">
                Không tìm thấy sản phẩm ưng ý, bạn muốn thiết kế riêng chứ?
              </h6>
              <div class="product__item__action">
                <button class="custom__design__btn">
                  <i class="material-icons text__size--x2">
                    assignment
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ZoomOnHoverComponent from '@/components/ZoomOnHoverComponent'
export default {
  components: {
    // ZoomOnHoverComponent
  },
  props: {
    productTypeUrl: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    productList: [],
    categoryDetail: {},
  }),
  mounted() {
    this.getProductListByType();
    this.getCategoryByUrl();
  },
  methods: {
    redirectToProductPage(url) {
      this.$router.replace(`/san-pham/${url}`);
    },
    redirectToComparePage(url) {
      this.$router.replace(`/so-sanh/${url}`);
    },
    getProductListByType() {
      this.$vs.loading();
      this.$axios
        .get(
          `${process.env.API_HTTP}/productapi/product-list-by-category/${this.productTypeUrl}`
        )
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
    },
    getCategoryByUrl() {
      this.$vs.loading();
      this.$axios
        .get(
          `${process.env.API_HTTP}/menuapi/single-menu-with-url/${this.productTypeUrl}`
        )
        .then(response => {
          this.categoryDetail = response.data;
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
    },
  },
};
</script>
<style lang="scss">
.list__title {
  border-bottom: 3px solid $promotion__bg__color;
  line-height: normal !important;
  margin: 1.5%;
}
.list__title__style {
  background-color: $promotion__bg__color;
  color: $white__color;
  padding: 0.4rem 60px 0.8rem 0.4rem;
  position: relative;
  height: 40px !important;
  display: inline-block;
  box-sizing: border-box !important;
}
.list__title__style::before {
  position: absolute;
  bottom: 2px;
  right: 0;
  content: '';
  width: 0;
  height: 0;
  border-left: 22px solid transparent;
  border-bottom: 22px solid transparent;
  border-right: 22px solid $white__color;
  border-top: 22px solid $white__color;
}
.product__item {
  width: 98%;
  min-height: 250px;
  margin: 1%;
}
.product__item__img {
  min-height: 200px;
  max-height: 300px;
  background-size: cover;
  background-position: center;
}
.product__item__action {
  display: flex;
  justify-content: center;
  align-items: center;
}
.border__primary {
  border: 1px solid $primary__color;
}
.product__item__price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product__item__name {
  color: $promotion__bg__color;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 0.4rem auto;
}
.current__price {
  color: $primary__color;
  font-weight: bold;
  font-size: 0.9rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}
.discount__price {
  color: $muted__color;
  font-weight: bold;
  font-size: 0.8rem;
  text-decoration: line-through;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}
.custom__product__card {
  background-color: $primary__color;
  color: $white__color;
}
.custom__product__card .product__item__name {
  color: $white__color !important;
}
.custom__design__btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  color: $primary__color;
  background-color: $muted__color;
  font-size: 2rem;
}
.custom__design__btn:hover,
.custom__design__btn:active,
.custom__design__btn:focus {
  color: $white__color !important;
  background-color: $secondary__color;
  border: 2px dashed $primary__color;
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .product__item {
    width: 98%;
    min-height: 250px;
    margin: 1%;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .product__item {
    width: 31%;
    min-height: 250px;
    margin: 1%;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .product__item {
    width: 23%;
    min-height: 250px;
    margin: 1%;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .product__item {
    width: 23%;
    min-height: 250px;
    margin: 1%;
  }
}
</style>
