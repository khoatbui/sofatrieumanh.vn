<template>
  <div class="sliderproduct__component">
    <div class="row mp--none">
      <div class="col-12 mp--none">
        <no-ssr>
          <!-- important to add no-ssr-->

          <carousel
            :responsive="{
              0: { items: 1, nav: true },
              600: { items: 3, nav: true },
              900: { items: 4, nav: true }
            }"
            :dots="false"
            :autoplay="true"
            :loop="true"
          >
            <div class="card mp--none border-0 slideproduct__item">
              <div class="slide__product__img"></div>
              <div class="card-body mp--none p-2">
                <h6 class="product__item__name">SOFA GÓC CỔ ĐIỂN MÃ 1468</h6>
                <div class="slide__product__item__price">
                  <span class="slide__current__price">2,560,270</span>
                  <span class="slide__discount__price">3,900,000</span>
                </div>
              </div>
            </div>
            <div class="card mp--none border-0 slideproduct__item">
              <div class="slide__product__img"></div>
              <div class="card-body mp--none p-2">
                <h6 class="product__item__name">SOFA GÓC CỔ ĐIỂN MÃ 1468</h6>
                <div class="slide__product__item__price">
                  <span class="slide__current__price">2,560,270</span>
                  <span class="slide__discount__price">3,900,000</span>
                </div>
              </div>
            </div>
            <div class="card mp--none border-0 slideproduct__item">
              <div class="slide__product__img"></div>
              <div class="card-body mp--none p-2">
                <h6 class="product__item__name">SOFA GÓC CỔ ĐIỂN MÃ 1468</h6>
                <div class="slide__product__item__price">
                  <span class="slide__current__price">2,560,270</span>
                  <span class="slide__discount__price">3,900,000</span>
                </div>
              </div>
            </div>
            <div class="card mp--none border-0 slideproduct__item">
              <div class="slide__product__img"></div>
              <div class="card-body mp--none p-2">
                <h6 class="product__item__name">SOFA GÓC CỔ ĐIỂN MÃ 1468</h6>
                <div class="slide__product__item__price">
                  <span class="slide__current__price">2,560,270</span>
                  <span class="slide__discount__price">3,900,000</span>
                </div>
              </div>
            </div>
            <div class="card mp--none border-0 slideproduct__item">
              <div class="slide__product__img"></div>
              <div class="card-body mp--none p-2">
                <h6 class="product__item__name">SOFA GÓC CỔ ĐIỂN MÃ 1468</h6>
                <div class="slide__product__item__price">
                  <span class="slide__current__price">2,560,270</span>
                  <span class="slide__discount__price">3,900,000</span>
                </div>
              </div>
            </div>
          </carousel>
        </no-ssr>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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
  color: $muted__color;
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
