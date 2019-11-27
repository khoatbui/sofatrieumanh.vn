<template>
  <div class="promotionlist__component">
    <div class="row m-0 p-0 category__component w-100 section__margin">
      <div
        class="col-12 promotion__list_img col-md-12 mx-auto m-0 p-0 d-flex justify-content-center align-items-center flex-column"
      >
        <h1 class="category__name">Promotions</h1>
        <p class="category__intro text-center w-75">
          Các chương trình khuyến mãi đến từ Triệu Mạnh
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row m-0 p-0">
        <div
          v-for="(promotion, index) in promotionList"
          :key="index + 'promotion'"
          class="col-12 col-sm-6 col-md-4 m-0 p-0 p-2"
        >
          <div class="card border-0 m-0 p-0 promotion__item my-2">
            <div
              class="promotion__image cursor__pointer"
              :style="
                typeof promotion.images === 'undefined' ||
                promotion.images.length === 0
                  ? `background-image:url('/images/promotions/promotion_04.jpg')`
                  : `background-image:url('${promotion.images[0].path}')`
              "
              @click="redirectTo(promotion.url)"
            ></div>
            <div class="card-body">
              <h5
                class="promotion__title cursor__pointer"
                @click="redirectTo(promotion.url)"
              >
                {{ promotion.promotionName }}
              </h5>
              <span class="promotion__createtime"
                ><i class="material-icons mx-1 text__size--x09"> access_time </i
                >{{ $moment(promotion.createDate).format('YYYY-MM-DD') }}</span
              >
              <p class="promotion__list__intro">
                {{ promotion.promotionIntro }}
              </p>
              <vs-button
                :color="'#2d2430'"
                type="filled"
                class="px-3 py-2 border__radius--100"
                @click="redirectTo(promotion.url)"
                >Đọc thêm</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PromotionListComponent',
  data: () => ({
    promotionList: [],
  }),
  mounted() {
    this.getPromotionList();
  },
  methods: {
    getPromotionList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/promotionapi/`)
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
      this.$router.replace(`khuyen-mai/${url}`);
    },
  },
};
</script>
<style lang="scss">
.promotion__list_img {
  background-image: url('/images/bg/background_01.jpg');
  background-size: cover;
  min-height: 450px;
  background-position: center;
  background-repeat: no-repeat;
}
.promotion__image {
  background-image: url('/images/promotions/promotion_01.jpg');
  background-size: cover;
  min-height: 250px;
  background-position: center;
  background-repeat: no-repeat;
}
.promotion__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: $primary__text;
  margin-bottom: 0.8rem;
}
.promotion__createtime {
  font-size: 0.8rem;
  color: $muted__text;
  margin-bottom: 0.8rem;
}
.promotion__list__intro {
  font-size: 0.9rem;
  height: 3.9rem;
  color: $three__color;
  overflow: hidden;
}
.promotion__item:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
