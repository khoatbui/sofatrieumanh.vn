<template>
  <div class="blogs__page">
    <div class="section__margin--b">
      <div class="row m-0 p-0">
        <div class="col-12 m-0 p-0">
          <BlogListComponent />
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
import BlogListComponent from '@/components/BlogListComponent.vue';
import RequestAdvisorComponent from '@/components/RequestAdvisorComponent.vue';
export default {
  layout: 'pagelayout',
  components: {
    RelatedProductComponent,
    BlogListComponent,
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
