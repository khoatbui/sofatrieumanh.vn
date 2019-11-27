<template>
  <div class="tintuc__page">
    <div class="section__padding--b">
      <AboutDetailComponent class="mb-4 border-bottom" />
      <RequestAdvisorComponent />
      <SlideProductComponent class="mt-4 container" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  components: {
    AboutDetailComponent: () => import('@/components/AboutDetailComponent'),
    SlideProductComponent: () => import('@/components/SlideProductComponent'),
    RequestAdvisorComponent: () =>
      import('@/components/RequestAdvisorComponent'),
  },
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
<style lang="scss">
.tintuc__page {
  background-color: $secondary__bg__color;
}
</style>
