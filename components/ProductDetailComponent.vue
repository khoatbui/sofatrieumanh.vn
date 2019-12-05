<template>
  <div class="product__detail__component">
    <div class="product__overview container">
      <div class="row m-0 p-0">
        <div class="col-12 col-md-6 m-0 p-0">
          <div class="row m-0 p-0">
            <!-- <div class="col-4 m-0 p-0 image__list">
              <div
                v-for="(img, i) in productDetail.images"
                :key="i + 'subimage'"
              >
                <div
                  :style="
                    `background-image: url('${
                      typeof img.path !== 'undefined'
                        ? img.path
                        : '/images/product/pro_01.jpg'
                    }')`
                  "
                  class="image__list__item"
                ></div>
              </div>
            </div> -->
            <div class="col-12 m-0 p-0 main__image">
              <div
                class="image__item"
                :style="
                  `background-image: url('${
                    typeof productDetail.images !== 'undefined' &&
                    productDetail.images.length > 0
                      ? productDetail.images[0].path
                      : '/images/product/pro_01.jpg'
                  }')`
                "
              ></div>
              <!-- <div class="pic-box">
                <pic-zoom
                  :url="
                    typeof productDetail.images !== 'undefined' &&
                    productDetail.images.length > 0
                      ? productDetail.images[0].path
                      : '/images/product/pro_01.jpg'
                  "
                  :scale="3"
                ></pic-zoom>
              </div> -->
              <div class="image__action">
                <vs-button
                  v-b-modal.modal-1
                  :color="'#156867'"
                  type="fill"
                  icon="aspect_ratio"
                  class="border__radius--none"
                  @click="popupActivo4 = true"
                ></vs-button>
              </div>
            </div>
            <div class="col-12 m-0 p-0">
              <div class="image__list">
                <div
                  v-for="(img, i) in 5"
                  :key="i + 'subimage'"
                  :style="
                    `background-image: url('${
                      typeof img.path !== 'undefined'
                        ? '/images/product/alexander-mcqueen_200x260.jpg'
                        : '/images/product/alexander-mcqueen_200x260.jpg'
                    }')`
                  "
                  class="image__list__item"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <video width="320" height="240" controls>
            <source
              src="https://www.youtube.com/watch?v=psgdsIdECjA"
              type="video/mp4"
            />
            <source
              src="https://www.youtube.com/watch?v=psgdsIdECjA"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </div> -->
        <div class="col-12 col-md-6 m-0 p-0">
          <div class="row m-0 p-0 px-4">
            <div class="col-12 m-0 p-0 my-2">
              <h4 class="data__title">{{ productDetail.productName }}</h4>
            </div>
            <div class="col-12 m-0 p-0 my-2">
              <h4 class="data__price">
                {{
                  new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  }).format(productDetail.price)
                }}
              </h4>
              <span class="discount__price">{{
                new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0,
                }).format(productDetail.oldPrice)
              }}</span>
            </div>
            <div class="col-12 m-0 p-0 my-2">
              <span class="label__overview">Kích thước</span>
              <span class="data__overview mx-2">{{ productDetail.size }}</span>
            </div>
            <div class="col-12 m-0 p-0 my-2 d-flex align-items-center">
              <span class=" d-flex align-items-center">
                <vs-button
                  :color="'#156867'"
                  type="flat"
                  icon="remove"
                  class="plus__btn"
                ></vs-button>
                <span class="px-2 font-weight-bold text__size--x12">1</span>
                <vs-button
                  :color="'#156867'"
                  type="flat"
                  icon="add"
                  class="plus__btn"
                ></vs-button>
              </span>
              <vs-button
                :color="'#156867'"
                type="filled"
                class="border__radius--none"
                >Thêm vào giỏ hàng</vs-button
              >
            </div>
            <div
              class="col-12 m-0 p-0 d-flex justify-content-start align-items-center py-4"
            >
              <div class="product__step__item">
                <img src="/images/steps/confirm.png" alt="" class="step__img" />
                <span class="step__title">Đặt hàng</span>
              </div>
              <div class="product__step__item">
                <img src="/images/steps/package.png" alt="" class="step__img" />
                <span class="step__title">Đóng gói</span>
              </div>
              <div class="product__step__item">
                <img
                  src="/images/steps/delivered.png"
                  alt=""
                  class="step__img"
                />
                <span class="step__title">Giao hàng</span>
              </div>
            </div>
            <div class="col-12 m-0 p-0 my-2">
              <span class="label__overview">Chất liệu</span>
              <span class="data__overview mx-2"
                >{{ productDetail.productFrameMaterial }} /
                {{ productDetail.productFrontMaterial }}</span
              >
            </div>
            <div class="col-12 m-0 p-0 my-2">
              <span class="label__overview">Chia sẻ</span>
              <div class="data__overview mx-2">
                <vs-button
                  :color="'#4267B2'"
                  type="filled"
                  size="small"
                  class="px-2 py-1 share__btn"
                >
                  <img
                    src="/images/icon/facebook.png"
                    alt=""
                    class="share__img"
                  />
                  facebook</vs-button
                >
                <vs-button
                  :color="'#156867'"
                  type="filled"
                  size="small"
                  class="px-2 py-1 share__btn"
                  ><img
                    src="/images/icon/zalo.png"
                    alt=""
                    class="share__img"
                  />zalo</vs-button
                >
                <vs-button
                  :color="'#d92523'"
                  type="filled"
                  size="small"
                  icon="share"
                  class="px-2 py-1 share__btn"
                  >url</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product__detail">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-12 m-0 p-0">
            <vs-tabs :color="'#156867'">
              <vs-tab label="Mô tả">
                <div class="con-tab-ejemplo">
                  <div
                    class="product__content"
                    v-html="productDetail.content"
                  ></div>
                </div>
              </vs-tab>
              <vs-tab label="Đánh giá">
                <div class="con-tab-ejemplo">
                  <div class="row m-0 p-0">
                    <div class="col-12 col-md-6 m-0 p-0 p-2 comment__list">
                      <div class="my-4 comment__item">
                        <img
                          src="/images/user.png"
                          alt=""
                          class="comment__logo"
                        />
                        <div class="comment__content">
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x09">
                            San pham cua cac ban rat tot, chung toi ung ho cac
                            ban
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            Huy dung
                          </p>
                        </div>
                      </div>
                      <div class="my-4 comment__item">
                        <img
                          src="/images/user.png"
                          alt=""
                          class="comment__logo"
                        />
                        <div class="comment__content">
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x09">
                            Mẫu mã đẹp, giao hàng và lắp ráp cẩn thận
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            Minh Lanh
                          </p>
                        </div>
                      </div>
                      <div class="my-4 comment__item">
                        <img
                          src="/images/user.png"
                          alt=""
                          class="comment__logo"
                        />
                        <div class="comment__content">
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x09">
                            Sản phẩm khá chất lượng, tư vấn nhiệt tình
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            Nguyen THi My
                          </p>
                        </div>
                      </div>
                      <div class="my-4 comment__item">
                        <img
                          src="/images/user.png"
                          alt=""
                          class="comment__logo"
                        />
                        <div class="comment__content">
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x09">
                            Giá cả tốt
                          </p>
                          <p class="m-0 p-0 px-2 text__size--x07 text-muted">
                            Sam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 m-0 p-0 comment__form  p-2">
                      <vs-input
                        v-model="comment.fullName"
                        label="Name"
                        placeholder="John Carrick"
                        class="w-100 border__radius--none custom__input"
                      />
                      <vs-input
                        v-model="comment.email"
                        label="Email"
                        placeholder="yourmail@email.com"
                        class="w-100 border__radius--none custom__input"
                      />
                      <vs-input
                        v-model="comment.phoneNumber"
                        label="Phone number"
                        placeholder="+84 935-235-695"
                        class="w-100 border__radius--none custom__input"
                      />
                      <div class="custom__input">
                        <label for="icomment" class="label__input"
                          >Comment</label
                        >
                        <vs-textarea
                          id="icomment"
                          v-model="comment.comment"
                          class="w-100 comment__input"
                        />
                      </div>
                      <vs-button
                        :color="'#156867'"
                        type="filled"
                        class="px-4 py-2 border__radius--none"
                        >Send</vs-button
                      >
                    </div>
                  </div>
                </div>
              </vs-tab>
            </vs-tabs>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="popup">
      <vs-popup fullscreen title="fullscreen" :active.sync="popupActivo4">
        <Carousel3d
          :controls-visible="true"
          :controls-prev-html="'&#10092;'"
          :controls-next-html="'&#10093;'"
          :controls-width="30"
          :controls-height="60"
          :clickable="false"
          class="product__carousel3d"
        >
          <Slide v-for="(slide, i) in productDetail.images" :key="i" :index="i">
            <figure>
              <img :src="slide.path" />
            </figure>
          </Slide>
        </Carousel3d>
      </vs-popup>
    </div> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    comment: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
    productDetail: {},
    completedGetData: false,
    popupActivo4: false,
    images: {
      thumbs: [
        {
          id: 1,
          url: '/images/blogs/blog_01.jpg',
        },
        {
          id: 2,
          url: '/images/blogs/blog_02.jpg',
        },
      ],
      normal_size: [
        {
          id: 1,
          url: '/images/blogs/blog_01.jpg',
        },
        {
          id: 2,
          url: '/images/blogs/blog_02.jpg',
        },
      ],
      large_size: [
        {
          id: 1,
          url: '/images/blogs/blog_01.jpg',
        },
        {
          id: 2,
          url: '/images/blogs/blog_02.jpg',
        },
      ],
    },
    zoomerOptions: {
      zoomFactor: 3, // scale for zoomer
      pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
      hoverDelay: 300, // how long after the zoomer take effect
      namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
      move_by_click: false, // move image by click thumb image or by mouseover
      scroll_items: 5, // thumbs for scroll
      choosed_thumb_border_color: '#bbdefb', // choosed thumb border color
      scroller_button_style: 'line',
      scroller_position: 'left',
      zoomer_pane_position: 'right',
    },
  }),
  mounted() {
    this.getProductDetail();
  },
  methods: {
    showCarousel3d() {
      this.$vs.loading();
      setTimeout(() => {
        this.$vs.loading.close();
      }, 2000);
    },
    getProductDetail() {
      this.$vs.loading();
      if (this.$route.params.id.length > 0) {
        this.$axios
          .get(
            `${process.env.API_HTTP}/productapi/single-product-by-url/${this.$route.params.id}`
          )
          .then(response => {
            this.productDetail = response.data;
            this.$vs.loading.close();
            this.completedGetData = true;
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
      } else {
        this.$axios
          .get(`${process.env.API_HTTP}/productapi/single-product-by-url`)
          .then(response => {
            this.productDetail = response.data;
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
      }
    },
  },
};
</script>
<style lang="scss">
.image__item {
  background-image: url('/images/product/pro_01.jpg');
  min-height: 300px;
  background-size: cover;
  background-position: center;
}
.image__list__item {
  background-image: url('/images/product/pro_02.jpg');
  min-height: 90px;
  background-size: cover;
  background-position: center;
}
.image__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1.6rem;
}
.main__image {
  position: relative;
}
.image__action {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  background-color: transparent;
}
.product__detail .vs-tabs-position-bottom .vs-tabs--ul,
.vs-tabs-position-top .vs-tabs--ul {
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: $primary__color;
  margin-bottom: 0 !important;
}
.product__detail {
  margin-top: 4rem;
  padding: 4rem 0;
  background-color: $vote__bg__color;
}
.product__detail .vs-tabs--ul {
  box-shadow: none;
}
.product__detail .vs-tabs--li span {
  font-weight: bold;
}
.product__detail .vs-tabs--li.activeChild span {
  color: $primary__color;
}
.product__detail .vs-tabs--btn {
  outline: none;
}
.comment__form .vs-input--input {
  border-radius: 0 !important;
}
.comment__form .vs-input--label {
  font-weight: bold;
}
.comment__input {
  background-color: $white__color;
  border-radius: 0 !important;
}
.label__input {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
}
.label__overview {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
}
.data__overview {
  font-size: 1rem;
  color: $primary__color;
  display: flex;
}
.data__title {
  font-size: 1.5rem;
  color: $primary__color;
  font-weight: bold;
}
.data__price {
  color: $danger__color;
  font-size: 1.9rem;
  font-weight: bold;
}
.custom__input {
  margin: 0.4rem 0;
}
.custom__input input {
  background-color: $white__color;
}
.comment__logo {
  height: 50px;
}
.comment__item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
}
.plus__btn button {
  display: flex;
  align-items: center;
}
.share__btn {
  margin: 0;
  margin-right: 0.2rem;
  border-radius: 0 !important;
}
.share__img {
  height: 25px;
}
.product__detail__component .discount__price {
  color: $promotion__bg__color;
}
.product__detail__component .discount__price {
  margin: 0 0.4rem;
  text-decoration: line-through;
  font-weight: bold;
}
.pic-box {
  width: 100%;
}
.mouse-cover-canvas {
  position: fixed !important;
  left: 50%;
  top: 50%;
  transform: translate(10%, 10%);
}
.product__carousel3d img {
  width: 200%;
}
.carousel-3d-slide.current {
  visibility: visible !important;
}
.carousel-3d-slide {
  min-width: 300px !important;
}
.product__step__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1.2rem;
}
.image__list {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}
.image__list__item {
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center;
}
.image__list__item:hover {
  border: 1px solid $danger__color;
}
</style>
