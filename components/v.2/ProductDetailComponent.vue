<template>
  <div class="product__detail__component">
    <div class="row m-0 p-0 category__component w-100">
      <div class="product__detail__image__src">
        <div
          class="category__info w-100 d-flex justify-content-center align-items-center flex-column"
        >
          <h1 class="category__name">Sản phẩm</h1>
          <nuxt-link to="/" class="category__action"
            ><i class="material-icons">
              keyboard_backspace
            </i>
            Quay lại</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="product__overview container section__margin--y">
      <div class="row m-0 p-0">
        <div class="col-12 col-md-6 m-0 p-0">
          <div class="row m-0 p-0">
            <div class="col-12 m-0 p-0 main__image">
              <client-only v-if="completedGetData">
                <GalleryImagesComponent :images="productDetail.images" />
              </client-only>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 m-0 p-0">
          <div class="row m-0 p-0 px-4">
            <div class="col-12 m-0 p-0 my-2">
              <h4 class="data__title">{{ productDetail.productName }}</h4>
            </div>
            <div
              class="col-12 m-0 p-0 my-2 mb-4 pb-4 d-flex justify-content-start align-items-center border-bottom"
            >
              <h4 class="data__price">
                {{
                  productDetail.price == '' ||
                  typeof productDetail.price == 'undefined'
                    ? 'Liên hệ'
                    : new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                        minimumFractionDigits: 0,
                      })
                        .format(productDetail.price)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                }}
              </h4>
              <span
                v-if="
                  productDetail.oldPrice !== '' &&
                    typeof productDetail.oldPrice !== 'undefined'
                "
                class="discount__price"
                >{{
                  new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                  })
                    .format(productDetail.oldPrice)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                }}</span
              >
            </div>
            <div class="col-12">
              <div class="row mp--none">
                <div class="col-5 col-md-3 m-0 p-0">
                  <span class="label__overview">Kích thước :</span>
                </div>
                <div class="col-7 col-md-9 m-0 p-0">
                  <span class="data__overview mx-2">{{
                    productDetail.size
                  }}</span>
                </div>
                <div class="col-5 col-md-3 m-0 p-0">
                  <span class="label__overview">Bề mặt :</span>
                </div>
                <div class="col-7 col-md-9 m-0 p-0">
                  <span class="data__overview mx-2">{{
                    productDetail.productFrontMaterial
                  }}</span>
                </div>
                <div class="col-5 col-md-3 m-0 p-0">
                  <span class="label__overview">Khung :</span>
                </div>
                <div class="col-7 col-md-9 m-0 p-0">
                  <span class="data__overview mx-2">{{
                    productDetail.productFrameMaterial
                  }}</span>
                </div>
                <div class="col-5 col-md-3 m-0 p-0">
                  <span class="label__overview">Sản phẩm gồm :</span>
                </div>
                <div class="col-7 col-md-9 m-0 p-0">
                  <span class="data__overview mx-2">{{
                    productDetail.package
                  }}</span>
                </div>
              </div>
            </div>

            <div class="col-12 m-0 p-0 my-4 d-flex align-items-center">
              <span class=" d-flex align-items-center mr-4">
                <button class="plus__btn">
                  <i class="material-icons">remove</i>
                </button>
                <span class="px-2 font-weight-bold text__size--x12">1</span>
                <button class="plus__btn">
                  <i class="material-icons">add</i>
                </button>
              </span>
              <vs-button
                :color="'#ffb400'"
                type="filled"
                class="border__radius--none addtocard__btn"
                >Thêm vào giỏ hàng</vs-button
              >
            </div>
            <div class="col-12 m-0 p-0 my-2 border-top">
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
                  :color="'#ffb400'"
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
            <vs-tabs class="product__tab" color="#333333">
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
                        :color="'#2d2430'"
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
  </div>
</template>
<script>
export default {
  components: {
    GalleryImagesComponent: () =>
      import('@/components/v.2/GalleryImagesComponent'),
  },
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
  computed: {},
  mounted() {
    this.getProductDetail();
  },
  methods: {
    imageDetail(product) {
      const imageItem = [];
      product.images.forEach((element, index) => {
        imageItem.push({
          id: index,
          url: element.path,
        });
      });
      return {
        thumbs: imageItem,
        normal_size: imageItem,
        large_size: imageItem,
      };
    },
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
            this.$emit('categoryDate', this.productDetail.category);
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
.product__tab .vs-tabs--li {
  font-weight: bold;
  margin: 0 0.85rem;
}
.product__tab .vs-tabs--li.activeChild {
  color: $primary__text !important;
}
.product__tab .vs-tabs--li.activeChild button {
  outline: none !important;
}
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
.product__detail .vs-tabs--ul {
  box-shadow: none;
}
.product__detail .vs-tabs--li span {
  font-weight: bold;
}
.product__detail .vs-tabs--li.activeChild span,
.vs-tabs--btn span {
  color: $primary__text;
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
  color: $muted__text;
  font-weight: bold;
}
.label__overview {
  font-size: 0.85rem;
  color: $muted__text;
}
.data__overview {
  font-size: 0.85rem;
  color: $muted__text;
  display: flex;
}
.data__title {
  font-size: 1.5rem;
  color: $primary__text;
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
  background-color: $white__color;
  border: none;
  color: $primary__text !important;
}
.plus__btn:hover,
.plus__btn:active,
.plus__btn:focus {
  background-color: $white__color !important;
  color: $primary__text !important;
  border: none !important;
  outline: none !important;
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

.product__detail__image__src {
  background-image: url('/images/banner/banner_03.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.category__name {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: $primary__text;
}
.category__intro {
  text-align: center;
}
.category__action {
  color: $primary__text !important;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  font-size: 1.2rem;
}
.category__action:hover {
  text-decoration: none !important;
}
.category__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: $muted__text;
  font-size: 0.9rem;
}
.step__img {
  height: 30px;
}
.step__title {
  font-size: 0.85rem;
  font-size: $muted__text;
}
.zoomer-control.responsive-image {
  width: 30px !important;
  height: 30px !important;
}
.product__content,
.product__content p,
.product__content span,
.product__content ul li,
.product__content ol li {
  font-size: 0.85rem;
  color: $muted__text;
}
.addtocard__btn {
  color: $primary__text;
}
</style>
