<template>
  <div class="product__detail__component">
    <div class="product__overview container">
      <div class="row mp--none">
        <div class="col-12 col-md-6 mp--none">
          <div class="row mp--none">
            <div class="col-4 mp--none image__list">
              <div class="image__list__item"></div>
              <div class="image__list__item"></div>
              <div class="image__list__item"></div>
            </div>
            <div class="col-8 mp--none main__image">
              <div class="image__item"></div>
              <div class="image__action">
                <vs-button
                  :color="'#156867'"
                  type="fill"
                  icon="aspect_ratio"
                  class="border__radius--none"
                ></vs-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mp--none">
          <div class="row mp--none px-4">
            <div class="col-12 mp--none my-2">
              <h4 class="data__title">{{ productDetail.productName }}</h4>
            </div>
            <div class="col-12 mp--none my-2">
              <h4 class="data__price">
                {{
                  new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0
                  }).format(productDetail.price)
                }}
              </h4>
              <span class="discount__price">{{
                new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(productDetail.oldPrice)
              }}</span>
            </div>
            <div class="col-12 mp--none my-2">
              <span class="label__overview">Kích thước</span>
              <span class="data__overview mx-2">{{ productDetail.size }}</span>
            </div>
            <div class="col-12 mp--none my-2 d-flex align-items-center">
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
            <div class="col-12 mp--none my-2">
              <span class="label__overview">Chất liệu</span>
              <span class="data__overview mx-2"
                >{{ productDetail.productFrameMaterial }} /
                {{ productDetail.productFrontMaterial }}</span
              >
            </div>
            <div class="col-12 mp--none my-2">
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
        <div class="row mp--none">
          <div class="col-12 mp--none">
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
                  <div class="row mp--none">
                    <div class="col-12 col-md-6 mp--none p-2 comment__list">
                      <div class="my-4 comment__item">
                        <img
                          src="/images/user.png"
                          alt=""
                          class="comment__logo"
                        />
                        <div class="comment__content">
                          <p class="mp--none px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="mp--none px-2 text__size--x09">
                            San pham cua cac ban rat tot, chung toi ung ho cac
                            ban
                          </p>
                          <p class="mp--none px-2 text__size--x07 text-muted">
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
                          <p class="mp--none px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="mp--none px-2 text__size--x09">
                            Mẫu mã đẹp, giao hàng và lắp ráp cẩn thận
                          </p>
                          <p class="mp--none px-2 text__size--x07 text-muted">
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
                          <p class="mp--none px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="mp--none px-2 text__size--x09">
                            Sản phẩm khá chất lượng, tư vấn nhiệt tình
                          </p>
                          <p class="mp--none px-2 text__size--x07 text-muted">
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
                          <p class="mp--none px-2 text__size--x07 text-muted">
                            2019-26-07
                          </p>
                          <p class="mp--none px-2 text__size--x09">
                            Giá cả tốt
                          </p>
                          <p class="mp--none px-2 text__size--x07 text-muted">
                            Sam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 mp--none comment__form  p-2">
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
  </div>
</template>
<script>
export default {
  data: () => ({
    comment: {
      fullName: '',
      email: '',
      phoneNumber: ''
    },
    productDetail: {}
  }),
  mounted() {
    this.getProductDetail()
  },
  methods: {
    getProductDetail() {
      this.$vs.loading()
      if (this.$route.params.id.length > 0) {
        this.$axios
          .get(
            `${process.env.API_HTTP}/api/productapi/single-product-by-url/${this.$route.params.id}`
          )
          .then((response) => {
            this.productDetail = response.data
            this.$vs.loading.close()
          })
          .catch((error) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Opps!',
              text: error
            })
          })
          .finally(() => {
            this.$vs.loading.close()
          })
      } else {
        this.$axios
          .get(`${process.env.API_HTTP}/api/productapi/single-product-by-url`)
          .then((response) => {
            this.productDetail = response.data
            this.$vs.loading.close()
          })
          .catch((error) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Opps!',
              text: error
            })
          })
          .finally(() => {
            this.$vs.loading.close()
          })
      }
    }
  }
}
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
</style>
