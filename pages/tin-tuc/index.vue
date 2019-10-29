<template>
  <div class="blogs__page">
    <div class="container section__margin">
      <div class="row mp--none">
        <div class="col-12 mp--none">
          <BlogListComponent />
        </div>
      </div>
    </div>
    <div class="section__margin">
      <RequestAdvisorComponent />
    </div>
    <RelatedProductComponent class="section__margin" />
  </div>
</template>
<script>
import RelatedProductComponent from '@/components/RelatedProductComponent.vue'
import BlogListComponent from '@/components/BlogListComponent.vue'
import RequestAdvisorComponent from '@/components/RequestAdvisorComponent.vue'
export default {
  layout: 'mainlayout',
  components: {
    RelatedProductComponent,
    BlogListComponent,
    RequestAdvisorComponent
  },
  data: () => ({})
}
</script>
<style lang="scss"></style>
