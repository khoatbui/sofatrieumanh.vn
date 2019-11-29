<template>
  <div class="product__page">
    <div class="row m-0 p-0">
      <div class="col-12 m-0 p-0 p-0">
        <ProductDetailComponent @categoryDate="updateCategory" />
      </div>
    </div>
    <div class="section__margin--y">
      <RequestAdvisorComponent />
    </div>
    <RelatedProductComponent
      class="section__margin--y"
      :category="categoryList"
    />
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  components: {
    RelatedProductComponent: () =>
      import('@/components/RelatedProductComponent'),
    ProductDetailComponent: () =>
      import('@/components/v.2/ProductDetailComponent'),
    RequestAdvisorComponent: () =>
      import('@/components/RequestAdvisorComponent'),
  },
  data: () => ({
    categoryList: [],
    productDetail: {},
  }),
  computed: {
    getKeyword() {
      if (
        typeof this.productDetail.tags !== 'undefined' &&
        this.productDetail.tags.length > 0
      ) {
        return this.productDetail.tags.join();
      }
      return 'sofatrieumanh,sofa,sofa cao cấp';
    },
  },
  head() {
    return {
      title: this.productDetail.productName,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'name',
          name: 'name',
          content: 'sofatrieumanh.com',
        },
        {
          hid: 'description',
          name: 'description',
          content: this.productDetail.productIntro,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getKeyword,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.productDetail.productIntro,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.productDetail.productName,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'sofatrieumanh.com',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `http://sofatrieumanh.com/san-pham/${this.productDetail.url}`,
        },

        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `http://sofatrieumanh.com/san-pham/${this.productDetail.url}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.productDetail.productName,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.productDetail.productIntro,
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: 'sofatrieumanh.com',
        },
      ],
    };
  },
  methods: {
    updateCategory(variable) {
      this.categoryList = variable.category;
      this.productDetail = variable;
    },
  },
};
</script>
<style lang="scss"></style>
