<template>
  <div class="checkout__page">
    <div class="row m-0 p-0 category__component w-100">
      <div class="checkout__detail__image__src">
        <div
          class="category__info w-100 d-flex justify-content-center align-items-center flex-column"
        >
          <h1 class="checkout__name">Thanh toán</h1>
          <nuxt-link to="/" class="checkout__action"
            ><i class="material-icons">
              keyboard_backspace
            </i>
            Quay lại</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div v-if="getCart.qty > 0" class="row mp--none">
        <div class="col-12 col-md-6">
          <div class="card border__checkout">
            <div class="card-body">
              <vs-input
                v-model="order.fullName"
                label="Họ và tên"
                placeholder="Nguyễn Văn A"
                class="w-100 border__radius--none custom__input my-3"
              />
              <vs-input
                v-model="order.email"
                label="Địa chỉ email"
                placeholder="email@gmail.com"
                class="w-100 border__radius--none custom__input my-3"
              />
              <vs-input
                v-model="order.phoneNumber"
                label="Số điện thoại"
                placeholder="+84 935-235-695"
                class="w-100 border__radius--none custom__input my-3"
              />
              <vs-input
                v-model="order.address"
                label="Địa chỉ nhận hàng"
                placeholder="135/3 Trung Kính, Nam Từ Liêm, Hà Nội"
                class="w-100 border__radius--none custom__input my-3"
              />
              <div class="custom__input my-3">
                <label for="icomment" class="label__input"
                  >Lưu ý khi giao hàng</label
                >
                <vs-textarea
                  id="icomment"
                  v-model="order.comment"
                  class="w-100 comment__input"
                />
              </div>
              <vs-button
                :color="'#ffb400'"
                :text-color="'#2d2430'"
                type="filled"
                class="px-4 py-2 border__radius--10 my-3"
                >Đặt hàng</vs-button
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card border-0">
            <div class="card-body">
              <div
                v-for="(pro, index) in getCart.list"
                :key="index + 'pros'"
                class="row mp--none py-2 border-bottom"
              >
                <div class="checkout__card__image col-3 col-md-2">
                  <img
                    :src="pro.images[0].path"
                    alt=""
                    class="checkout__item__image"
                  />
                </div>
                <div class="checkout__card__body col-7 col-md-8">
                  <p class="p-0 m-0">{{ pro.productName }}</p>
                  <p class="pb-0 mb-0 text__size--x08">
                    {{
                      pro.price == '' || typeof pro.price == 'undefined'
                        ? 'Liên hệ'
                        : new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0,
                          })
                            .format(pro.price)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                    }}
                  </p>
                </div>
                <div class="checkout__card__action col-2">
                  <vs-button
                    color="danger"
                    type="flat"
                    @click="removeCartItem(pro)"
                  >
                    <i class="material-icons text__size--x12">
                      delete_forever
                    </i></vs-button
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="card border-0 total__card">
            <div class="card__body p-4">
              <strong
                >Tổng :
                {{
                  new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  })
                    .format(totalPrice)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                }}</strong
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  data: () => ({
    order: {
      fullName: '',
      email: '',
      phoneNumber: '',
      comment: '',
      address: '',
    },
    productDetail: {},
    completedGetData: false,
  }),
  computed: {
    getCart() {
      if (
        typeof this.$route.query.checkout !== 'undefined' &&
        this.completedGetData
      ) {
        return {
          qty: 1,
          list: [this.productDetail],
        };
      }
      return {
        qty: this.$store.state.cartItem.cartItem,
        list: this.$store.state.cartItem.cartList,
      };
    },
    totalPrice() {
      return this.getCart.list.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.price;
      }, 0);
    },
  },
  mounted() {
    this.getProductDetail();
  },
  methods: {
    removeCartItem(cart) {
      this.$store.commit('cartItem/removeCartItemClick', cart);
    },
    getProductDetail() {
      this.$vs.loading();
      if (typeof this.$route.query.checkout !== 'undefined') {
        this.$axios
          .get(
            `${process.env.API_HTTP}/productapi/single-product-by-url/${this.$route.query.checkout}`
          )
          .then(response => {
            this.productDetail = response.data;
            console.log(this.productDetail);
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
      }
    },
  },
};
</script>
<style lang="scss">
.checkout__detail__image__src {
  background-image: url('/images/banner/banner_04.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 350px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkout__name {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: $white__color;
}
.checkout__action {
  color: $white__color !important;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  font-size: 1.2rem;
}
.checkout__action:hover {
  text-decoration: none !important;
}
.border__checkout {
  border-radius: 5px;
  border: 2px solid $secondary__color;
}
.checkout__item__image {
  height: 40px;
  border-radius: 5px;
}
</style>
