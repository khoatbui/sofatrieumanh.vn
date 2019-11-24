<template>
  <div class="instruction__component">
    <div class="container">
      <div class="row m-0 p-0">
        <div
          class="col-12 m-0 p-0 d-flex justify-content-between align-items-center py-4"
        >
          <div class="step__item">
            <img src="/images/steps/shopping.png" alt="" class="step__img" />
            <span class="step__title">Chọn sản phẩm</span>
          </div>
          <div class="step__item">
            <img src="/images/steps/confirm.png" alt="" class="step__img" />
            <span class="step__title">Đặt hàng</span>
          </div>
          <div class="step__item">
            <img src="/images/steps/package.png" alt="" class="step__img" />
            <span class="step__title">Đóng gói</span>
          </div>
          <div class="step__item">
            <img src="/images/steps/delivered.png" alt="" class="step__img" />
            <span class="step__title">Giao hàng</span>
          </div>
          <div class="step__item">
            <img src="/images/steps/payment.png" alt="" class="step__img" />
            <span class="step__title">Thanh toán</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.step__img {
  height: 25px;
  width: 25px;
  padding: 5px;
  box-sizing: content-box;
  border-radius: 50%;
  border: 1px solid $primary__color;
}
.step__title {
  color: $primary__color;
  font-weight: 500;
}
</style>
