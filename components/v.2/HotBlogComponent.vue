<template>
  <div v-if="blogList.length > 0" class="hotblog__component">
    <div class="row m-0 p-0 mb-4">
      <div class="col-12 text-center">
        <h6 class="component__title">TrieuManh Blogs</h6>
        <p class="component__intro">
          Tip, Trick, các hướng dẫn đến từ Triệu Mạnh để bạn có một căn nhà ưng
          ý nhất
        </p>
      </div>
    </div>
    <client-only>
      <carousel
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 2, nav: false },
          900: { items: 3, nav: false },
        }"
        :dots="false"
        :autoplay="true"
        :loop="true"
      >
        <div
          v-for="(blog, i) in blogList"
          :key="i + 'blogs'"
          class="card border-0"
        >
          <div class="card-body">
            <div
              class="blog__card__image cursor__pointer"
              :style="
                typeof blog.images === 'undefined' || blog.images.length === 0
                  ? `background-image:url('/images/blogs/blog_04.jpg')`
                  : `background-image:url('${blog.images[0].path}')`
              "
              @click="redirectTo(blog.url)"
            ></div>
            <div class="blog__card__detail">
              <div
                class="blog__card__title my-2 cursor__pointer"
                @click="redirectTo(blog.url)"
              >
                {{ blog.blogName }}
              </div>
              <div class="blog__card__info mb-2 mt-0">
                <span
                  >Đăng bởi
                  <span class="text__primary">sofa.trieumanh</span></span
                >
                <span
                  >ngày
                  <span class="text__primary">{{
                    $moment(blog.createDate).format('YYYY-MM-DD')
                  }}</span></span
                >
              </div>
              <div class="blog__card__intro my-2">
                {{ blog.blogIntro }}
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </client-only>
  </div>
</template>
<script>
export default {
  data: () => ({
    blogList: [],
  }),
  mounted() {
    this.getBlogList();
  },
  methods: {
    getBlogList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/blogapi/hot-blog`)
        .then(response => {
          this.blogList = response.data;
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
    redirectTo(url) {
      this.$router.replace(`/tin-tuc/${url}`);
    },
  },
};
</script>
<style lang="scss">
.blog__card__image {
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.blog__card__detail {
  margin: 1.6rem 0;
}
.blog__card__title {
  color: $primary__text;
  font-size: 1rem;
  font-weight: bold;
}
.blog__card__info {
  font-size: 0.8rem;
  color: $muted__text;
}
.blog__card__intro {
  font-size: 0.8rem;
  color: $primary__text;
  height: 3.4rem;
  overflow: hidden;
}
</style>
