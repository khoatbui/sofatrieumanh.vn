<template>
  <div class="productlist__component">
    <div class="row mp--none category__component section__margin">
      <div
        class="col-12 col-md-10 mx-auto mp--none d-flex justify-content-center align-items-center flex-column"
      >
        <h1 class="category__name">Ghe sofa</h1>
        <p class="category__intro">
          Ở SofaTrieuManh – bạn sẽ không thể tìm được một bộ sofa giá rẻ hay
          những chương trình khuyến mãi hấp dẫn, thậm chí bạn cũng sẽ phải là
          một vị khách thật khó tính để “đòi hỏi” SofaTrieuManh cung cấp những
          thông tin hữu ích cho chiếc ghế sofa mà bạn lựa chọn… Bởi vì… ở
          SofaTrieuManh, bạn chỉ có thể nhận được một sản phẩm thật với giá trị
          thật mà thôi.
        </p>
        <nuxt-link to="/" class="category__action"
          ><i class="material-icons">
            keyboard_backspace
          </i>
          Quay lai</nuxt-link
        >
      </div>
    </div>
    <div class="row mp--none">
      <div class="col-0 col-md-4 col-lg-3 mp--none filter__component px-2">
        <div class="category__sidebar my-4">
          <div class="category__header">
            <h5 v-b-toggle.collapse-category>
              Danh mục sản phẩm
            </h5>
          </div>
          <b-collapse
            id="collapse-category"
            visible
            class="category__body mp--none"
          >
            <b-card class="border-0">
              <div class="category__block">
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <ul class="category__list">
                      <li class="category__item">
                        <span class="category__item__name">Ghe Sofa</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Ban Sofa</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Sofa don</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Sofa doi</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Sofa hien dai</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">San pham khac</span>
                        <span class="category__item__qty">10</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </div>
        <div class="filter__sidebar mt-4">
          <div class="filter__header">
            <h5 v-b-toggle.collapse-filter>
              Lọc sản phẩm

              <i class="material-icons">
                filter_list
              </i>
            </h5>
          </div>
          <b-collapse
            id="collapse-filter"
            visible
            class="filter__body mp--none"
          >
            <b-card class="border-0">
              <div class="filter__block">
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <h6 class="filter__title">Chất liệu</h6>
                  </div>
                </div>
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <ul class="filter__list">
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Da</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ ép</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Sắt</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="filter__block">
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <h6 class="filter__title">Giá</h6>
                  </div>
                </div>
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <ul class="filter__list">
                      <li class="filter__item py-4">
                        <vs-slider
                          v-model="filter.price"
                          :color="'#ffb400'"
                          step="1"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-9 mp--none product__component px-2">
        <div class="sort__component">
          <div class="breadcrumb__left">
            <ul class="breadcrumb__list">
              <li>Home</li>
              <li>Danh mục</li>
            </ul>
          </div>
          <div class="sort__right">
            <vs-dropdown vs-trigger-click>
              <a class="a-icon d-flex align-items-center" href="#">
                Sắp xếp
                <vs-icon class="" icon="expand_more"></vs-icon>
              </a>

              <vs-dropdown-menu>
                <vs-dropdown-item>
                  Gía cao đến thấp
                </vs-dropdown-item>
                <vs-dropdown-item>
                  Giá thấp đến cao
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  Phổ biến nhất
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  Đánh giá cao nhất
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </div>
        <div class="product__list">
          <div
            v-for="(product, index) in productList"
            :key="index + 'product'"
            class="card border-0 product__list__item cursor--pointer"
            @click="redirectTo(product.url)"
          >
            <div class="card-body p-1">
              <div
                class="product__list__item__img"
                :style="
                  `background-image: url('${
                    typeof product.images !== 'undefined' &&
                    product.images.length > 0
                      ? product.images[0].path
                      : '/images/product/pro_01.jpg'
                  }')`
                "
              >
                <div class="discount__tag"></div>
              </div>
              <div class="product__list__item__detail">
                <h6 class="product__list__item__name">
                  {{ product.productName }}
                </h6>
                <div class="product__list__item__price">
                  <span class="current__price">{{
                    new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                      minimumFractionDigits: 0,
                    }).format(product.price)
                  }}</span>
                  <span class="discount__price">{{
                    new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                      minimumFractionDigits: 0,
                    }).format(product.oldPrice)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile__filter__component">
      <vs-button
        v-b-modal.modal-category
        :color="'#ffa500'"
        type="filled"
        class="mobile__category__btn"
        >Danh muc<i class="material-icons">
          list
        </i></vs-button
      >
      <vs-button
        v-b-modal.modal-filter
        :color="'#ffa500'"
        type="filled"
        class="mobile__filter__btn"
        >Loc theo
        <i class="material-icons">
          filter_list
        </i></vs-button
      >
    </div>
    <div class="mobile__modal__filter">
      <b-modal
        id="modal-category"
        ref="modal-category"
        class="modal-category full__modal"
        hide-footer
        hide-header
      >
        <div class="modal__header__section">
          <div class="category__header">
            <h5>
              Danh sach san pham

              <i class="material-icons" @click="hideCategoryModal">
                close
              </i>
            </h5>
          </div>
        </div>
        <div class="modal__body__section">
          <div class="category__sidebar">
            <b-card class="border-0">
              <div class="category__block">
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <ul class="category__list">
                      <li class="category__item">
                        <span class="category__item__name">Ghe Sofa</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Ban Sofa</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Sofa don</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Sofa doi</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">Sofa hien dai</span>
                        <span class="category__item__qty">10</span>
                      </li>
                      <li class="category__item">
                        <span class="category__item__name">San pham khac</span>
                        <span class="category__item__qty">10</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
        </div>
        <div
          class="modal__action d-flex justify-content-end align-items-center"
        >
          <vs-button
            :color="'#156867'"
            size="small"
            class="border__radius--none mx-1"
            type="border"
            @click="hideCategoryModal"
            >Clear</vs-button
          >
          <vs-button
            :color="'#156867'"
            type="filled"
            size="small"
            class="border__radius--none fill__border mx-1"
            @click="hideCategoryModal"
            >Done</vs-button
          >
        </div>
      </b-modal>
      <b-modal
        id="modal-filter"
        ref="modal-filter"
        class="modal-filter full__modal"
        hide-footer
        hide-header
      >
        <div class="modal__header__section">
          <div class="filter__header">
            <h5>
              Loc san pham

              <i class="material-icons" @click="hideFilterModal">
                close
              </i>
            </h5>
          </div>
        </div>
        <div class="modal__body__section">
          <div class="filter__sidebar">
            <b-card class="border-0">
              <div class="filter__block">
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <h6 class="filter__title">Chat lieu</h6>
                  </div>
                </div>
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <ul class="filter__list">
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Da</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ ép</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Sắt</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="filter__block">
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <h6 class="filter__title">Chat lieu</h6>
                  </div>
                </div>
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <ul class="filter__list">
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Da</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ ép</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Sắt</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="filter__block">
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <h6 class="filter__title">Chat lieu</h6>
                  </div>
                </div>
                <div class="row mp--none">
                  <div class="col-12 mp--none">
                    <ul class="filter__list">
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Da</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ ép</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Sắt</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
        </div>
        <div
          class="modal__action d-flex justify-content-end align-items-center"
        >
          <vs-button
            :color="'#156867'"
            size="small"
            class="border__radius--none mx-1"
            type="border"
            @click="hideFilterModal"
            >Clear</vs-button
          >
          <vs-button
            :color="'#156867'"
            size="small"
            class="border__radius--none fill__border mx-1"
            type="filled"
            @click="hideFilterModal"
            >Done</vs-button
          >
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    checkBox1: false,
    productList: [],
    filter: {
      price: [0, 3000000],
    },
  }),
  mounted() {
    this.getProductList();
  },
  methods: {
    hideCategoryModal() {
      this.$refs['modal-category'].hide();
    },
    hideFilterModal() {
      this.$refs['modal-filter'].hide();
    },
    getProductList() {
      this.$vs.loading();
      if (this.$route.params.id.length > 0) {
        this.$axios
          .get(
            `${process.env.API_HTTP}/productapi/product-list-by-category/${this.$route.params.id}`
          )
          .then(response => {
            this.productList = response.data;
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
      } else {
        this.$axios
          .get(`${process.env.API_HTTP}/productapi/product-list`)
          .then(response => {
            this.productList = response.data;
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
    redirectTo(url) {
      this.$router.replace(`/san-pham/${url}`);
    },
  },
};
</script>
<style lang="scss">
// .category__component {
//   background-color: $secondary__color;
//   color: $white__color;
// }
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
.sort__component {
  padding-bottom: 0.8rem;
  border-bottom: 1px solid $primary__text;
  margin: 0 2%;
}
.sort__component {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.breadcrumb__list {
  display: flex;
  margin-bottom: 0 !important;
}
.breadcrumb__list li {
  list-style: none;
  color: $primary__text;
  margin: 0 0.8rem;
  position: relative;
}
.breadcrumb__list li::before {
  content: '';
  position: absolute;
  height: 70%;
  width: 1px;
  background-color: $primary__text;
  transform: rotate(20deg) translateY(20%);
  right: -0.8rem;
}
.breadcrumb__list li:last-child:before {
  display: none;
}
.breadcrumb__list li:first-child {
  margin-left: 0 !important;
}
.breadcrumb__list li:last-child {
  margin-right: 0 !important;
}
.sort__right,
.sort__right a {
  color: $primary__text;
}
.vs-dropdown--item-link {
  white-space: nowrap !important;
}
.filter__header,
.category__header {
  margin-bottom: 1.2rem;
}
.filter__header,
.filter__header h5,
.category__header,
.category__header h5 {
  font-size: 1.2rem;
  color: $primary__text !important;
  font-weight: bold !important;
  cursor: pointer;
}
.filter__header h5,
.category__header h5 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.filter__header h5::before,
.category__header h5::before {
  position: absolute;
  content: '';
  bottom: -0.4rem;
  left: 0;
  width: 40%;
  height: 4px;
  border-radius: 100px;
  background-color: $primary__text !important;
}
.filter__body,
.category__body {
  padding: 0.4rem;
}
.filter__body .card-body,
.category__body .card-body {
  padding: 0 !important;
}
.category__list,
.category__list li {
  list-style: none !important;
}
.category__item {
  padding: 0.4rem 0;
  border-bottom: 1px solid $muted__text;
  cursor: pointer;
}
.filter__title {
  color: $primary__text;
  font-weight: bold;
  font-size: 0.9rem;
}
.filter__title::before {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 40%;
  height: 1px;
  border-radius: 100px;
  background-color: $primary__text !important;
}
.filter__list {
  padding-left: 0.4rem;
}
.filter__list,
.filter__list li {
  list-style: none;
}
.filter__item {
  margin: 0.4rem 0;
}
.con-slot-label {
  color: $muted__text !important;
  font-size: 0.9rem !important;
}
.filter__item .vs-checkbox--check {
  background: $muted__text !important ;
  background-color: $muted__text !important ;
}
.filter__item .vs-checkbox-primary input:checked + .vs-checkbox {
  border: 2px solid $muted__text !important;
}
.filter__item .vs-checkbox--input:checked + .vs-checkbox .vs-icon {
  font-size: 0.9rem;
}
.filter__block {
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
}
.collapse {
  display: none;
}
.collapse.show {
  display: block;
}
.product__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.product__list__item {
  width: 98%;
  min-height: 250px;
  margin: 1%;
}
.product__list__item__img {
  background-image: url('/images/product/pro_01.jpg');
  min-height: 150px;
  background-size: cover;
  background-position: center;
}
.product__list__item__action {
  display: flex;
  justify-content: center;
  align-items: center;
}
.border__primary {
  border: 1px solid $primary__text;
}
.product__list__item__price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.product__list__item__name {
  color: $promotion__bg__color;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 0.4rem auto;
}
.product__list__item__detail {
  margin: 1.6rem 0;
}
.product__list__item__detail .current__price {
  font-size: 1.3rem;
  color: $danger__color !important;
}
.product__list__item__detail .discount__price {
  color: $promotion__bg__color;
}
.product__list__item__detail .discount__price,
.product__list__item__detail .current__price {
  margin: 0 0.4rem;
}
.product__list__item__img--04 {
  background-image: url('/images/product/pro_04.jpg');
}
.product__list__item__img--02 {
  background-image: url('/images/product/pro_02.jpg');
}
.product__list__item__img--03 {
  background-image: url('/images/product/pro_05.jpg');
}

.filter__component {
  display: none;
}
#modal-filter,
#modal-category {
  padding: 0 !important;
}
#modal-filter___BV_modal_outer_,
#modal-category___BV_modal_outer_ {
  z-index: 10001 !important;
}
.mobile__filter__component {
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
.mobile__category__btn {
  border-radius: 0;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-right: 1px solid $white__color;
  outline: none !important;
}
.mobile__filter__btn {
  border-radius: 0;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left: 1px solid $white__color;
  margin-left: -1px;
  outline: none !important;
}
.mobile__filter__btn .vs-button-text,
.mobile__category__btn .vs-button-text {
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 0.9rem;
  white-space: nowrap;
}
.mobile__filter__btn .vs-button-text i,
.mobile__category__btn .vs-button-text i {
  font-size: 0.9rem;
  margin-left: 0.4rem;
}
#modal-category .modal-dialog,
#modal-filter .modal-dialog {
  margin: 0 !important;
  padding: 0 !important;
}
#modal-category .modal-content,
#modal-filter .modal-content {
  border: 0 !important;
  border-radius: 0 !important;
  min-height: 100vh;
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .product__list__item {
    width: 98%;
    min-height: 250px;
    margin: 1%;
  }
  .filter__component {
    display: none;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .product__list__item {
    width: 48%;
    min-height: 250px;
    margin: 1%;
  }
  .filter__component {
    display: block;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .product__list__item {
    width: 31%;
    min-height: 250px;
    margin: 1%;
  }
  .filter__component {
    display: block;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .product__list__item {
    width: 31%;
    min-height: 250px;
    margin: 1%;
  }
  .filter__component {
    display: block;
  }
}
</style>
