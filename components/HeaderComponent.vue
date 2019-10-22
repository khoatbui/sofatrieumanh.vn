<template>
  <div class="header__component">
    <div class="top__menu">
      <div class="container">
        <div class="row mp--none">
          <div
            class="col-5 mp--none d-flex justify-content-start align-items-center"
          >
            <ul class="list__style--none top__menu__sub mp--none">
              <li>
                <a href="#" class="top__menu__item border-right">
                  <fa :icon="['fas', 'map-marker-alt']" />
                  <span>Showrooms</span>
                </a>
              </li>
              <li>
                <a href="#" class="top__menu__item">
                  <fa :icon="['fas', 'phone-alt']" />
                  <span class="secondary__font text__size--x08 "
                    >030-927-998</span
                  >
                </a>
              </li>
            </ul>
          </div>
          <div class="col-2 mp--none">
            <div slot="title">
              <h1 class="text__size--x2 mp--none header__logo">
                Sofa <fa :icon="['fas', 'couch']" />
              </h1>
            </div>
          </div>
          <div
            class="col-5  mp--none d-flex justify-content-end align-items-center"
          >
            <ul class="list__style--none top__menu__sub mp--none">
              <li>
                <a href="#" class="top__menu__item border-right">
                  <span>Whishlist</span><i class="whishlist__badge">0</i>
                </a>
              </li>
              <li>
                <a href="#" class="top__menu__item">
                  <span>Cart</span><fa :icon="['fas', 'shopping-basket']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom__menu">
      <div class="container">
        <div
          class="row mp--none d-flex justify-content-between align-items-center"
        >
          <div class="bottom__menu__left">
            <a href="" class="bottom__menu__item">Ghế sofa</a>
            <a href="" class="bottom__menu__item">Bàn +</a>
            <a href="" class="bottom__menu__item">Sofa khuyến mãi</a>
            <a href="" class="bottom__menu__item">Nội thất</a>
            <a href="" class="bottom__menu__item">Sofa thanh lý</a>
            <a href="" class="bottom__menu__item">Tin tức</a>
            <a href="" class="bottom__menu__item">Hệ thống cửa hàng</a>
          </div>
          <div class="bottom__menu__right">
            <input
              id="isearch"
              type="text"
              name="isearch"
              placeholder="Search..."
            />
            <fa :icon="['fas', 'couch']" />
          </div>
        </div>
      </div>
    </div>
    <vs-navbar v-model="activeItem" class="nabarx py-2 mobile__menu">
      <div slot="title">
        <vs-navbar-title class="text__size--x2 mp--none header__logo">
          Sofa <fa :icon="['fas', 'couch']" />
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Ghế sofa</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">Bàn +</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Sofa khuyến mãi</a>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <a href="#">Nội thất</a>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <a href="#">Sofa thanh lý</a>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <a href="#">Tin tức</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0
  })
}
</script>
<style lang="scss">
.header__logo {
  color: $primary__color;
  font-weight: 700;
}
.vs-navbar--btn-responsive {
  background-color: #fff !important;
  color: $primary__color;
}
.vs-navbar--btn-responsive span {
  background-color: $primary__color;
}
.vs-navbar--btn-responsive:hover {
  background-color: #fff !important;
  outline: none !important;
  color: $primary__color;
}
.vs-navbar--item a {
  font-size: 1.2rem !important;
  color: $primary__color;
  font-weight: 600;
}
.top__menu__sub {
  display: flex;
  justify-content: center;
  align-items: center;
}
.top__menu__item {
  padding: 0 1rem;
  text-decoration: none !important;
}
.top__menu__item.border-right {
  border-right: 1px solid $primary__color;
}
.top__menu__item span,
.top__menu__item svg {
  color: $primary__color;
}
.whishlist__badge {
  display: inline-block;
  background-color: $primary__color;
  color: #fff !important;
  height: 20px !important;
  width: 20px !important;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 50%;
  margin: 0px 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.top__menu {
  padding-top: 2rem;
}
.bottom__menu {
  background-color: #f4f3f3;
  padding: 0.4rem 0px;
  border-top: 1px solid $primary__color;
  border-bottom: 1px solid $primary__color;
}
.bottom__menu__left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bottom__menu__item {
  padding: 0px 0.5rem;
  text-decoration: none;
  color: $primary__color;
  font-weight: 500;
}
.bottom__menu__right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: $primary__color;
}
.bottom__menu__right input {
  background-color: #f4f3f3;
  border: none;
  width: 70px;
  transition-duration: 1s;
}
.bottom__menu__right input:focus,
.bottom__menu__right input:active {
  width: 200px;
}
.mobile__menu {
  display: flex;
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .mobile__menu {
    display: flex !important;
  }
  .top__menu,
  .bottom__menu {
    display: none !important;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .mobile__menu {
    display: none !important;
  }
  .top__menu,
  .bottom__menu {
    display: block !important;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .mobile__menu {
    display: none !important;
  }
  .top__menu,
  .bottom__menu {
    display: block !important;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .mobile__menu {
    display: none !important;
  }
  .top__menu,
  .bottom__menu {
    display: block !important;
  }
}
</style>
