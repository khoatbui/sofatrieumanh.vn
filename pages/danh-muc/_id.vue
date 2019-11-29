<template>
  <div class="danhmuc__page">
    <section>
      <ProductListComponent @categoryEmit="updateCategory" />
    </section>
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  components: {
    ProductListComponent: () => import('@/components/v.2/ProductListComponent'),
  },
  data: () => ({
    categoryDetail: {},
  }),

  head() {
    return {
      title: this.categoryDetail.menuName,
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
          content: this.categoryDetail.menuIntro,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.categoryDetail.menuIntro,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.categoryDetail.menuIntro,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.categoryDetail.menuName,
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
          content: `http://sofatrieumanh.com/san-pham/${this.categoryDetail.url}`,
        },

        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `http://sofatrieumanh.com/san-pham/${this.categoryDetail.url}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.categoryDetail.menuName,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.categoryDetail.menuIntro,
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
      this.categoryDetail = variable;
    },
  },
};
</script>
