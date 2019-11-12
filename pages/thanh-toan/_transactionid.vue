<template>
  <div class="giohang__component section__padding">
    <div class="container">
      <div class="row mp--none">
        <div class="col-12 col-md-6 mp--none p-2">
          <div class="card border-0 mp--none delivery__section">
            <div class="card-body">
              <div class="row mp--none mb-4">
                <div class="col-12 mp--none">
                  <h5 class="contact__title">
                    THÔNG TIN GIAO HÀNG
                  </h5>
                </div>
              </div>
              <div class="row mp--none my-3">
                <div class="col-12 mp--none text-left">
                  <vs-input
                    v-model="order.fullName"
                    color="#156867"
                    label="Ho va ten"
                    placeholder="Alex Tran"
                    class="w-100 border__radius--none custom__input"
                  />
                </div>
              </div>
              <div class="row mp--none my-3">
                <div class="col-12 mp--none text-left">
                  <vs-input
                    v-model="order.phoneNumber"
                    color="#156867"
                    label="Số điện thoại"
                    placeholder="+ 84 324-343-566"
                    class="w-100 border__radius--none custom__input"
                  />
                </div>
              </div>
              <div class="row mp--none my-3">
                <div class="col-12 mp--none text-left">
                  <vs-input
                    v-model="order.email"
                    color="#156867"
                    label="Email"
                    placeholder="you@email.com"
                    class="w-100 border__radius--none custom__input"
                  />
                </div>
              </div>
              <div class="row mp--none my-3">
                <div class="col-12 mp--none text-left">
                  <vs-input
                    v-model="order.address"
                    color="#156867"
                    label="Địa chỉ"
                    placeholder="Phòng 1909 Charmvit"
                    class="w-100 border__radius--none custom__input"
                  />
                </div>
              </div>
              <div class="row mp--none my-3">
                <div class="col-12 mp--none text-left">
                  <vs-input
                    v-model="order.tinh"
                    color="#156867"
                    label="Tỉnh"
                    placeholder="Ha Noi"
                    class="w-100 border__radius--none custom__input"
                  />
                </div>
              </div>
              <div class="row mp--none my-3">
                <div class="col-12 mp--none text-left">
                  <vs-input
                    v-model="order.quan"
                    color="#156867"
                    label="Quận/ / huyện"
                    placeholder="Cầu giấy"
                    class="w-100 border__radius--none custom__input"
                  />
                </div>
              </div>
              <div class="row mp--none my-3">
                <div class="col-12 mp--none text-left">
                  <vs-input
                    v-model="order.phuong"
                    color="#156867"
                    label="Phường/xã"
                    placeholder="Trung Hòa"
                    class="w-100 border__radius--none custom__input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mp--none p-2">
          <div class="card border-0 mp--none">
            <div class="card-body">
              <div class="row mp--none mb-4">
                <div class="col-12 mp--none">
                  <h5 class="contact__title">
                    ĐƠN HÀNG CỦA BẠN
                  </h5>
                </div>
              </div>
              <div class="row mp--none mb-4">
                <div class="col-12 mp--none">
                  <h5 class="total__title">Tong don hang</h5>
                </div>
              </div>
              <div class="row mp--none border-bottom my-3">
                <div class="col-6 mp--none text-left">
                  <p class="total__title__text text-muted">San pham 01</p>
                </div>
                <div class="col-6 mp--none text-right">
                  <p class="total__title__item">2 x 265,000</p>
                </div>
              </div>
              <div class="row mp--none border-bottom my-3">
                <div class="col-6 mp--none text-left">
                  <p class="total__title__text text-muted">San pham 02</p>
                </div>
                <div class="col-6 mp--none text-right">
                  <p class="total__title__item">2 x 265,000</p>
                </div>
              </div>
              <div class="row mp--none border-bottom my-3">
                <div class="col-6 mp--none text-left">
                  <p class="total__title__total text-muted">
                    <strong>Tong tien</strong>
                  </p>
                </div>
                <div class="col-6 mp--none text-right">
                  <p class="total__title"><strong> 2 x 265,000</strong></p>
                </div>
              </div>
              <div class="row mp--none my-4">
                <div class="col-12 mp--none">
                  <h5 class="total__title">Hình thức thanh toán</h5>
                </div>
              </div>
              <div class="row mp--none border-bottom my-3">
                <div class="col-12 mp--none">
                  <vs-radio
                    v-model="order.paymentType"
                    :color="'#156867'"
                    vs-value="Success"
                    >Chuyển khoản ngân hàng</vs-radio
                  >
                </div>
              </div>
              <div class="row mp--none border-bottom my-3">
                <div class="col-12 mp--none">
                  <vs-radio
                    v-model="order.paymentType"
                    :color="'#156867'"
                    vs-value="Success"
                    >Thanh toán khi giao hàng</vs-radio
                  >
                </div>
              </div>
              <div class="row mp--none thanhtoan__section">
                <div class="col-12 mp--none">
                  <vs-button color="warning" type="filled" class="w-100"
                    >Đặt hàng</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'mainlayout',
  data: () => ({
    order: {
      paymentType: '',
    },
  }),
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
.delivery__section .vs-input--label {
  font-weight: bold;
}
.thanhtoan__section {
  margin-top: 4rem;
  margin-bottom: 1rem;
}
.total__title {
  font-size: 1.3rem;
  font-weight: bold;
  columns: $muted__color;
}
.giohang__component {
  background-color: $secondary__bg__color;
}
.cart__item__img {
  background-image: url('/images/product/pro_05.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 70px;
  min-height: 50px;
}
.plus__btn {
  border-radius: 50%;
  border: 2px solid $primary__color !important;
}
.plus__btn i {
  font-size: 1rem !important;
  font-weight: bold;
  color: $primary__color;
}
.con-vs-radio {
  justify-content: flex-start !important;
}
</style>
