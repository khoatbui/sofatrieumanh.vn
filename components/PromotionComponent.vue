<template>
  <div class="promotion__component">
    <div class="container">
      <carousel :items="1" :autoplay="true" :nav="false" :loop="true">
        <div
          v-for="(pro, index) in promotionList"
          :key="index + 'saspro'"
          class="row m-0 p-0 h-100"
        >
          <div
            class="col-12 col-md-6 m-0 p-0 promotion__content d-flex flex-column justify-content-center align-items-center"
          >
            <h6 class="promotion__content__title">{{ pro.promotionName }}</h6>
            <p>{{ pro.promotionIntro }}</p>
            <button class="btn btn__promo_view" @click="redirectTo(pro.url)">
              View more
            </button>
          </div>
          <div class="col-6 m-0 p-0 promotion__slide">
            <img
              :style="
                `background-image: url('${
                  typeof pro.images !== 'undefined' && pro.images.length > 0
                    ? pro.images[0].path
                    : '/images/product/pro_01.jpg'
                }')`
              "
              alt=""
              class="promotion__slide__image"
            />
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      promotionList: [],
    };
  },
  mounted() {
    this.getPromotionList();
  },
  methods: {
    getPromotionList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/promotionapi/active`)
        .then(response => {
          this.promotionList = response.data;
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
    redirectTo(url) {
      this.$router.replace(`/khuyen-mai/${url}`);
    },
  },
};
</script>
<style lang="scss">
.promotion__component {
  background-color: $promotion__bg__color;
  min-height: 300px;
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 270px;
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
    height: 270px;
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
    height: 280px;
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
    height: 300px;
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
    height: 350px;
  }
  .promotion__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
