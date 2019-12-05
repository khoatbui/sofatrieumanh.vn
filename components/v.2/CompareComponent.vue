<template>
  <div class="compare__component">
    <div class="compare__popup__container">
      <vs-popup
        class="compare__popup"
        title="So sánh sản phẩm"
        :active.sync="showHideModal"
        button-close-hidden
        fullscreen
      >
        <div class="row mp--none">
          <div class="col-12 mp--none">
            <client-only v-if="showHideModal">
              <carousel
                :responsive="{
                  0: { items: 1, nav: false },
                  600: { items: 2, nav: false },
                  900: { items: 3, nav: false },
                }"
                :dots="false"
                :autoplay="false"
                :loop="true"
              >
                <div
                  v-for="(pro, index) in getProductList"
                  :key="index + 'prods'"
                  class="card compare__item m-2 position-relative"
                >
                  <div class="card-body">
                    <div class="compare__remove__action">
                      <vs-button
                        color="danger"
                        type="flat"
                        icon="close"
                        class="shadow"
                        @click="removeCompareItem(pro, $event)"
                      ></vs-button>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div
                          class="compare__item__image"
                          :style="
                            `background-image:url('${pro.images[0].path}')`
                          "
                        ></div>
                      </div>
                      <div class="col-4">
                        <strong
                          class="compare__item__productname compare__item__info"
                          >Tên:</strong
                        >
                      </div>
                      <div class="col-8">
                        <span class="compare__item__value">{{
                          pro.productName
                        }}</span>
                      </div>
                      <div class="col-4">
                        <strong class="compare__item__price compare__item__info"
                          >Giá:</strong
                        >
                      </div>
                      <div class="col-8">
                        <span class="compare__item__value">{{
                          pro.price
                        }}</span>
                      </div>
                      <div class="col-4">
                        <strong
                          class="compare__item__oldprice compare__item__info"
                          >Giá gốc:</strong
                        >
                      </div>
                      <div class="col-8">
                        <span class="compare__item__value">{{
                          pro.oldPrice
                        }}</span>
                      </div>
                      <div class="col-4">
                        <strong class="compare__item__front compare__item__info"
                          >Chất liệu bề mặt:</strong
                        >
                      </div>
                      <div class="col-8">
                        <span class="compare__item__value">{{
                          pro.productFrontMaterial
                        }}</span>
                      </div>
                      <div class="col-4">
                        <strong class="compare__item__frame compare__item__info"
                          >Chất liệu khung</strong
                        >
                      </div>
                      <div class="col-8">
                        <span class="compare__item__value">{{
                          pro.productFrameMaterial
                        }}</span>
                      </div>
                      <div class="col-4">
                        <strong class="compare__item__size compare__item__info"
                          >Kích thước</strong
                        >
                      </div>
                      <div class="col-8">
                        <span class="compare__item__value">{{ pro.size }}</span>
                      </div>
                      <div class="col-4">
                        <strong
                          class="compare__item__package compare__item__info"
                          >Đóng gói</strong
                        >
                      </div>
                      <div class="col-8">
                        <span class="compare__item__value">{{
                          pro.package
                        }}</span>
                      </div>
                      <div class="col-4">
                        <strong
                          class="compare__item__package compare__item__info"
                          >Đặc điểm</strong
                        >
                      </div>
                      <div class="col-8">
                        <p class="compare__item__value"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </carousel>
            </client-only>
          </div>
        </div>
        <div class="row pt-2 border-top">
          <div class="col-12 px-2 text-left">
            <vs-button
              color="warning"
              size="small"
              type="filled"
              @click="closeModal"
              >Đóng</vs-button
            >
          </div>
        </div>
        <div class="compare__close__modal">
          <vs-button
            color="danger"
            type="filled"
            icon="close"
            class="shadow"
            @click="closeModal"
          ></vs-button>
        </div>
      </vs-popup>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    showHideModal() {
      if (this.$store.state.compareItem.compareItem === 1) {
        return false;
      }
      return this.$store.state.compareItem.showModalCompare;
    },
    getProductList() {
      return this.$store.state.compareItem.compareList;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('compareItem/showModalCompareClick', false);
    },
    removeCompareItem(favo, event) {
      this.$store.commit('compareItem/removeCompareItemClick', favo);
      if (event) {
        event.preventDefault();
      }
    },
  },
};
</script>
<style lang="scss">
.compare__item__info,
.compare__item__value {
  white-space: nowrap;
}
.compare__item__image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
}
.compare__popup__container {
  position: relative;
}
.compare__remove__action,
.compare__close__modal {
  position: absolute;
  right: -0.1rem;
  top: -0.1rem;
  z-index: 1000;
}
</style>
