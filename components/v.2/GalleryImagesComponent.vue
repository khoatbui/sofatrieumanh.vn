<template>
  <div v-if="images !== null" class="gallery__image__component">
    <div class="row mp--none">
      <div class="col-12 mp--none">
        <client-only>
          <ImageMagnifier
            :src="selectedImage === null ? images[0].path : selectedImage.path"
            :zoom-src="
              selectedImage === null ? images[0].path : selectedImage.path
            "
            width="100%"
            height="auto"
            zoom-width="400"
            zoom-height="300"
          ></ImageMagnifier>
        </client-only>
      </div>
      <div class="col-12 mp--none">
        <carousel
          class="gallery__image__carouse"
          :responsive="{
            0: { items: 2, nav: false },
            600: { items: 3, nav: false },
            900: { items: 4, nav: false },
          }"
          :dots="false"
          :autoplay="true"
          :loop="true"
        >
          <img
            v-for="(imag, index) in images"
            :key="index + 'imags'"
            :src="imag.path"
            alt=""
            class="carouse__image"
            @click="selectedImage = imag"
          />
        </carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { ImageMagnifier } from 'vue-image-magnifier';
export default {
  components: {
    ImageMagnifier,
  },
  props: {
    images: {
      type: Array,
      default: null,
    },
  },
  data: () => ({
    selectedImage: null,
  }),
};
</script>
<style lang="scss">
.carouse__image {
  margin: 0.2rem;
}
.gallery__image__carouse .owl-carousel .owl-item {
  padding: 0.2rem !important;
}
.carouse__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
}
</style>
