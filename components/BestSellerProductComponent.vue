<template>
  <div class="bestseller__component">
    <div class="container">
      <div class="row mp--none">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mp--none">
          <h6 class="bestseller__title">Sản phẩm bán chạy</h6>
          <p class="bestseller__content">
            Sofa TrieuManh mang đến cho những người yêu nội thất những trải
            nghiệm tinh tế và giàu cảm xúc, nơi vẻ đẹp của nội thất được thổi
            hồn và thăng hoa
          </p>
          <nuxt-link to="/san-pham/best-seller" class="bestseller__link"
            >Tim hieu them
            <i class="material-icons">
              arrow_right
            </i></nuxt-link
          >
        </div>
        <div class="col-12 col-sm-6 col-md-8 col-lg-9 mp--none">
          <div class="row mp--none">
            <div
              class="col-12 mp--none d-flex justify-content-start align-items-center flex-wrap"
            >
              <div class="card border-0 bestseller__item">
                <div class="card-body p-1">
                  <div class="product__item__img product__item__img--02">
                    <div class="discount__tag"></div>
                  </div>
                  <div class="product__item__detail">
                    <h6 class="product__item__name">
                      SOFA GÓC CỔ ĐIỂN MÃ 1468
                    </h6>
                    <div class="product__item__price">
                      <span class="current__price">2,560,270</span>
                      <span class="discount__price">3,900,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border-0 bestseller__item">
                <div class="card-body p-1">
                  <div class="product__item__img product__item__img--03">
                    <div class="discount__tag"></div>
                  </div>
                  <div class="product__item__detail">
                    <h6 class="product__item__name">
                      SOFA GÓC CỔ ĐIỂN MÃ 1468
                    </h6>
                    <div class="product__item__price">
                      <span class="current__price">2,560,270</span>
                      <span class="discount__price">3,900,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border-0 bestseller__item">
                <div class="card-body p-1">
                  <div class="product__item__img product__item__img--04">
                    <div class="discount__tag"></div>
                  </div>
                  <div class="product__item__detail">
                    <h6 class="product__item__name">
                      SOFA GÓC CỔ ĐIỂN MÃ 1468
                    </h6>
                    <div class="product__item__price">
                      <span class="current__price">2,560,270</span>
                      <span class="discount__price">3,900,000</span>
                    </div>
                  </div>
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
  methods: {
    redirectToProductPage() {
      this.$router.replace('/san-pham')
    },
    redirectToComparePage() {
      this.$router.replace('/so-sanh')
    }
  }
}
</script>
<style lang="scss">
.bestseller__item {
  width: 98%;
  min-height: 250px;
  margin: 1%;
}
.bestseller__item .product__item__img {
  height: 200px !important;
}
.bestseller__item .product__item__price {
  flex-direction: row;
}
.bestseller__item .current__price {
  margin: 0 0.4rem;
}
.bestseller__title {
  font-size: 2rem;
  font-weight: bold;
  color: $promotion__bg__color;
  position: relative;
  margin-bottom: 1.6rem;
}
.bestseller__title::before {
  position: absolute;
  content: '';
  bottom: -0.4rem;
  left: 0;
  width: 40%;
  height: 4px;
  border-radius: 100px;
  background-color: $promotion__bg__color;
}
.bestseller__link {
  color: $secondary__color;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.bestseller__link:hover,
.bestseller__link:active,
.bestseller__link:focus {
  color: $primary__color;
  text-decoration: none;
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
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .bestseller__item {
    width: 98%;
    min-height: 250px;
    margin: 1%;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .bestseller__item {
    width: 48%;
    min-height: 250px;
    margin: 1%;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .bestseller__item {
    width: 31%;
    min-height: 250px;
    margin: 1%;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .bestseller__item {
    width: 31%;
    min-height: 250px;
    margin: 1%;
  }
}
</style>
