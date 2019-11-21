<template>
  <div class="topproduct__component">
    <div class="row mp--none mb-4">
      <div class="col-12 text-center">
        <h6 class="component__title">Top sản phẩm</h6>
        <p class="component__intro">
          Danh sách các sản phẩm hot nhất của SofaTrieuManh
        </p>
      </div>
    </div>
    <div class="row mp--none">
      <div class="col-12 mp--none">
        <vs-tabs
          v-model="activeTab"
          alignment="center"
          class="product__tab"
          color="#333333"
        >
          <vs-tab label="Sản phẩm hot">
            <div class="row mp--none">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3"
              >
                <div class="card border-0 product__card">
                  <div class="card-body mp--none p-2">
                    <div
                      class="product__image"
                      :style="
                        typeof pro.images === 'undefined' ||
                        pro.images.length === 0
                          ? `background-image:url('/images/product/1-01.jpg')`
                          : `background-image:url('${pro.images[0].path}')`
                      "
                    >
                      <div class="product__property">
                        <span v-if="pro.isHot" class="custom__badge custom__hot"
                          >Hot</span
                        >
                        <span
                          v-if="pro.isNewProduct"
                          class="custom__badge custom__new"
                          >Sản phẩm mới</span
                        >
                        <span
                          v-if="pro.isSaleOff"
                          class="custom__badge custom__saleoff"
                          >SaleOff</span
                        >
                      </div>
                      <div class="product__action animated flipInX">
                        <vs-button
                          color="#333333"
                          type="flat"
                          class="py-1 px-2 addtocart__btn"
                          :to="`/san-pham/${pro.url}`"
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
                        {{ pro.productName }}
                      </div>
                      <div class="product__item__detail my-2">
                        <strong class="product__price"
                          >{{ pro.price }} vnd</strong
                        >
                        <span class="product__star">
                          <i
                            v-for="i in pro.star"
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
          </vs-tab>
          <vs-tab label="Sản phẩm mới">
            <div class="row mp--none">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3"
              >
                <div class="card border-0 product__card">
                  <div class="card-body mp--none p-2">
                    <div
                      class="product__image"
                      :style="
                        typeof pro.images === 'undefined' ||
                        pro.images.length === 0
                          ? `background-image:url('/images/product/1-01.jpg')`
                          : `background-image:url('${pro.images[0].path}')`
                      "
                    >
                      <div class="product__property">
                        <span v-if="pro.isHot" class="custom__badge custom__hot"
                          >Hot</span
                        >
                        <span
                          v-if="pro.isNewProduct"
                          class="custom__badge custom__new"
                          >Sản phẩm mới</span
                        >
                        <span
                          v-if="pro.isSaleOff"
                          class="custom__badge custom__saleoff"
                          >SaleOff</span
                        >
                      </div>
                      <div class="product__action animated flipInX">
                        <vs-button
                          color="#333333"
                          type="flat"
                          class="py-1 px-2 addtocart__btn"
                          to="/san-pham"
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
                        {{ pro.productName }}
                      </div>
                      <div class="product__item__detail my-2">
                        <strong class="product__price"
                          >{{ pro.price }} vnd</strong
                        >
                        <span class="product__star">
                          <i
                            v-for="i in pro.star"
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
          </vs-tab>
          <vs-tab label="Khuyến mại nhiều nhất">
            <div class="row mp--none">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3"
              >
                <div class="card border-0 product__card">
                  <div class="card-body mp--none p-2">
                    <div
                      class="product__image"
                      :style="
                        typeof pro.images === 'undefined' ||
                        pro.images.length === 0
                          ? `background-image:url('/images/product/1-01.jpg')`
                          : `background-image:url('${pro.images[0].path}')`
                      "
                    >
                      <div class="product__property">
                        <span v-if="pro.isHot" class="custom__badge custom__hot"
                          >Hot</span
                        >
                        <span
                          v-if="pro.isNewProduct"
                          class="custom__badge custom__new"
                          >Sản phẩm mới</span
                        >
                        <span
                          v-if="pro.isSaleOff"
                          class="custom__badge custom__saleoff"
                          >SaleOff</span
                        >
                      </div>
                      <div class="product__action animated flipInX">
                        <vs-button
                          color="#333333"
                          type="flat"
                          class="py-1 px-2 addtocart__btn"
                          to="/san-pham"
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
                        {{ pro.productName }}
                      </div>
                      <div class="product__item__detail my-2">
                        <strong class="product__price"
                          >{{ pro.price }} vnd</strong
                        >
                        <span class="product__star">
                          <i
                            v-for="i in pro.star"
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
          </vs-tab>
          <vs-tab label="Sản phẩm trend">
            <div class="row mp--none">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3"
              >
                <div class="card border-0 product__card">
                  <div class="card-body mp--none p-2">
                    <div
                      class="product__image"
                      :style="
                        typeof pro.images === 'undefined' ||
                        pro.images.length === 0
                          ? `background-image:url('/images/product/1-01.jpg')`
                          : `background-image:url('${pro.images[0].path}')`
                      "
                    >
                      <div class="product__property">
                        <span v-if="pro.isHot" class="custom__badge custom__hot"
                          >Hot</span
                        >
                        <span
                          v-if="pro.isNewProduct"
                          class="custom__badge custom__new"
                          >Sản phẩm mới</span
                        >
                        <span
                          v-if="pro.isSaleOff"
                          class="custom__badge custom__saleoff"
                          >SaleOff</span
                        >
                      </div>
                      <div class="product__action animated flipInX">
                        <vs-button
                          color="#333333"
                          type="flat"
                          class="py-1 px-2 addtocart__btn"
                          to="/san-pham"
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
                        {{ pro.productName }}
                      </div>
                      <div class="product__item__detail my-2">
                        <strong class="product__price"
                          >{{ pro.price }} vnd</strong
                        >
                        <span class="product__star">
                          <i
                            v-for="i in pro.star"
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
          </vs-tab>
        </vs-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeTab: 0,
    productList: [
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        property: 'Saleoff',
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        property: 'New',
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        property: 'Saleoff',
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        property: 'Hot',
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        property: 'Saleoff',
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        property: 'Saleoff',
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        property: 'Hot',
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
      {
        productName: 'Sofa cao cap TBK001',
        productImage: '/images/product/1-01.jpg',
        price: 23000000,
        star: 4,
        isHot: true,
        isSaleOff: false,
        isNewProduct: true,
      },
    ],
  }),
  watch: {
    activeTab(newVal) {
      if (newVal === 0) {
        this.getTopProductComponent('hot');
      } else if (newVal === 1) {
        this.getTopProductComponent('new');
      } else if (newVal === 2) {
        this.getTopProductComponent('saleoff');
      } else {
        this.getTopProductComponent('trend');
      }
    },
  },
  mounted() {
    this.getTopProductComponent('hot');
  },
  methods: {
    getTopProductComponent(category) {
      this.$vs.loading();
      this.$axios
        .get(
          `${process.env.API_HTTP}/productapi/product-list-by-state/${category}`
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
    },
  },
};
</script>
<style lang="scss">
.product__tab .vs-tabs--li {
  font-weight: bold;
  margin: 0 0.8rem;
}
.product__tab .vs-tabs--li.activeChild {
  color: $primary__color !important;
}
.product__tab .vs-tabs--li.activeChild button {
  outline: none !important;
}
</style>
