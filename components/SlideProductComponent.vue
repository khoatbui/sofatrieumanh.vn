<template>
  <div v-if="productList.length > 0" class="sliderproduct__component">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0">
        <h3 class="slider__title">San pham hap dan</h3>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0">
        <client-only>
          <carousel
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 3, nav: false },
              900: { items: 4, nav: false },
            }"
            :dots="false"
            :nav="false"
            :autoplay="true"
            :loop="true"
          >
            <div
              v-for="(product, i) in productList"
              :key="i + 'productlist'"
              class="card m-0 p-2 border-0 slideproduct__item"
            >
              <div
                class="slide__product__img cursor__pointer"
                :style="`background-image:url('${product.images[0].path}')`"
                @click="redirectTo(product.url)"
              ></div>
              <div class="card-body m-0 p-0 p-2">
                <h6
                  class="product__item__name cursor__pointer"
                  @click="redirectTo(product.url)"
                >
                  {{ product.productName }}
                </h6>
                <div class="slide__product__item__price">
                  <span class="slide__current__price">{{
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
                    class="slide__discount__price"
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
                </div>
              </div>
            </div>
          </carousel>
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.getProductListByType();
  },
  methods: {
    redirectTo(url) {
      this.$router.replace(`/san-pham/${url}`);
    },
    getProductListByType() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/productapi/product-list-by-state/new`)
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
  },
};
</script>
<style lang="scss">
.slider__title {
  font-size: 2rem;
  font-weight: bold;
  color: $primary__color;
  padding-bottom: 2rem;
  text-align: center;
}
.slideproduct__item {
  margin: 0 0.8rem;
}
.sliderproduct__component .owl-carousel {
  position: relative !important;
}
.sliderproduct__component .owl-nav {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.sliderproduct__component .owl-nav .owl-prev,
.sliderproduct__component .owl-nav .owl-next,
.sliderproduct__component .owl-nav .owl-prev:hover,
.sliderproduct__component .owl-nav .owl-next:hover {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: $white__color !important;
  color: $primary__color !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border: 0;
  outline: 0 !important;
}
.sliderproduct__component .owl-nav .owl-prev span,
.sliderproduct__component .owl-nav .owl-next span {
  font-size: 1.5rem !important;
  font-weight: bold;
}
.slide__product__img {
  background-image: url('/images/product/pro_08.jpg');
  min-height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.slide__product__item__price {
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide__current__price {
  font-size: 1.2rem;
  color: $danger__color;
  font-weight: bold;
  font-size: 0.9rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  margin: 0 0.4rem;
}
.slide__discount__price {
  color: $muted__text;
  font-weight: bold;
  font-size: 0.8rem;
  text-decoration: line-through;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .sliderproduct__component .owl-nav {
    width: 100%;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .sliderproduct__component .owl-nav {
    width: 100%;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .sliderproduct__component .owl-nav {
    width: 101%;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .sliderproduct__component .owl-nav {
    width: 102%;
  }
}
</style>
