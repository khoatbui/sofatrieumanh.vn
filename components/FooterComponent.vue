<template>
  <div class="footer__component">
    <div class="footer__top">
      <div class="container">
        <div class="row mp--none">
          <div class="col-12 col-md-6 col-lg-5 mp--none pr-4">
            <h6 class="footer__top__title">
              Cong ty TNHH San xuat Noi that Trieu Manh
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
                Điện Thoại: 0961717979 - 0901611919 (Mr. Manh)
              </li>
              <li class="footer__top__item">
                <i class="material-icons text__size--x1 pr-1 "> mail </i> Email:
                care@sofatrieumanh.com / trieumanh@gmail.com
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-2 mp--none pr-2">
            <h6 class="footer__top__title">San pham</h6>
            <ul class="footer__top__menu">
              <li class="footer__top__item">
                Sofa
              </li>
              <li class="footer__top__item">
                Ban sofa
              </li>
              <li class="footer__top__item">
                Noi that
              </li>
              <li class="footer__top__item">
                Sofa thanh ly
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-2 mp--none pr-2">
            <h6 class="footer__top__title">Quicklink</h6>
            <ul class="footer__top__menu">
              <li class="footer__top__item">
                Khuyen mai
              </li>
              <li class="footer__top__item">
                Huong dan dat hang
              </li>
              <li class="footer__top__item">
                Ve chung toi
              </li>
              <li class="footer__top__item">
                Lien he
              </li>
              <li class="footer__top__item">
                Doi tac
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mp--none">
            <h6 class="footer__top__title">Dang ky</h6>
            <ul class="footer__top__menu">
              <li class="footer__top__item footer__top__item__subscribe">
                <input type="text" class="subscribe__input" />
                <button class="subscribe__btn">subscribe</button>
              </li>
              <li
                class="footer__top__item pt-2 footer__bottom__item__subscribe"
              >
                <img
                  src="/images/icon/facebook.png"
                  alt=""
                  class="footer__social mx-1"
                />
                <img
                  src="/images/icon/youtube.png"
                  alt=""
                  class="footer__social mx-1"
                />
                <img
                  src="/images/icon/zalo.png"
                  alt=""
                  class="footer__social mx-1"
                />
                <img
                  src="/images/icon/skype.png"
                  alt=""
                  class="footer__social mx-1"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom py-2 mp--none">
      <div class="container">
        <div
          class="row mp--none d-flex flex-wrap justify-content-between align-items-center"
        >
          <div class="footer__bottom__left">
            <span>Copyright © by sofatrieumanh, 2019</span>
          </div>
          <div class="footer__bottom__right">
            <nuxt-link to="/privatepolicy">Private policy</nuxt-link>
            <nuxt-link to="/privatepolicy">Term of use</nuxt-link>
            <nuxt-link to="/privatepolicy">Help</nuxt-link>
            <nuxt-link to="/privatepolicy">Contact us</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer__component {
  background-color: $primary__color;
  color: $white__color;
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
.footer__top__title::before {
  content: '';
  border-bottom: 3px solid $white__color;
  position: absolute;
  top: 2.5rem;
  width: 40%;
}
.subscribe__input {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border: 0;
  padding: 0.4rem 0.8rem;
  margin: 0;
  background-color: $white__color !important;
  color: $primary__color !important;
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
  border-top: 1px solid $white__color;
  font-size: 0.9rem;
}
.footer__bottom__right a {
  text-decoration: none !important;
  color: $white__color;
  padding: 0 0.4rem;
  border-right: 1px solid $white__color;
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
