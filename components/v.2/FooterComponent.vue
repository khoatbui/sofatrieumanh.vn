<template>
  <div class="footer__component">
    <div class="footer__top">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-12 col-md-6 col-lg-5 m-0 p-0 pr-4">
            <h6 class="footer__top__title">
              Nội thất Triệu Mạnh
            </h6>
            <p>
              Thiết kế, sản xuất, nhập khẩu, bàn ghế, sofa, gia đình, nhà hàng,
              khách sạn, cà phê, karaoke, bar, văn phòng...Dịch vụ nhận bọc lại,
              sửa chữa, đổi kiểu.
            </p>
            <ul class="footer__top__menu">
              <li class="footer__top__item">
                <i class="material-icons text__size--x1 pr-1"> storefront </i>
                Địa Chỉ: Ngã 3 Cái Lân - Số 432 - Tổ 4 - Khu 10 - P. Bãi Cháy,
                TP. Hạ Long, Quảng Ninh
              </li>
              <li class="footer__top__item">
                <i class="material-icons text__size--x1 pr-1 ">
                  phone_in_talk
                </i>
                Điện Thoại: 098-844-2886 / 091-902-5915 (Mr. Manh)
              </li>
              <li class="footer__top__item">
                <i class="material-icons text__size--x1 pr-1 "> mail </i> Email:
                care@sofatrieumanh.com / sofatrieumanh@gmail.com
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-6 col-lg-2 m-0 p-0 pr-2">
            <h6 class="footer__top__title">Sản phẩm</h6>
            <ul class="footer__top__menu">
              <li class="footer__top__item">
                <nuxt-link to="danh-muc/ghe-sofa">
                  Sofa
                </nuxt-link>
              </li>
              <li class="footer__top__item">
                <nuxt-link to="danh-muc/ban-sofa">
                  Bàn sofa
                </nuxt-link>
              </li>
              <li class="footer__top__item">
                <nuxt-link to="danh-muc/noi-that">
                  Nội thất
                </nuxt-link>
              </li>
              <li class="footer__top__item">
                <nuxt-link to="danh-muc/sofa-thanh-ly">
                  Sofa thanh lý
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-6 col-lg-2 m-0 p-0 pr-2">
            <h6 class="footer__top__title">Quicklink</h6>
            <ul class="footer__top__menu">
              <li class="footer__top__item">
                <nuxt-link to="about/khuyen-mai">
                  Khuyến mại
                </nuxt-link>
              </li>
              <li class="footer__top__item">
                <nuxt-link to="about/huong-dan-dat-hang">
                  Hướng dẫn đặt hàng
                </nuxt-link>
              </li>
              <li class="footer__top__item">
                <nuxt-link to="about/ve-chung-toi">
                  Về chúng tôi
                </nuxt-link>
              </li>
              <li class="footer__top__item">
                <nuxt-link to="about/lien-he">
                  Liên hệ
                </nuxt-link>
              </li>
              <li class="footer__top__item">
                <nuxt-link to="about/doi-tac">
                  Đối tác
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3 m-0 p-0">
            <h6 class="footer__top__title">Đăng kí</h6>
            <ul class="footer__top__menu">
              <li class="footer__top__item footer__top__item__subscribe">
                <input v-model="email" type="text" class="subscribe__input" />
                <button class="subscribe__btn" @click="subscribe">
                  Đăng kí
                </button>
              </li>
              <li
                class="footer__top__item pt-2 footer__bottom__item__subscribe"
              >
                <a
                  href="https://www.facebook.com/SANXUATSOFA.TM/?modal=admin_todo_tour"
                  target="_blank"
                >
                  <img
                    src="/images/icon/facebook-50.png"
                    alt=""
                    class="footer__social mx-1"
                /></a>
                <a
                  href="https://www.youtube.com/channel/UCVnlQw0YUdwnTdLxEXz05tg?view_as=subscriber"
                  target="_blank"
                >
                  <img
                    src="/images/icon/youtube-50.png"
                    alt=""
                    class="footer__social mx-1"
                /></a>
                <img
                  src="/images/icon/zalo-50.png"
                  alt=""
                  class="footer__social mx-1"
                />
                <img
                  src="/images/icon/skype-50.png"
                  alt=""
                  class="footer__social mx-1"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom py-2 m-0 p-0">
      <div class="container">
        <div
          class="row m-0 p-0 d-flex flex-wrap justify-content-between align-items-center"
        >
          <div class="footer__bottom__left">
            <span>Bản quyền © thuộc về sofatrieumanh, 2019</span>
          </div>
          <div class="footer__bottom__right">
            <nuxt-link to="about/chinh-sach-rieng-tu"
              >Chính sách riêng tư</nuxt-link
            >
            <nuxt-link to="about/dieu-khoan-su-dun"
              >Điều khoản sử dụng</nuxt-link
            >
            <nuxt-link to="about/tro-giup">Trợ giúp</nuxt-link>
            <nuxt-link to="about/lien-he">Liên hệ</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscribe() {
      if (this.email.length === 0) {
        return;
      }
      this.$vs.loading();
      this.$axios
        .post(`${process.env.API_HTTP}/subscribeapi/create-subscribe`, {
          email: this.email,
        })
        .then(result => {
          this.$vs.loading.close();
          this.$vs.notify({
            color: 'success',
            title: 'Thankyou!',
            text: 'Cảm ơn bạn đã đăng kí.',
          });
        })
        .catch(error => {
          this.$vs.notify({
            color: 'danger',
            title: 'Opps!',
            text: error,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
  },
};
</script>
<style lang="scss">
.footer__component {
  background-color: $footer__bg__color;
  color: $primary__text;
}
.footer__top {
  padding: 2rem 0 1rem 0;
}
.footer__top__menu,
.footer__top__menu li {
  list-style: none;
}
.footer__top__title {
  font-size: 1.2rem;
  font-weight: 700;
  padding-bottom: 1.6rem;
}
.footer__top__item {
  font-size: 0.9rem;
}
.footer__top__item a {
  color: $primary__text;
  text-decoration: none !important;
}
.footer__top__title::before {
  content: '';
  border-bottom: 3px solid $primary__text;
  position: absolute;
  top: 2.5rem;
  width: 40%;
}
.subscribe__input {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border: 1px solid $secondary__color;
  padding: 0.4rem 0.8rem;
  margin: 0;
  background-color: $white__color !important;
  color: $primary__text !important;
}
.subscribe__btn {
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border: 0;
  padding: 0.4rem 0.8rem;
  margin: 0;
  margin-left: -10px;
  background-color: $secondary__color;
  color: $white__color;
  font-weight: bold;
}
.footer__social {
  height: 40px;
}
.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $secondary__color;
  font-size: 0.9rem;
}
.footer__bottom__right a {
  text-decoration: none !important;
  color: $secondary__color;
  padding: 0 0.4rem;
  border-right: 1px solid $secondary__color;
}
.footer__bottom__right a:last-child {
  border: none !important;
}
.footer__top__item__subscribe {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.footer__top__item__subscribe input {
  flex-grow: 1;
}
.footer__bottom__item__subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
