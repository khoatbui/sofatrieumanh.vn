<template>
  <div class="card border-0 product__card cursor--pointer">
    <div class="card-body m-0 p-0 p-2">
      <div
        class="product__image"
        :style="
          typeof product.images === 'undefined' || product.images.length === 0
            ? `background-image:url('/images/product/1-01.jpg')`
            : `background-image:url('${product.images[0].path}')`
        "
        @click="redirectTo(`${product.url}`)"
      >
        <div class="product__property">
          <span v-if="product.isHot" class="custom__badge custom__hot"
            >Hot</span
          >
          <span v-if="product.isNewProduct" class="custom__badge custom__new"
            >Sản phẩm mới</span
          >
          <span v-if="product.isSaleOff" class="custom__badge custom__saleoff"
            >SaleOff</span
          >
        </div>
        <div class="product__action animated flipInX">
          <vs-button
            color="#333333"
            type="flat"
            class="py-1 px-2 addtocart__btn"
            :to="`/san-pham/${product.url}`"
            >CHỌN MUA</vs-button
          >
          <div>
            <vs-button
              color="#333333"
              type="flat"
              class="py-1 px-2"
              @click="favoriteItem(product)"
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
          {{ product.productName }}
        </div>
        <div class="product__detail my-2">
          <strong class="product__price"
            ><span class="current__price">{{
              product.price == '' || typeof product.price == 'undefined'
                ? 'Liên hệ'
                : new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  })
                    .format(product.price)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
            }}</span>
            <span
              v-if="
                product.oldPrice !== '' &&
                  typeof product.oldPrice !== 'undefined'
              "
              class="discount__price"
              >{{
                new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0,
                })
                  .format(product.oldPrice)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
              }}</span
            >
          </strong>
          <span class="product__star">
            <i v-for="i in product.star" :key="i" class="material-icons">
              star_border
            </i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  methods: {
    redirectTo(url) {
      this.$router.replace(`/san-pham/${url}`);
    },
    favoriteItem(item) {
      this.$store.commit('favoriteItem/favoriteItemClick', item);
    },
  },
};
</script>
<style lang="scss">
.product__card {
  transition-duration: 1s;
}
.product__card:hover {
  transform: translateY(-5px);
}
.product__card:left {
  transform: translateY(5px);
}
.product__property {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
}
.product__image:hover .product__action,
.product__image:focus .product__action {
  display: flex;
}
.product__action {
  display: none;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $white__color !important;
  padding: 0.8rem;
}
.product__action button {
  font-size: 0.8rem;
}
.addtocart__btn {
  font-weight: 600;
  background-color: $white__color !important;
}
.product__action button:hover {
  background-color: $white__color !important;
  color: $primary__color !important;
}
.product__action i {
  font-size: 1rem;
}
.product__info {
  margin: 1.6rem 0;
}
.product__image {
  position: relative;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.product__name {
  color: $primary__text;
  font-size: 0.9rem;
}
.product__detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}
.product__price {
  font-size: 0.9rem;
}
.current__price {
  color: $danger__text;
}
.discount__price {
  color: $primary__text__color;
  text-decoration: line-through;
}
.product__star {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.product__star i {
  font-size: 1rem !important;
  color: $warning__text;
}
</style>
