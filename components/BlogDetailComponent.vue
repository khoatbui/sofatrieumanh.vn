<template>
  <div class="blogdetail__component">
    <div class="row m-0 p-0 w-100 section__margin--y">
      <div
        class="col-12 mx-auto m-0 p-0 d-flex justify-content-center align-items-center flex-column blog__detail__img"
      >
        <h1 class="blogdetail__header__name">NHAT KI NOI THAT</h1>
      </div>
    </div>
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-12 col-md-9 m-0 p-0 pr-2">
          <div class="card border-0 m-0 p-0">
            <div class="card-body">
              <h3 class="tintuc__title mt-4">
                <span>{{ blogDetail.blogName }}</span>

                <span class="min__read">3 phút</span>
              </h3>

              <div class="tintuc__info">
                <span class="creator">
                  <i class="material-icons"> verified_user </i>Đăng bởi:
                  {{ blogDetail.createBy }}</span
                >
              </div>
              <div class="tintuc__image"></div>
              <div class="tintuc__intro">
                {{ blogDetail.blogIntro }}
              </div>
              <div class="tintuc__content" v-html="blogDetail.content"></div>
            </div>
          </div>
          <RequestAdvisorComponent />
        </div>
        <div class="col-md-3 m-0 p-0 pl-2">
          <div class="card border-0 m-0 p-0 mb-4">
            <div class="card-body">
              <vs-input
                v-model="search"
                icon-after="true"
                icon="search"
                label-placeholder="Search news"
                class="w-100"
              />
            </div>
          </div>
          <div class="card border-0 m-0 p-0">
            <div class="card-body m-0 p-0">
              <div
                v-for="(blog, index) in randomBlogs"
                :key="index + 'blog'"
                class="card border-0 mb-4"
              >
                <div class="card-body">
                  <div class="card border-0 m-0 p-0 hot__blog__item">
                    <div class="hot__blog__image"></div>
                    <div class="card-body m-0 p-0">
                      <h5 class="hot__blog__title">
                        {{ blog.blogName }}
                      </h5>
                      <span class="hot__blog__createtime"
                        ><i class="material-icons mx-1 text__size--x09">
                          access_time </i
                        >{{
                          $moment(blog.createDate).format('YYYY-MM-DD')
                        }}</span
                      >
                      <p class="hot__blog__intro">
                        {{ blog.blogIntro }}
                      </p>
                      <vs-button
                        :color="'#ffb400'"
                        type="flat"
                        class="px-3 py-1 border__radius--100"
                        @click="redirectTo(blog.url)"
                        >Đọc thêm</vs-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RequestAdvisorComponent from '@/components/RequestAdvisorComponent';
const getMeRandomElements = function(sourceArray, neededElements) {
  const result = [];
  for (let i = 0; i < neededElements; i++) {
    result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
  }
  return result;
};
export default {
  components: {
    RequestAdvisorComponent,
  },
  data: () => ({
    blogDetail: {},
    blogList: [],
    search: '',
  }),
  computed: {
    randomBlogs() {
      if (this.blogList.length > 0) {
        const ramdom = getMeRandomElements(this.blogList, 4);
        return ramdom;
      } else return [];
    },
  },
  mounted() {
    this.getBlogDetail();
    this.getBlogList();
  },
  methods: {
    getBlogDetail() {
      this.$vs.loading();
      this.$axios
        .get(
          `${process.env.API_HTTP}/blogapi/single-blog-url/${this.$route.params.tintuc}`
        )
        .then(response => {
          this.blogDetail = response.data;
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
.blogdetail__header__name {
  color: $white__color;
}
.tintuc {
  background-color: $white__color;
}
.tintuc__title {
  font-size: 2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $primary__text;
}
.tintuc__info {
  margin: 0 0 3.2rem 0;
}
.tintuc__info .creator {
  color: $muted__text;
  font-size: 0.8rem;
  display: none;
}
.tintuc__info .creator .material-icons {
  font-size: 01rem !important;
  color: $primary__color;
  margin-right: 0.2rem;
}
.tintuc__title .min__read {
  background-color: $primary__color;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  font-size: 0.8rem;
  color: $white__color;
}
.tintuc__title::before {
  position: absolute;
  content: '';
  bottom: -1.6rem;
  left: 0;
  width: 40%;
  height: 4px;
  border-radius: 100px;
  background-color: $primary__text;
}
.tintuc__image {
  background-image: url('/images/blogs/blog_04.jpg');
  width: 100%;
  min-height: 300px;
  background-size: cover;
  background-position: center;
  margin: 1.6rem 0;
}
.tintuc__intro {
  font-style: italic;
  margin: 1.6rem 0;
  color: $muted__text;
  font-size: 0.9rem;
  padding: 0.8rem;
  border-left: 4px solid $muted__text;
}
.tintuc__content img {
  width: 100% !important;
}
.hot__blog__image {
  background-image: url('/images/blogs/blog_01.jpg');
  background-size: cover;
  min-height: 100px;
  background-position: center;
  background-repeat: no-repeat;
}
.hot__blog__title {
  font-size: 1rem;
  font-weight: bold;
  color: $primary__text;
  margin-bottom: 0.8rem;
}
.hot__blog__createtime {
  font-size: 0.8rem;
  color: $muted__text;
  margin-bottom: 0.8rem;
}
.hot__blog__intro {
  font-size: 0.9rem;
  line-height: 1.4rem;
  height: 5.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: $three__color;
  padding: 0;
  margin: 0;
  margin-bottom: 0.4rem;
}
.blog__detail__img {
  background-image: url('/images/banner/banner_05.jpg');
  height: 450px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
