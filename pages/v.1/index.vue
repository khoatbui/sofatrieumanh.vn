<template>
  <div class="home__page">
    <InstructionStepComponent />
    <PromotionComponent />
    <div class="container section__margin">
      <div class="row m-0 p-0 my-2">
        <div class="col-12 m-0 p-0">
          <ProductByTypeComponent :product-type-url="'ghe-sofa'" />
        </div>
      </div>
    </div>
    <BestSellerProductComponent class="section__margin" />
    <div class="container section__margin">
      <div class="row m-0 p-0 my-2">
        <div class="col-12 m-0 p-0">
          <ProductByTypeComponent :product-type-url="'ban'" />
        </div>
      </div>
      <div class="row m-0 p-0 my-2">
        <div class="col-12 m-0 p-0">
          <ProductByTypeComponent :product-type-url="'noi-that'" />
        </div>
      </div>
    </div>
    <RequestAdvisorComponent class="section__margin" />
    <div class="container section__margin">
      <div class="row m-0 p-0 my-2">
        <div class="col-12 m-0 p-0">
          <ProductByTypeComponent :product-type-url="'sofa-khuyen-mai'" />
        </div>
      </div>
      <div class="row m-0 p-0 my-2">
        <div class="col-12 m-0 p-0">
          <ProductByTypeComponent :product-type-url="'sofa-thanh-ly'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'pagelayout',
  components: {
    InstructionStepComponent: () =>
      import('@/components/InstructionStepComponent'),
    PromotionComponent: () => import('@/components/PromotionComponent'),
    ProductByTypeComponent: () => import('@/components/ProductByTypeComponent'),
    RequestAdvisorComponent: () =>
      import('@/components/RequestAdvisorComponent'),
    BestSellerProductComponent: () =>
      import('@/components/BestSellerProductComponent'),
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

<style>
.requestadvisor__card {
  margin: 1%;
}
</style>
