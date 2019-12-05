<template>
  <div class="newheader__component">
    <div class="desktop__header" :class="{ sticky: !showNavbar }">
      <div class="desktop__header_top">
        <span>Miễn phí :Giao hàng trên bán kính 70km</span>
      </div>
      <div class="desktop__header_bottom p-2">
        <div class="leftside__header">
          <nuxt-link to="/">
            <h1>Tm.</h1>
          </nuxt-link>
          <vs-dropdown vs-custom-content>
            <a class="a-icon drop__head" href.prevent>
              Ghế sofa<i class="material-icons">
                add
              </i>
            </a>

            <vs-dropdown-menu class="menu__dropdown">
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-don">Sofa đơn</nuxt-link>
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-giuong"
                      >Sofa giường</nuxt-link
                    >
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-van-phong"
                      >Sofa văn phòng</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-gia-re"
                      >Sofa giá rẻ</nuxt-link
                    >
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-phong-khach"
                      >Sofa phòng khách</nuxt-link
                    >
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-bang"
                      >Sofa băng(văng)</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-nhap-khau"
                      >Sofa nhập khẩu</nuxt-link
                    >
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-cao-cap"
                      >Sofa cao cấp</nuxt-link
                    >
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-can-ho"
                      >Sofa căn hộ</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-co-dien"
                      >Sofa cổ điển</nuxt-link
                    >
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-goc">Sofa góc</nuxt-link>
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-han-quoc"
                      >Sofa Hàn Quốc</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-karaoke"
                      >Sofa kakaoke</nuxt-link
                    >
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-cafe">Sofa cafe</nuxt-link>
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-ni">Sofa nỉ</nuxt-link>
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-da">Sofa da</nuxt-link>
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-vai">Sofa vải</nuxt-link>
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/sofa-tan-co-dien"
                      >Sofa tân cổ điển</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-12 py-1 px-4">
                    <nuxt-link to="/danh-muc/ghe-sofa" class="view__all__btn"
                      >Xem tất cả</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
          <vs-dropdown vs-custom-content>
            <a class="a-icon drop__head" href.prevent>
              Bàn sofa<i class="material-icons">
                add
              </i>
            </a>

            <vs-dropdown-menu class="menu__dropdown">
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/ban-sofa">Bàn sofa</nuxt-link>
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/ban-an">Bàn ăn</nuxt-link>
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/ban-go">Bàn gỗ</nuxt-link>
                  </div>
                  <div class="col-4 py-1 px-4">
                    <nuxt-link to="/danh-muc/ban-da">Bàn đá</nuxt-link>
                  </div>
                </div>
              </vs-dropdown-item>

              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-12 py-1 px-4">
                    <nuxt-link to="/danh-muc/ban" class="view__all__btn"
                      >Xem tất cả</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
          <nuxt-link to="/danh-muc/sofa-khuyen-mai"> Sofa khuyến mãi</nuxt-link>

          <vs-dropdown vs-custom-content>
            <a class="a-icon drop__head" href.prevent>
              Nội thất<i class="material-icons">
                add
              </i>
            </a>

            <vs-dropdown-menu class="menu__dropdown">
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-6 py-1 px-4">
                    <nuxt-link to="/danh-muc/noi-that-phong-khach"
                      >Nội thất phòng khách</nuxt-link
                    >
                  </div>
                  <div class="col-6 py-1 px-4">
                    <nuxt-link to="/danh-muc/noi-that-phong-an"
                      >Nội thất phòng ăn</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
              <vs-dropdown-item divider>
                <div class="row m-0 p-0">
                  <div class="col-6 py-1 px-4">
                    <nuxt-link to="/danh-muc/noi-that-phong-ngu"
                      >Nội thất phòng ngủ</nuxt-link
                    >
                  </div>
                  <div class="col-6 p-0">
                    <nuxt-link to="/danh-muc/noi-that" class="view__all__btn"
                      >Xem tất cả</nuxt-link
                    >
                  </div>
                </div>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
          <nuxt-link to="/danh-muc/sofa-thanh-ly">Sofa thanh lý</nuxt-link>
          <nuxt-link to="/tin-tuc">Tin tức</nuxt-link>
          <nuxt-link to="/tu-van-thiet-ke">Tư vấn thiết kế</nuxt-link>
        </div>
        <div class="rightside__header">
          <div class="header__search">
            <vs-input
              v-model="search"
              color="#FFFFFF"
              icon="search"
              placeholder="Search"
              class="input__search"
              @keyup.enter="redirectTo(`/danh-muc/tim-kiem/?search=${search}`)"
            />
          </div>

          <div class="header__favorite">
            <vs-dropdown vs-custom-content>
              <nuxt-link to="/favorite" class="favorite__dropdown__title">
                <i class="material-icons header__icon">
                  favorite_border
                </i>
                <span class="favo__number">{{ getFavorite.qty }}</span>
              </nuxt-link>

              <vs-dropdown-menu class="cart__dropdown">
                <vs-dropdown-item
                  v-for="(favo, index) in getFavorite.list"
                  :key="index + 'fasve'"
                  divider
                >
                  <div class="row mp--none">
                    <div class="col-3 mp--none">
                      <img
                        :src="favo.images[0].path"
                        alt=""
                        class="header__tooltip__image"
                      />
                    </div>
                    <div class="col-7 mp--none">
                      <p>{{ favo.productName }}</p>
                    </div>
                    <div class="col-2 mp--none">
                      <vs-button
                        color="danger"
                        type="border"
                        size="small"
                        class="p-1"
                        @click="removeFavoriteItem(favo)"
                        ><i class="material-icons text__size--x07">
                          close
                        </i></vs-button
                      >
                    </div>
                  </div>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <nuxt-link to="/yeu-thich">Xem tất cả</nuxt-link>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
          <div class="header__cart">
            <vs-dropdown vs-custom-content>
              <nuxt-link to="/cart" class="cart__dropdown__title">
                <i class="material-icons header__icon">
                  shopping_cart
                </i>
                <span class="cart__number">{{ getCart.qty }}</span>
              </nuxt-link>

              <vs-dropdown-menu class="cart__dropdown">
                <vs-dropdown-item
                  v-for="(cart, index) in getCart.list"
                  :key="index + 'fasve'"
                  divider
                >
                  <div class="row mp--none">
                    <div class="col-3 mp--none">
                      <img
                        :src="cart.product.images[0].path"
                        alt=""
                        class="header__tooltip__image"
                      />
                    </div>
                    <div class="col-7 mp--none">
                      <p>{{ cart.product.productName }}</p>
                    </div>
                    <div class="col-2 mp--none">
                      <vs-button
                        color="danger"
                        type="border"
                        size="small"
                        class="p-1"
                        @click="removeCartItem(cart)"
                        ><i class="material-icons text__size--x07">
                          close
                        </i></vs-button
                      >
                    </div>
                  </div>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <nuxt-link to="/gio-hang">Xem tất cả</nuxt-link>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
          <div class="header__account">
            <vs-dropdown vs-custom-content>
              <a class="a-icon" href.prevent>
                <i class="material-icons header__icon">
                  menu
                </i>
              </a>

              <vs-dropdown-menu class="account__dropdown">
                <vs-dropdown-item divider>
                  <nuxt-link to="/gio-hang">Giỏ hàng</nuxt-link>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <nuxt-link to="/yeu-thich">Sản phẩm yêu thích</nuxt-link>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <nuxt-link to="/thanh-toan">Thanh toán</nuxt-link>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <nuxt-link to="/tai-khoan">Tài khoản</nuxt-link>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile__header">
      <vs-navbar v-model="activeItem" class="nabarx py-2 mobile__menu">
        <div slot="title">
          <nuxt-link to="/"
            ><vs-navbar-title class="text__size--x2 m-0 p-0 header__logo">
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
          <nuxt-link
            to="/danh-muc/sofa-khuyen-mai"
            @click.native="selectNavItem"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      activeItem: 0,
      headerPicture: [
        {
          image: '/images/banner/banner_01.jpg',
          promotionName: 'Bộ sưu tập mới',
          promotionIntro: 'Giảm giá 20% trên các bộ sưu tập mới',
        },
        {
          image: '/images/banner/banner_02.jpg',
          promotionName: 'Bộ sưu tập mới',
          promotionIntro: 'Giảm giá 20% trên các bộ sưu tập mới',
        },
        {
          image: '/images/banner/banner_03.jpg',
          promotionName: 'Giao diện mới, giảm giá mới',
          promotionIntro: 'Giảm giá 10% cho các đơn hàng trên 5 triệu',
        },
        {
          image: '/images/banner/banner_04.jpg',
          promotionName: 'Bộ sưu tập mới',
          promotionIntro: 'Giảm giá 20% trên các bộ sưu tập mới',
        },
        {
          image: '/images/banner/banner_05.jpg',
          promotionName: 'Bộ sưu tập mới',
          promotionIntro: 'Giảm giá 20% trên các bộ sưu tập mới',
        },
        {
          image: '/images/banner/banner_06.jpg',
          promotionName: 'Bộ sưu tập mới',
          promotionIntro: 'Giảm giá 20% trên các bộ sưu tập mới',
        },
        {
          image: '/images/banner/banner_07.jpg',
          promotionName: 'Bộ sưu tập mới',
          promotionIntro: 'Giảm giá 20% trên các bộ sưu tập mới',
        },
      ],
      promotionList: [],
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  computed: {
    getFavorite() {
      return {
        qty: this.$store.state.favoriteItem.favoriteItem,
        list: this.$store.state.favoriteItem.favoriteList,
      };
    },
    getCart() {
      return {
        qty: this.$store.state.cartItem.cartItem,
        list: this.$store.state.cartItem.cartList,
      };
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.getPromotionHome();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        this.showNavbar = true;
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (currentScrollPosition < 60) {
        this.showNavbar = true;
        return;
      }
      // if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
      //   return false;
      // }
      this.showNavbar = false;

      // this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      // this.lastScrollPosition = currentScrollPosition;
    },
    getPromotionHome() {
      this.$axios
        .get(`${process.env.API_HTTP}/promotionapi/promotion-bytype/SLIDE_HOME`)
        .then(response => {
          this.promotionList = response.data;
          this.$vs.loading.close();
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
    selectNavItem() {
      document
        .querySelector('.vs-con-items')
        .classList.remove('activeMenuResponsive');
      document
        .querySelector('.vs-navbar--btn-responsive')
        .classList.remove('active-menu');
    },
    redirectTo(url) {
      this.$router.replace(url);
    },
    removeCartItem(cart) {
      this.$store.commit('cartItem/removeCartItemClick', cart);
    },
    removeFavoriteItem(favo) {
      this.$store.commit('favoriteItem/removeFavoriteItemClick', favo);
    },
  },
};
</script>
<style lang="scss">
.header__tooltip__image {
  height: 30px;
  width: 30px;
}
.favorite__dropdown__title,
.cart__dropdown__title {
  position: relative;
}
.cart__dropdown,
.favorite_-dropdown {
  min-width: 400px;
}
.favo__number,
.cart__number {
  position: absolute;
  top: -20px;
  right: -10px;
  background-color: $danger__color;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  color: $white__color;
  font-size: 0.8rem;
  text-align: center;
}
.desktop__header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}
.desktop__header.sticky {
  background-color: $secondary__color;
  transition-duration: 1s;
}
.desktop__header_top {
  text-align: center;
  color: $white__color;
  font-size: 0.8rem;
  padding: 0.4rem;
  border-bottom: 1px solid $muted__text;
}
.desktop__header_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0.8rem 0;
  background-color: transparent;
}
.leftside__header,
.rightside__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  color: $white__color;
}
.leftside__header {
  justify-content: flex-start;
}
.rightside__header {
  justify-content: flex-end;
}
.leftside__header a {
  color: $white__color;
  margin: 0 1.2rem 0 0;
  text-decoration: none;
}
.rightside__header a {
  color: $white__color;
  margin: 0 1.2rem 0 0;
  text-decoration: none;
}
.leftside__header a:hover,
.rightside__header a:hover {
  color: $primary__color;
}
.drop__head {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0 !important;
  outline: 0 !important;
}
.drop__head .material-icons {
  font-size: 0.9rem;
}
.header__icon {
  color: $white__color;
}
.newheader__component {
  width: 100%;
}
.vs-component.vs-dropdown--item.divider a {
  white-space: nowrap !important;
  color: $primary__text__color;
  text-decoration: none;
}
.vs-component.vs-dropdown--item.divider a:hover {
  color: $primary__color;
}
.input__search {
  border: 0;
  color: $white__color;
}
.input__search .vs-inputx {
  border: 0 !important;
  padding-left: 2.4rem;
}
.input__search .vs-input-primary .vs-input--input:focus {
  border: 0 !important;
  box-shadow: none !important;
}
.input__search .vs-input--input:focus {
  box-shadow: none !important;
}
.input__search .vs-icon {
  color: $white__color !important;
  border-right-color: $white__color !important;
}
.input__search .input-span-placeholder {
  color: $primary__text__color !important;
  padding-left: 2.4rem !important;
  top: 3px !important;
}
.menu__dropdown .vs-dropdown--menu {
  border-radius: 0 !important;
}
.menu__dropdown a {
  font-size: 0.8rem !important;
}
.promotion__header__content {
  position: absolute;
  color: $white__color;
  bottom: 30%;
  left: 30%;
  transform: translate(-50%, 50%);
}
.promotion__header__content h6 {
  font-size: 2rem;
  font-weight: bold;
}
.promotion__header__content p {
  font-size: 0.9rem;
  font-weight: 400;
}
.promotion__header__content button {
  border: 2px solid $white__color;
  padding: 0.8rem 1.6rem;
  background-color: transparent;
}
.view__all__btn {
  background-color: $primary__color !important;
  color: $secondary__color !important;
  width: 100%;
  padding: 0.4rem 0.8rem;
  margin: 0 !important;
  display: inline-block;
}
.view__all__btn a {
  display: inline-block;
}
// MOBILE
.header__logo {
  color: $secondary__color;
  font-weight: 700;
}
.vs-navbar--btn-responsive {
  background-color: #fff !important;
  color: $secondary__color;
}
.vs-navbar--btn-responsive span {
  background-color: $secondary__color;
}
.vs-navbar--btn-responsive:hover {
  background-color: #fff !important;
  outline: none !important;
  color: $secondary__color;
}
.vs-navbar--item a {
  font-size: 1.2rem !important;
  color: $secondary__color;
  font-weight: 600;
}
.mobile__menu {
  display: flex;
  color: $secondary__color;
}
.desktop__img,
.desktop__header {
  display: none !important;
}
.mobile__menu a {
  color: $secondary__color !important;
}
.mobile__menu .vs-navbar--btn-responsive .btn-responsive-line {
  background-color: $secondary__color !important;
}
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .mobile__menu {
    display: flex !important;
  }
  .desktop__img,
  .desktop__header {
    display: none !important;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .mobile__menu {
    display: flex !important;
  }
  .desktop__img,
  .desktop__header {
    display: none !important;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .mobile__menu {
    display: none !important;
  }
  .desktop__img,
  .desktop__header {
    display: block !important;
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .mobile__menu {
    display: none !important;
  }
  .desktop__img,
  .desktop__header {
    display: block !important;
  }
}
</style>
