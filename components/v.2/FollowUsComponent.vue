<template>
  <div class="followus__component">
    <client-only>
      <carousel
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 4, nav: false },
          900: { items: 5, nav: false },
        }"
        :dots="false"
        :autoplay="true"
        :loop="true"
      >
        <div v-for="(img, i) in facebookImage" :key="i + 'face'">
          <div
            class="followus__image"
            :style="`background-image:url('${img.image}')`"
          ></div>
        </div>
      </carousel>
    </client-only>

    <vs-button
      color="warning"
      type="filled"
      class="followus__btn"
      @click="gotoFacebook"
    >
      <img src="/images/icon/facebook-50.png" alt="" />
      Follow us on Facebook</vs-button
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    facebookImage: [
      { image: '/images/facebooks/face_01.jpg' },
      { image: '/images/facebooks/face_02.jpg' },
      { image: '/images/facebooks/face_03.jpg' },
      { image: '/images/facebooks/face_04.jpg' },
      { image: '/images/facebooks/face_05.jpg' },
      { image: '/images/facebooks/face_06.jpg' },
    ],
  }),
  methods: {
    gotoFacebook() {
      window.open('https://www.facebook.com/sofatrieumanh/', '_blank');
    },
  },
};
</script>
<style lang="scss">
.followus__component {
  position: relative;
}
.followus__btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}
.followus__image {
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.followus__btn {
  padding: 0.4 0.8rem;
  color: $secondary__color !important;
}
.followus__btn img {
  height: 20px;
}
</style>
