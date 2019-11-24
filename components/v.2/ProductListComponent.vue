<template>
  <div class="productlist__component">
    <div class="row mp--none category__component m-0 p-0 w-100">
      <div class="product__list__image__src">
        <div
          class="category__info w-100 d-flex justify-content-center align-items-center flex-column"
        >
          <h1 class="category__name">{{ categoryDetail.menuName }}</h1>
          <nuxt-link to="/" class="category__action"
            ><i class="material-icons">
              keyboard_backspace
            </i>
            Quay lại</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="container mt-4 pt-4">
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
                          <span class="category__item__name"
                            >Sofa hien dai</span
                          >
                          <span class="category__item__qty">10</span>
                        </li>
                        <li class="category__item">
                          <span class="category__item__name"
                            >San pham khac</span
                          >
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
                          <vs-checkbox
                            v-model="filter.material"
                            :vs-value="'GO'"
                            >Gỗ</vs-checkbox
                          >
                        </li>
                        <li class="filter__item">
                          <vs-checkbox
                            v-model="filter.material"
                            :vs-value="'DA'"
                            >Da</vs-checkbox
                          >
                        </li>
                        <li class="filter__item">
                          <vs-checkbox
                            v-model="filter.material"
                            :vs-value="'GOEP'"
                            >Gỗ ép</vs-checkbox
                          >
                        </li>
                        <li class="filter__item">
                          <vs-checkbox
                            v-model="filter.material"
                            :vs-value="'SAT'"
                            >Sắt</vs-checkbox
                          >
                        </li>
                        <li class="filter__item">
                          <vs-checkbox
                            v-model="filter.material"
                            :vs-value="'KINH'"
                            >Gỗ</vs-checkbox
                          >
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
                <div class="filter__block">
                  <div class="row mp--none">
                    <div class="col-12 mp--none">
                      <h6 class="filter__title">Tag</h6>
                    </div>
                  </div>
                  <div class="row mp--none">
                    <div class="col-12 mp--none">
                      <ul class="filter__list">
                        <li class="filter__item py-4">
                          <span class="tag__badge">Sofa</span>
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
            <div class="row mp--none w-100">
              <div
                v-for="(product, index) in productList"
                :key="index + 'product'"
                class="col-12 col-sm-6 col-md-4 col-lg-4"
              >
                <div class="card border-0 product__card cursor--pointer">
                  <div class="card-body mp--none p-2">
                    <div
                      class="product__image"
                      :style="
                        `background-image:url('${product.images[0].path}')`
                      "
                      @click="redirectTo(product.url)"
                    >
                      <div class="product__property">
                        <span
                          v-if="product.isHot"
                          class="custom__badge custom__hot"
                          >Hot</span
                        >
                        <span
                          v-if="product.isNewProduct"
                          class="custom__badge custom__new"
                          >Sản phẩm mới</span
                        >
                        <span
                          v-if="product.isSaleOff"
                          class="custom__badgecustom__saleoff"
                          >SaleOff</span
                        >
                      </div>
                      <div class="product__action animated flipInX">
                        <vs-button
                          color="#333333"
                          type="flat"
                          class="py-1 px-2 addtocart__btn"
                          :to="`/san-pham/${product.url}`"
                          >CHỌN MUA</vs-button
                        >
                        <div>
                          <vs-button
                            color="#333333"
                            type="flat"
                            class="py-1 px-2"
                            ><i class="material-icons">
                              favorite_border
                            </i></vs-button
                          >
                          <vs-button
                            color="#333333"
                            type="flat"
                            class="py-1 px-2"
                            ><i class="material-icons">
                              compare_arrows
                            </i></vs-button
                          >
                        </div>
                      </div>
                    </div>
                    <div class="product__info">
                      <div class="product__name my-2">
                        {{ product.productName }}
                      </div>
                      <div class="product__detail my-2">
                        <strong class="product__price"
                          ><span class="current__price">{{
                            product.price == '' ||
                            typeof product.price == 'undefined'
                              ? 'Liên hệ'
                              : new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                  minimumFractionDigits: 0,
                                })
                                  .format(product.price)
                                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                          }}</span>
                          <span
                            v-if="
                              product.oldPrice !== '' &&
                                typeof product.oldPrice !== 'undefined'
                            "
                            class="discount__price"
                            >{{
                              new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                                minimumFractionDigits: 0,
                              })
                                .format(product.oldPrice)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '.')
                            }}</span
                          >
                        </strong>
                        <span class="product__star">
                          <i
                            v-for="i in product.star"
                            :key="i"
                            class="material-icons"
                          >
                            star_border
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
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
                      <li
                        v-for="(cte, index) in categoryList"
                        :key="index + 'ctae'"
                        class="category__item"
                      >
                        <nuxt-link :to="`/danh-muc/${cte.url}`"
                          ><span class="category__item__name">{{
                            cte.menuName
                          }}</span></nuxt-link
                        >
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
                        <vs-checkbox v-model="filter.material">Gỗ</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Da</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material"
                          >Gỗ ép</vs-checkbox
                        >
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Sắt</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Gỗ</vs-checkbox>
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
                        <vs-checkbox v-model="filter.material">Gỗ</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Da</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material"
                          >Gỗ ép</vs-checkbox
                        >
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Sắt</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Gỗ</vs-checkbox>
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
                        <vs-checkbox v-model="filter.material">Gỗ</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Da</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material"
                          >Gỗ ép</vs-checkbox
                        >
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Sắt</vs-checkbox>
                      </li>
                      <li class="filter__item">
                        <vs-checkbox v-model="filter.material">Gỗ</vs-checkbox>
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
    productList: [],
    filter: {
      price: [0, 3000000],
      tags: [],
      material: [],
    },
    categoryDetail: {},
    categoryList: [],
  }),
  watch: {
    $route(to, from) {
      // react to route changes...
      this.getProductList();
    },
  },
  mounted() {
    this.getProductList();
    this.GetCategoryList();
  },
  methods: {
    hideCategoryModal() {
      this.$refs['modal-category'].hide();
    },
    hideFilterModal() {
      this.$refs['modal-filter'].hide();
    },
    GetCategoryName() {
      if (this.$route.params.id.length > 0) {
        this.$axios
          .get(
            `${process.env.API_HTTP}/menuapi/single-menu-with-url/${this.$route.params.id}`
          )
          .then(response => {
            this.categoryDetail = response.data;
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
    GetCategoryList() {
      if (this.$route.params.id.length > 0) {
        this.$axios
          .get(`${process.env.API_HTTP}/menuapi/get-category-withurl/`)
          .then(response => {
            this.categoryList = response.data;
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
    getProductList() {
      this.$vs.loading();
      if (typeof this.$route.query.search !== 'undefined') {
        this.$axios
          .get(
            `${process.env.API_HTTP}/productapi/product-list-by-search/${this.$route.query.search}`
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
      } else if (this.$route.params.id.length > 0) {
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
// .category__component w-100 {
//   background-color: $secondary__color;
//   color: $white__color;
// }
.category__info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.category__info h1,
.category__info a {
  color: $white__color !important;
}
.product__list__image__src {
  background-image: url('/images/banner/banner_01.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  position: relative;
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
  font-size: 0.9rem;
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
  font-size: 0.9rem !important;
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
.border__primary {
  border: 1px solid $primary__text;
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
.product__card {
  transition-duration: 1s;
}
.product__card:hover {
  transform: translateY(-5px);
}
.product__card:left {
  transform: translateY(5px);
}
.product__property {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
}
.product__image:hover .product__action,
.product__image:focus .product__action {
  display: flex;
}
.product__action {
  display: none;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $white__color !important;
  padding: 0.8rem;
}
.product__action button {
  font-size: 0.8rem;
}
.addtocart__btn {
  font-weight: 600;
  background-color: $white__color !important;
}
.product__action button:hover {
  background-color: $white__color !important;
  color: $primary__color !important;
}
.product__action i {
  font-size: 1rem;
}
.product__info {
  margin: 1.6rem 0;
}
.product__image {
  position: relative;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.product__name {
  color: $primary__text;
  font-size: 0.9rem;
}
.product__detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}
.product__price {
  font-size: 0.9rem;
}
.current__price {
  color: $danger__text;
}
.discount__price {
  color: $primary__text__color;
  text-decoration: line-through;
}
.product__star {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.product__star i {
  font-size: 1rem !important;
  color: $warning__text;
}
.con-vs-slider {
  min-width: auto !important;
}
.tag__badge {
  background-color: $white__color;
  border: 1px solid $secondary__color;
  border-radius: 100px;
  padding: 0.4rem 0.8rem;
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .filter__component {
    display: none;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .filter__component {
    display: block;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .filter__component {
    display: block;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .filter__component {
    display: block;
  }
}
</style>
