<template>
  <div class="promotion__component">
    <div class="container">
      <carousel :items="1" :autoplay="true" :nav="false" :loop="true">
        <div class="row mp--none h-100">
          <div
            class="col-12 col-md-6 mp--none promotion__content d-flex flex-column justify-content-center align-items-center"
          >
            <h6 class="promotion__content__title">Twist sofa of 50%</h6>
            <p>Handcrafted sofas for exceptional homes</p>
            <button class="btn btn__promo_view">View more</button>
          </div>
          <div class="col-6 mp--none promotion__slide">
            <img
              src="/images/promotion/pro_01.jpg"
              alt=""
              class="promotion__slide__image"
            />
          </div>
        </div>
        <div class="row mp--none h-100">
          <div
            class="col-12 col-md-6 mp--none promotion__content d-flex flex-column justify-content-center align-items-center"
          >
            <h6 class="promotion__content__title">Single sofa of 80%</h6>
            <p>Handcrafted sofas for exceptional homes</p>
            <button class="btn btn__promo_view">View more</button>
          </div>
          <div class="col-6 mp--none promotion__slide">
            <img
              src="/images/promotion/pro_01.jpg"
              alt=""
              class="promotion__slide__image"
            />
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss">
.promotion__component {
  background-color: $promotion__bg__color;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.promotion__content {
  color: $white__color;
}
.promotion__content__title {
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 0.4rem;
  border-bottom: 3px solid $white__color;
}
.promotion__slide__image {
  min-height: 250px;
  max-height: 400px;
}
.promotion__slide {
  display: none;
}
.btn__promo_view {
  background-color: $white__color;
  color: $primary__color;
  border-radius: 0;
}
.owl-dots {
  position: absolute;
  bottom: -35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .promotion__component {
    min-height: 200px;
  }
  .promotion__slide__image {
    height: 150px;
  }
  .promotion__slide {
    display: none;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .promotion__component {
    min-height: 250px;
  }
  .promotion__slide__image {
    height: 180px;
  }
  .promotion__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .promotion__component {
    min-height: 300px;
  }
  .promotion__slide__image {
    height: 200px;
  }
  .promotion__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .promotion__component {
    min-height: 300px;
  }
  .promotion__slide__image {
    height: 200px;
  }
  .promotion__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
