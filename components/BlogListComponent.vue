<template>
  <div class="bloglist__component">
    <div class="row m-0 p-0 category__component w-100 section__margin">
      <div
        class="col-12 blog__list_img col-md-12 mx-auto m-0 p-0 d-flex justify-content-center align-items-center flex-column"
      >
        <h1 class="category__name">Blogs</h1>
        <p class="category__intro text-center w-75">
          Bài viết, kiến thức, kinh nghiệm trang trí và sử dụng nội thất đến từ
          Triệu Mạnh. Kiến trúc sư và nhà sản xuất lâu năm trong ngành nội thất
          gia đình và nội thất công nghiệp.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row m-0 p-0">
        <div
          v-for="(blog, index) in blogList"
          :key="index + 'blog'"
          class="col-12 col-sm-6 col-md-4 m-0 p-0 p-2"
        >
          <div class="card border-0 m-0 p-0 blog__item my-2">
            <div
              class="blog__image cursor__pointer"
              :style="
                typeof blog.images === 'undefined' || blog.images.length === 0
                  ? `background-image:url('/images/blogs/blog_04.jpg')`
                  : `background-image:url('${blog.images[0].path}')`
              "
              @click="redirectTo(blog.url)"
            ></div>
            <div class="card-body">
              <h5
                class="blog__title cursor__pointer"
                @click="redirectTo(blog.url)"
              >
                {{ blog.blogName }}
              </h5>
              <span class="blog__createtime"
                ><i class="material-icons mx-1 text__size--x09"> access_time </i
                >{{ $moment(blog.createDate).format('YYYY-MM-DD') }}</span
              >
              <p class="blog__list__intro">
                {{ blog.blogIntro }}
              </p>
              <vs-button
                :color="'#2d2430'"
                type="filled"
                class="px-3 py-2 border__radius--100"
                @click="redirectTo(blog.url)"
                >Đọc thêm</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogListComponent',
  data() {
    return {
      blogList: [],
    };
  },
  mounted() {
    this.getBlogList();
  },
  methods: {
    getBlogList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/blogapi/`)
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
.blog__list_img {
  background-image: url('/images/bg/background_01.jpg');
  background-size: cover;
  min-height: 450px;
  background-position: center;
  background-repeat: no-repeat;
}
.blog__image {
  background-image: url('/images/blogs/blog_01.jpg');
  background-size: cover;
  min-height: 250px;
  background-position: center;
  background-repeat: no-repeat;
}
.blog__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: $primary__text;
  margin-bottom: 0.8rem;
}
.blog__createtime {
  font-size: 0.8rem;
  color: $muted__text;
  margin-bottom: 0.8rem;
}
.blog__list__intro {
  font-size: 0.9rem;
  height: 3.9rem;
  color: $three__color;
  overflow: hidden;
}
.blog__item:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
