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
                  <span class="secondary__font text__size--x09 "
                    >030-927-998</span
                  >
                </a>
              </li>
            </ul>
          </div>
          <div class="col-2 mp--none">
            <div slot="title">
              <nuxt-link to="/">
                <h1 class="text__size--x2 mp--none header__logo">
                  Sofa <fa :icon="['fas', 'couch']" />
                </h1>
              </nuxt-link>
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
            <nuxt-link to="/" href="" class="bottom__menu__item"
              >Home</nuxt-link
            >
            <nuxt-link
              to="/danh-muc/ghe-sofa"
              href=""
              class="bottom__menu__item"
              >Ghế sofa</nuxt-link
            >
            <nuxt-link to="/danh-muc/ban" href="" class="bottom__menu__item"
              >Bàn +</nuxt-link
            >
            <nuxt-link
              to="/danh-muc/sofa-khuyen-mai"
              href=""
              class="bottom__menu__item"
              >Sofa khuyến mãi</nuxt-link
            >
            <nuxt-link
              to="/danh-muc/noi-that"
              href=""
              class="bottom__menu__item"
              >Nội thất</nuxt-link
            >
            <nuxt-link
              to="/danh-muc/sofa-thanh-ly"
              href=""
              class="bottom__menu__item"
              >Sofa thanh lý</nuxt-link
            >
            <nuxt-link to="/tin-tuc" href="" class="bottom__menu__item"
              >Tin tức</nuxt-link
            >
            <nuxt-link to="/tu-van-thiet-ke" href="" class="bottom__menu__item"
              >Tư vấn thiết kế</nuxt-link
            >
          </div>
          <div class="bottom__menu__right">
            <input
              id="isearch"
              type="text"
              name="isearch"
              placeholder="Search..."
              class="search__input"
            />
            <fa :icon="['fas', 'couch']" />
          </div>
        </div>
      </div>
    </div>
    <vs-navbar v-model="activeItem" class="nabarx py-2 mobile__menu">
      <div slot="title">
        <nuxt-link to="/"
          ><vs-navbar-title class="text__size--x2 mp--none header__logo">
            Sofa <fa :icon="['fas', 'couch']" />
          </vs-navbar-title>
        </nuxt-link>
      </div>

      <vs-navbar-item index="0">
        <nuxt-link to="/danh-muc/ghe-sofa" @click.native="selectNavItem"
          >Ghế sofa</nuxt-link
        >
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <nuxt-link to="/danh-muc/ban" @click.native="selectNavItem"
          >Bàn +</nuxt-link
        >
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <nuxt-link to="/danh-muc/sofa-khuyen-mai" @click.native="selectNavItem"
          >Sofa khuyến mãi</nuxt-link
        >
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <nuxt-link to="/danh-muc/noi-that" @click.native="selectNavItem"
          >Nội thất</nuxt-link
        >
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <nuxt-link to="/danh-muc/sofa-thanh-ly" @click.native="selectNavItem"
          >Sofa thanh lý</nuxt-link
        >
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <nuxt-link to="/tin-tuc" @click.native="selectNavItem"
          >Tin tức</nuxt-link
        >
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0
  }),
  methods: {
    selectNavItem() {
      document
        .querySelector('.vs-con-items')
        .classList.remove('activeMenuResponsive')
      document
        .querySelector('.vs-navbar--btn-responsive')
        .classList.remove('active-menu')
    }
  }
}
</script>
<style lang="scss">
.header__component a,
.header__component a:hover {
  text-decoration: none;
}
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
  padding: 0px 1rem;
  text-decoration: none;
  color: $primary__color;
  font-weight: 500;
}
.bottom__menu__item:hover {
  font-weight: bold;
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
  color: $primary__color;
}
.mobile__menu a {
  color: $primary__color !important;
}
.mobile__menu .vs-navbar--btn-responsive .btn-responsive-line {
  background-color: $primary__color !important;
}
.top__menu,
.bottom__menu {
  display: none !important;
}
.search__input {
  color: $primary__color;
}
.search__input::-webkit-input-placeholder {
  /* Edge */
  color: $primary__color;
}

.search__input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: $primary__color;
}

.search__input::placeholder {
  color: $primary__color;
}
.bottom__menu__item:hover {
  color: $primary__color;
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
