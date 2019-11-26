<template>
  <div class="cart__page">
    <div class="row m-0 p-0 w-100">
      <div class="cartsum__detail__image__src">
        <div
          class="category__info w-100 d-flex justify-content-center align-items-center flex-column"
        >
          <h1 class="cartsum__name">Giỏ hàng</h1>
          <nuxt-link to="/" class="cartsum__action"
            ><i class="material-icons">
              keyboard_backspace
            </i>
            Quay lại</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="container section__margin--y">
      <div class="row mp--none">
        <div class="col-12">
          <div class="card border-0">
            <div class="card-body">
              <div
                v-for="(pro, index) in getCart.list"
                :key="index + 'pros'"
                class="row mp--none py-2 border-bottom"
              >
                <div class="cartsum__card__image col-2">
                  <img
                    :src="pro.product.images[0].path"
                    alt=""
                    class="cartsum__item__image"
                  />
                </div>
                <div class="col-3">
                  <span class=" d-flex align-items-center mr-4">
                    <button class="plus__btn" @click="minusQty(pro)">
                      <i class="material-icons">remove</i>
                    </button>
                    <span class="px-2 font-weight-bold text__size--x12">{{
                      pro.qty
                    }}</span>
                    <button class="plus__btn" @click="plusQty(pro)">
                      <i class="material-icons">add</i>
                    </button>
                  </span>
                </div>
                <div class="cartsum__card__body col-5">
                  <p class="p-0 m-0">
                    {{ pro.qty }} x {{ pro.product.productName }}
                  </p>
                  <p class="pb-0 mb-0 text__size--x08">
                    {{ pro.qty }} x
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
                    =
                    {{
                      pro.product.price == '' ||
                      typeof pro.product.price == 'undefined'
                        ? 'Liên hệ'
                        : new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0,
                          })
                            .format(pro.product.price * pro.qty)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                    }}
                  </p>
                </div>
                <div class="cartsum__card__action col-2">
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
              <div class="row mp--none">
                <div
                  class="col-12 d-flex justify-content-between align-items-center"
                >
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
                  ><vs-button
                    :color="'#ffb400'"
                    :text-color="'#2d2430'"
                    type="filled"
                    class="px-4 py-2 border__radius--10 my-3"
                    @click="redirectTo"
                    >Checkout</vs-button
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
  computed: {
    getCart() {
      return {
        qty: this.$store.state.cartItem.cartItem,
        list: this.$store.state.cartItem.cartList,
      };
    },
    totalPrice() {
      return this.$store.state.cartItem.cartList.reduce(function(
        accumulator,
        currentValue
      ) {
        return accumulator + currentValue.product.price * currentValue.qty;
      },
      0);
    },
  },
  methods: {
    removeCartItem(cart) {
      this.$store.commit('cartItem/removeCartItemClick', cart);
    },
    redirectTo() {
      this.$router.replace(`/thanh-toan/`);
    },

    plusQty(item) {
      if (item.qty < 10) {
        this.$store.commit('cartItem/plusItem', item);
      }
    },
    minusQty(item) {
      if (item.qty > 1) {
        this.$store.commit('cartItem/minusItem', item);
      }
    },
  },
};
</script>
<style lang="scss">
.cartsum__detail__image__src {
  background-image: url('/images/banner/banner_05.jpg');
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
.cartsum__name {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: $white__color;
}
.cartsum__action {
  color: $white__color !important;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  font-size: 1.2rem;
}
.cartsum__action:hover {
  text-decoration: none !important;
}
.cartsum__item__image {
  height: 60px;
  border-radius: 5px;
}
</style>
