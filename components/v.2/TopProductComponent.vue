<template>
  <div class="topproduct__component">
    <div class="row m-0 p-0 mb-4">
      <div class="col-12 text-center">
        <h6 class="component__title">Top sản phẩm</h6>
        <p class="component__intro">
          Danh sách các sản phẩm hot nhất của SofaTrieuManh
        </p>
      </div>
    </div>
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0">
        <vs-tabs
          v-model="activeTab"
          alignment="center"
          class="product__tab"
          color="#333333"
        >
          <vs-tab label="Sản phẩm hot">
            <div class="row m-0 p-0">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3 m-0 p-0"
              >
                <ProductItemComponent :product="pro" />
              </div>
            </div>
          </vs-tab>
          <vs-tab label="Sản phẩm mới">
            <div class="row m-0 p-0">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3 p-0"
              >
                <ProductItemComponent :product="pro" />
              </div>
            </div>
          </vs-tab>
          <vs-tab label="Khuyến mại nhiều nhất">
            <div class="row m-0 p-0">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3"
              >
                <ProductItemComponent :product="pro" />
              </div>
            </div>
          </vs-tab>
          <vs-tab label="Sản phẩm trend">
            <div class="row m-0 p-0">
              <div
                v-for="(pro, ist) in productList"
                :key="ist + 'prod'"
                class="col-12 col-sm-6 col-md-3 col-lg-3"
              >
                <ProductItemComponent :product="pro" />
              </div>
            </div>
          </vs-tab>
        </vs-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItemComponent from '@/components/v.2/ProductItemComponent';
export default {
  components: {
    ProductItemComponent,
  },
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
.ul-tabs.vs-tabs--ul.ul-tabs-center {
  flex-wrap: wrap;
}
.product__tab .vs-tabs--li {
  white-space: nowrap;
}
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
