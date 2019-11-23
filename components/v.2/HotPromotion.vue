<template>
  <div class="hotpromotion__component">
    <client-only>
      <carousel
        items="1"
        :nav="false"
        :autoplay="true"
        :dots="false"
        :loop="true"
      >
        <div v-for="(pic, i) in headerPicture" :key="i + 'pic'">
          <div
            :style="`background-image:url('${pic.image}')`"
            class="hot__promotion__src"
          >
            <div class="hot__promotion__header__content">
              <h6>{{ pic.promotionName }}</h6>
              <p>{{ pic.promotionIntro }}</p>
              <nuxt-link :to="pic.promotionUrl">Xem ngay</nuxt-link>
            </div>
          </div>
        </div>
      </carousel>
    </client-only>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: '',
    headerPicture: [
      {
        image: '/images/promotion/pro_01.jpg',
        promotionName: 'Bộ sưu tập mới',
        promotionIntro: 'Giảm giá 20% trên các bộ sưu tập mới',
        promotionUrl: '/khuyen-mai/',
      },
    ],
  }),
};
</script>
<style lang="scss">
.hot__promotion__src {
  background-image: url('/images/banner/banner_01.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  position: relative;
}
.hot__promotion__header__content {
  position: absolute;
  color: $white__color;
  background-color: $three__color;
  bottom: 50%;
  right: 30%;
  transform: translate(50%, 50%);
  padding: 1.6rem;
}
.hot__promotion__header__content h6 {
  font-size: 2rem;
  font-weight: bold;
}
.hot__promotion__header__content p {
  font-size: 0.9rem;
  font-weight: 400;
}
.hot__promotion__header__content a {
  border: 2px solid $primary__color;
  background-color: $primary__color;
  padding: 0.8rem 1.6rem;
  text-decoration: none !important;
  color: $three__color !important;
}
</style>
