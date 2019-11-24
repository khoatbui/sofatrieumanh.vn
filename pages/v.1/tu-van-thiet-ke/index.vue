<template>
  <div class="tuvan__component">
    <div class="row mp--none category__component w-100">
      <div
        class="col-12 mx-auto mp--none d-flex justify-content-center align-items-center flex-column tuvan__img"
      >
        <h1 class="category__name text__white__color text-center">
          Yêu cầu tư vấn thiết kế cho ngôi nhà của bạn
        </h1>
      </div>
    </div>
    <div class="secondary__background">
      <div class="container section__padding">
        <div class="row mp--none">
          <div class="col-12 col-md-6 mp--none">
            <h6 class="contact__title">Liên lạc trực tiếp với chúng tôi</h6>
            <div
              class="contact__item d-flex flex-column justify-content-center align-items-start"
            >
              <span
                class="font-weight-bold text__size--x12 d-flex justify-content-center align-items-start"
              >
                <i class="material-icons warning__color mr-2">
                  storefront
                </i>
                Địa chỉ</span
              >
              <span
                >Ngã 3 Cái Lân - Số 432 - Tổ 4 - Khu 10 - P. Bãi Cháy, TP. Hạ
                Long, Quảng Ninh</span
              >
            </div>
            <div
              class="contact__item d-flex flex-column justify-content-center align-items-start"
            >
              <span
                class="font-weight-bold text__size--x12 d-flex justify-content-center align-items-start"
              >
                <i class="material-icons warning__color mr-2">
                  local_phone
                </i>
                Hotline</span
              >
              <span>098-844-2886 / 091-902-5915 (Mr. Manh)</span>
            </div>
            <div
              class="contact__item d-flex flex-column justify-content-center align-items-start"
            >
              <span
                class="font-weight-bold text__size--x12 d-flex justify-content-center align-items-start"
              >
                <i class="material-icons warning__color mr-2">
                  mail
                </i>
                Email</span
              >
              <span>care@sofatrieumanh.com / sofatrieumanh@gmail.com</span>
            </div>
          </div>
          <div class="col-12 col-md-6 mp--none tuvan__form">
            <h6 class="contact__title">Hoặc gửi cho chúng tôi tin nhắn</h6>
            <vs-input
              v-model="comment.fullName"
              label="Name"
              placeholder="John Carrick"
              class="w-100 border__radius--none custom__input"
            />
            <vs-input
              v-model="comment.email"
              label="Email"
              placeholder="yourmail@email.com"
              class="w-100 border__radius--none custom__input"
            />
            <vs-input
              v-model="comment.phoneNumber"
              label="Phone number"
              placeholder="+84 935-235-695"
              class="w-100 border__radius--none custom__input"
            />
            <div class="custom__input">
              <label for="icomment" class="label__input">Yêu cầu</label>
              <vs-textarea
                id="icomment"
                v-model="comment.comment"
                class="w-100 comment__input"
              />
            </div>
            <vs-button
              :color="'#156867'"
              type="filled"
              class="px-4 py-2 border__radius--none"
              >Send</vs-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  data: () => ({
    comment: {
      fullName: '',
      email: '',
      phoneNumber: '',
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
.tuvan__img {
  background-image: url('/images/blogs/blog_04.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 350px;
}
.text__white__color {
  color: $white__color !important;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.warning__color {
  color: $secondary__color;
}
.contact__title {
  margin: 0 0 3.2rem 0;
  font-weight: bold;
  font-size: 2rem;
}
.contact__item {
  margin-bottom: 3.2rem;
}
.tuvan__form .vs-input--input {
  border-radius: 0 !important;
}
.tuvan__form .vs-input--label,
.tuvan__form .label__input {
  font-weight: bold;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
  padding-left: 5px;
}
.tuvan__form .custom__input {
  margin-bottom: 1.2rem;
}
.tuvan__form .comment__input {
  background-color: $white__color;
  border-radius: 0 !important;
  border-color: rgba(0, 0, 0, 0.2) !important;
}
</style>
