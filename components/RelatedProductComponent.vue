<template>
  <div
    v-if="completedGetData == true || productList.length > 0"
    class="related__component"
  >
    <div class="container">
      <div class="row mp--none">
        <div class="col-12 mp--none">
          <h6 class="component__title">Sản phẩm liên quan</h6>
        </div>
      </div>
      <div class="row mp--none">
        <div
          v-for="(pro, ist) in getTop8Product"
          :key="ist + 'prod'"
          class="col-12 col-sm-6 col-md-3 col-lg-3"
        >
          <div class="card border-0 product__card">
            <div class="card-body mp--none p-2">
              <div
                class="product__image"
                :style="
                  typeof pro.images === 'undefined' || pro.images.length === 0
                    ? `background-image:url('/images/product/1-01.jpg')`
                    : `background-image:url('${pro.images[0].path}')`
                "
                @click="redirectToProductPage(pro.url)"
              >
                <div class="product__property">
                  <span v-if="pro.isHot" class="custom__badge custom__hot"
                    >Hot</span
                  >
                  <span
                    v-if="pro.isNewProduct"
                    class="custom__badge custom__new"
                    >Sản phẩm mới</span
                  >
                  <span
                    v-if="pro.isSaleOff"
                    class="custom__badge custom__saleoff"
                    >SaleOff</span
                  >
                </div>
                <div class="product__action animated flipInX">
                  <vs-button
                    color="#333333"
                    type="flat"
                    class="py-1 px-2 addtocart__btn"
                    to="/san-pham"
                    >CHỌN MUA</vs-button
                  >
                  <div>
                    <vs-button color="#333333" type="flat" class="py-1 px-2"
                      ><i class="material-icons">
                        favorite_border
                      </i></vs-button
                    >
                    <vs-button color="#333333" type="flat" class="py-1 px-2"
                      ><i class="material-icons">
                        compare_arrows
                      </i></vs-button
                    >
                  </div>
                </div>
              </div>
              <div class="product__info">
                <div class="product__name my-2">
                  {{ pro.productName }}
                </div>
                <div class="product__item__detail my-2">
                  <strong class="product__price"
                    ><span class="current__price">{{
                      pro.price == '' || typeof pro.price == 'undefined'
                        ? 'Liên hệ'
                        : new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0,
                          })
                            .format(pro.price)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                    }}</span>
                    <span
                      v-if="
                        pro.oldPrice !== '' &&
                          typeof pro.oldPrice !== 'undefined'
                      "
                      class="discount__price"
                      >{{
                        new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                          minimumFractionDigits: 0,
                        })
                          .format(pro.oldPrice)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                      }}</span
                    >
                  </strong>
                  <span class="product__star">
                    <i v-for="i in pro.star" :key="i" class="material-icons">
                      star_border
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    productList: [],
    completedGetData: false,
  }),
  computed: {
    getTop8Product() {
      if (this.productList.length > 0) {
        return this.productList.filter((product, index) => {
          console.log(index);
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
