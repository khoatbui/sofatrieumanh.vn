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
import RelatedProductComponent from '@/components/RelatedProductComponent.vue';
import PromotionListComponent from '@/components/PromotionListComponent.vue';
import RequestAdvisorComponent from '@/components/RequestAdvisorComponent.vue';
export default {
  layout: 'pagelayout',
  components: {
    RelatedProductComponent,
    PromotionListComponent,
    RequestAdvisorComponent,
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
