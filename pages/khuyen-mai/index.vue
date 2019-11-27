<template>
  <div class="promotions__page">
    <div class="section__margin--b">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
          <PromotionListComponent />
        </div>
      </div>
    </div>
    <div class="section__margin">
      <RequestAdvisorComponent />
    </div>
    <RelatedProductComponent :category="[]" class="section__margin" />
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  components: {
    RelatedProductComponent: () =>
      import('@/components/RelatedProductComponent'),
    PromotionListComponent: () => import('@/components/PromotionListComponent'),
    RequestAdvisorComponent: () =>
      import('@/components/RequestAdvisorComponent'),
  },
  data: () => ({}),
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
