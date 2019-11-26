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
    <div class="container section__margin--y">
      <div v-if="getCart.qty > 0" class="row m-0 p-0">
        <div class="col-12 col-md-6">
          <div class="card border__checkout">
            <div class="card-body">
              <vs-input
                v-model="order.customer.fullName"
                label="Họ và tên"
                placeholder="Nguyễn Văn A"
                class="w-100 border__radius--none custom__input my-3"
                :danger="validation.target === 'fullName'"
                :danger-text="validation.text"
              />
              <vs-input
                v-model="order.customer.email"
                label="Địa chỉ email"
                placeholder="email@gmail.com"
                class="w-100 border__radius--none custom__input my-3"
              />
              <vs-input
                v-model="order.customer.phoneNumber"
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
                @click="sendOrder"
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
                class="row m-0 p-0 py-2 border-bottom"
              >
                <div class="checkout__card__image col-3 col-md-2">
                  <img
                    :src="pro.product.images[0].path"
                    alt=""
                    class="checkout__item__image"
                  />
                </div>
                <div class="checkout__card__body col-7 col-md-8">
                  <p class="p-0 m-0">
                    {{ pro.qty }} x {{ pro.product.productName }}
                  </p>
                  <p class="pb-0 mb-0 text__size--x08">
                    {{
                      pro.product.price == '' ||
                      typeof pro.product.price == 'undefined'
                        ? 'Liên hệ'
                        : new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0,
                          })
                            .format(pro.product.price)
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
    <div v-if="orderSuccess" class="finish__popup animated pulse">
      <div class="finish__form container">
        <div class="container">
          <div class="row m-0 p-0">
            <div
              class="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column"
            >
              <img src="/images/icon/ok.png" class="finish__image" />
              <div class="finish__info mb-4">
                <h5>Cảm ơn quý khách đã đặt hàng tại sofa Triệu Mạnh</h5>
                <h6 class="danger-text">Mã đơn hàng #{{ transactionCode }}</h6>
              </div>
              <div class="finish__note">
                <p class="text-left text-muted text__size--x08">
                  Nhân viên của Sofa Triệu Mạnh sẽ gọi điện lại để xác nhận đơn
                  hàng sau 30 phút. Quý khách vui lòng theo dõi và nhận cuộc gọi
                  của chúng tôi
                </p>
                <p class="text-left text-muted text__size--x08">
                  Các sản phẩm sẽ được thanh toán theo hình thức chuyển khoản,
                  hoặc chuyển khoản 50% giá trị đơn hàng ( nhân viên tư vấn sẽ
                  hướng dẫn khách hàng). Trong trường hợp chuyển khoản, quý
                  khách vui lòng chuyển khoản theo thông tin sau
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="finish__bank mt-4">
                <h6>Thông tin chuyển khoản</h6>
                <div class="row m-0 p-0 py-2 border-bottom">
                  <div class="col-6 m-0 p-0">
                    <span>Chủ tài khoản</span>
                  </div>
                  <div class="col-6 m-0 p-0 text-left">
                    <strong>Nguyễn Xuân Hoàn</strong>
                  </div>
                </div>
                <div class="row m-0 p-0 py-2 border-bottom">
                  <div class="col-6 m-0 p-0">
                    <span>Số tài khoản</span>
                  </div>
                  <div class="col-6 m-0 p-0 text-left">
                    <strong>045 100 038 2326</strong>
                  </div>
                </div>
                <div class="row m-0 p-0 py-2 border-bottom">
                  <div class="col-6 m-0 p-0">
                    <span>Ngân hàng</span>
                  </div>
                  <div class="col-6 m-0 p-0 text-left">
                    <strong>Vietcombank chi nhánh Thành Công, Hà Nội</strong>
                  </div>
                </div>
                <div class="row m-0 p-0 py-2">
                  <vs-button
                    :color="'#ffb400'"
                    :text-color="'#2d2430'"
                    type="filled"
                    class="px-4 py-2 border__radius--10 my-3 w-100"
                    @click="redirectTo"
                    >Quay về trang chủ</vs-button
                  >
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
  layout: 'pagelayout',
  data: () => ({
    order: {
      customer: {
        fullName: '',
        email: '',
        phoneNumber: '',
      },
      comment: '',
      address: '',
      totalPrice: 0,
      products: [],
    },
    validation: {
      target: '',
      text: '',
    },
    productDetail: {},
    completedGetData: false,
    orderSuccess: false,
    transactionCode: '',
  }),
  computed: {
    getCart() {
      if (
        typeof this.$route.query.checkout !== 'undefined' &&
        this.completedGetData
      ) {
        return {
          qty: 1,
          list: [{ product: this.productDetail, qty: this.$route.query.qty }],
        };
      }
      return {
        qty: this.$store.state.cartItem.cartItem,
        list: this.$store.state.cartItem.cartList,
      };
    },
    totalPrice() {
      return this.getCart.list.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.product.price * currentValue.qty;
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
      if (typeof this.$route.query.checkout !== 'undefined') {
        this.$vs.loading();
        this.$axios
          .get(
            `${process.env.API_HTTP}/productapi/single-product-by-url/${this.$route.query.checkout}`
          )
          .then(response => {
            this.productDetail = response.data;
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
    redirectTo() {
      this.$router.replace(`/`);
    },
    sendOrder() {
      if (!this.checkValidation()) {
        return;
      }
      this.order.totalPrice = this.totalPrice;
      this.order.products = this.getCart.list;
      this.$axios
        .post(`${process.env.API_HTTP}/orderapi/new-order`, this.order)
        .then(result => {
          this.transactionCode = result.data.result;
          this.$store.commit('cartItem/removeOrderdItems', this.order.products);
          this.$vs.loading.close();
          this.orderSuccess = true;
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
    checkValidation() {
      if (this.order.customer.fullName.length === 0) {
        this.validation = {
          target: 'fullName',
          text: 'Yêu cầu nhập họ tên',
        };
        return false;
      }
      if (this.order.customer.email.length === 0) {
        this.validation = {
          target: 'email',
          text: 'Yêu cầu nhập email',
        };
        return false;
      }
      if (this.order.customer.phoneNumber.length === 0) {
        this.validation = {
          target: 'phoneNumber',
          text: 'Yêu cầu nhập số điện thoại liên lạc',
        };
        return false;
      }
      if (this.order.address.length === 0) {
        this.validation = {
          target: 'address',
          text: 'Yêu cầu nhập địa chỉ nhận hàng',
        };
        return false;
      }
      return true;
    },
  },
};
</script>
<style lang="scss">
.finish__popup {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
}
.finish__form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $white__color;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
}
.finish__image {
  width: 50px;
}
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
