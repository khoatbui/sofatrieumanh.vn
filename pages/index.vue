<template>
  <div class="home__page">
    <InstructionStepComponent />
    <PromotionComponent />
  </div>
</template>

<script>
import PromotionComponent from '@/components/PromotionComponent.vue'
import InstructionStepComponent from '@/components/InstructionStepComponent.vue'
export default {
  layout: 'mainlayout',
  components: {
    InstructionStepComponent,
    PromotionComponent
  }
}
</script>

<style></style>
