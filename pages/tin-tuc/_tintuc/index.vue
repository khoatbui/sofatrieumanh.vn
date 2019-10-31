<template>
  <div class="tintuc__page">
    <div class="container section__padding">
      <BlogDetailComponent class="mb-4" />
      <SlideProductComponent class="mt-4" />
    </div>
  </div>
</template>
<script>
import BlogDetailComponent from '@/components/BlogDetailComponent'
import SlideProductComponent from '@/components/SlideProductComponent'
export default {
  layout: 'mainlayout',
  components: {
    BlogDetailComponent,
    SlideProductComponent
  }
}
</script>
<style lang="scss">
.tintuc__page {
  background-color: $secondary__bg__color;
}
</style>
