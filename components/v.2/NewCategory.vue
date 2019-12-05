<template>
  <div class="newcategory__component">
    <div class="container">
      <div class="row m-0 p-0 py-4">
        <div class="col-12">
          <client-only>
            <!-- important to add client-only-->

            <carousel
              :responsive="{
                0: { items: 1, nav: false },
                600: { items: 3, nav: false },
                900: { items: 6, nav: false },
              }"
              :dots="false"
              :nav="false"
              :autoplay="true"
              :loop="true"
            >
              <div class="topcategory__left">
                <h6 class="topcategory__title">Top danh mục trong tuần</h6>
                <p class="topcategory__intro">
                  Các danh mục được chọn mua nhiều nhất từ SofaTrieuManh
                </p>
                <nuxt-link class="topcategory__btn" to="/danh-muc/"
                  >Xem tất cả</nuxt-link
                >
              </div>
              <div v-for="(cat, i) in category" :key="i + 'cat'">
                <div class="topcategory__item">
                  <nuxt-link :to="`${cat.categoryUrl}`">
                    <div
                      class="topcategory__img"
                      :style="`background-image:url('${cat.categoryImage}')`"
                    ></div>
                    <p class="topcategory__name">{{ cat.categoryName }}</p>
                  </nuxt-link>
                </div>
              </div>
            </carousel>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: [
        {
          categoryName: 'Bàn sofa',
          categoryUrl: '/danh-muc/ban-sofa',
          categoryImage: '/images/icon/chair.jpg',
        },
        {
          categoryName: 'Sofa văn phòng',
          categoryUrl: '/danh-muc/sofa-van-phong',
          categoryImage: '/images/icon/sofa.jpg',
        },
        {
          categoryName: 'Sofa phòng khách',
          categoryUrl: '/danh-muc/sofa-phong-khach',
          categoryImage: '/images/icon/sofa.jpg',
        },
        {
          categoryName: 'Nội thất phòng ăn',
          categoryUrl: '/danh-muc/noi-that-phong-an',
          categoryImage: '/images/icon/chair.jpg',
        },
        {
          categoryName: 'Sofa băng(văng)',
          categoryUrl: '/danh-muc/sofa-bang',
          categoryImage: '/images/icon/bed.jpg',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.newcategory__component {
  background-color: $three__color;
  color: $white__color;
}
.topcategory__left {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 1.6rem;
}
.topcategory__btn {
  border: 2px solid $five__color;
  padding: 0.4rem 0.8rem;
  color: $five__color !important;
  display: inline-block;
  text-decoration: none !important;
}
.topcategory__intro {
  font-size: 0.8rem;
}
.topcategory__title {
  font-size: 1.3rem;
}
.topcategory__item {
  height: 200px;
  background-color: $four__color;
  color: $five__color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.topcategory__item a {
  text-decoration: none !important;
  color: $five__color;
  font-size: 0.8rem;
}
.topcategory__item a:hover,
.topcategory__item:hover a {
  color: $primary__color;
}
.topcategory__item:hover {
  border: 2px solid $primary__color;
}
.topcategory__img {
  height: 60px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
