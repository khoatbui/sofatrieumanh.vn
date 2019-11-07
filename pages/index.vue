<template>
  <div class="home__page">
    <InstructionStepComponent />
    <PromotionComponent />
    <div class="container section__margin">
      <div class="row mp--none my-2">
        <div class="col-12 mp--none">
          <ProductByTypeComponent />
        </div>
      </div>
    </div>
    <BestSellerProductComponent class="section__margin" />
    <div class="container section__margin">
      <div class="row mp--none my-2">
        <div class="col-12 mp--none">
          <ProductByTypeComponent />
        </div>
      </div>
      <div class="row mp--none my-2">
        <div class="col-12 mp--none">
          <ProductByTypeComponent />
        </div>
      </div>
    </div>
    <RequestAdvisorComponent class="section__margin" />
    <div class="container section__margin">
      <div class="row mp--none my-2">
        <div class="col-12 mp--none">
          <ProductByTypeComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PromotionComponent from '@/components/PromotionComponent.vue'
import InstructionStepComponent from '@/components/InstructionStepComponent.vue'
import ProductByTypeComponent from '@/components/ProductByTypeComponent.vue'
import RequestAdvisorComponent from '@/components/RequestAdvisorComponent.vue'
import BestSellerProductComponent from '@/components/BestSellerProductComponent.vue'
export default {
  layout: 'mainlayout',
  components: {
    InstructionStepComponent,
    PromotionComponent,
    ProductByTypeComponent,
    RequestAdvisorComponent,
    BestSellerProductComponent
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style>
.requestadvisor__card {
  margin: 1%;
}
</style>
