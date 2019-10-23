<template>
  <div class="footer__component">
    <div class="footer__top">
      <div class="container">
        <div class="row mp--none">
          <div class="col-4 mp--none pr-2">
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
                Địa Chỉ: 36/6 Đường TTH15, Khu Phố 3A, Phường Tân Thới Hiệp,
                Quận 12, TP .HCM
              </li>
              <li class="footer__top__item">
                Điện Thoại: 0961717979 - 0901611919 (Mr. Manh)
              </li>
              <li class="footer__top__item">
                Email: sofatrieumanh@sofa.com
              </li>
            </ul>
          </div>
          <div class="col-2 mp--none pr-2">
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
          <div class="col-2 mp--none pr-2">
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
          <div class="col-4 mp--none">
            <h6 class="footer__top__title">Dang ky</h6>
            <ul class="footer__top__menu">
              <li class="footer__top__item">
                <input type="text" class="subscribe__input" />
                <button class="subscribe__btn">subscribe</button>
              </li>
              <li class="footer__top__item"></li>
            </ul>
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
  padding: 1rem 0;
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
.footer__top__title::before {
  content: '';
  border-bottom: 3px solid $white__color;
  position: absolute;
  top: 1.5rem;
  width: 40%;
}
.subscribe__input {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border: 0;
  padding: 0.4rem 0.8rem;
  margin: 0;
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
</style>
