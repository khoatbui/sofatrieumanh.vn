<template>
  <div class="favorite__page">
    <div class="row m-0 p-0 w-100">
      <div class="favoritesum__detail__image__src">
        <div
          class="category__info w-100 d-flex justify-content-center align-items-center flex-column"
        >
          <h1 class="favoritesum__name">Sản phẩm yêu thích</h1>
          <nuxt-link to="/" class="favoritesum__action"
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
                v-for="(pro, index) in getfavorite.list"
                :key="index + 'pros'"
                class="row mp--none py-2 border-bottom"
              >
                <div class="favoritesum__card__image col-2">
                  <img
                    :src="pro.images[0].path"
                    alt=""
                    class="favoritesum__item__image"
                  />
                </div>
                <div class="favoritesum__card__body col-8">
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
                <div class="favoritesum__card__action col-2">
                  <vs-button color="primary" type="flat" @click="cartItem(pro)">
                    <i class="material-icons text__size--x12">
                      shopping_cart
                    </i></vs-button
                  >
                  <vs-button
                    color="danger"
                    type="flat"
                    @click="removefavoriteItem(pro)"
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
                    >Mua toàn bộ</vs-button
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
    getfavorite() {
      return {
        qty: this.$store.state.favoriteItem.favoriteItem,
        list: this.$store.state.favoriteItem.favoriteList,
      };
    },
    totalPrice() {
      return this.$store.state.favoriteItem.favoriteList.reduce(function(
        accumulator,
        currentValue
      ) {
        return accumulator + currentValue.price;
      },
      0);
    },
  },
  methods: {
    removefavoriteItem(favorite) {
      this.$store.commit('favoriteItem/removeFavoriteItemClick', favorite);
    },
    cartItem(item) {
      this.$store.commit('cartItem/cartItemClick', item);
    },
  },
};
</script>
<style lang="scss">
.favoritesum__detail__image__src {
  background-image: url('/images/banner/banner_06.jpg');
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
.favoritesum__name {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: $white__color;
}
.favoritesum__action {
  color: $white__color !important;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  font-size: 1.2rem;
}
.favoritesum__action:hover {
  text-decoration: none !important;
}
.favoritesum__item__image {
  height: 60px;
  border-radius: 5px;
}
</style>
