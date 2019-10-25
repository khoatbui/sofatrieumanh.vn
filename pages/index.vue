<template>
  <div class="home__page">
    <InstructionStepComponent />
    <PromotionComponent />
    <div class="container">
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
    <RequestAdvisorComponent />
    <div class="container">
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
export default {
  layout: 'mainlayout',
  components: {
    InstructionStepComponent,
    PromotionComponent,
    ProductByTypeComponent,
    RequestAdvisorComponent
  }
}
</script>

<style>
.requestadvisor__card {
  margin: 1%;
}
</style>
