<template>
  <div class="aboutdetail__component">
    <div class="row m-0 p-0 w-100 section__margin--y">
      <div
        class="col-12 mx-auto m-0 p-0 d-flex justify-content-center align-items-center flex-column about__detail__img"
      >
        <h1 class="aboutdetail__header__name">{{ aboutDetail.aboutName }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="row m-0 p-0">
        <div class="col-12 col-md-9 m-0 p-0 pr-2">
          <div class="card border-0 m-0 p-0">
            <div class="card-body">
              <h3 class="tintuc__title mt-4">
                <span>{{ aboutDetail.aboutName }}</span>

                <span class="min__read">3 phút</span>
              </h3>

              <div class="tintuc__info">
                <span class="creator">
                  <i class="material-icons"> verified_user </i>Đăng bởi:
                  {{ aboutDetail.createBy }}</span
                >
              </div>
              <div class="tintuc__image"></div>
              <div class="tintuc__intro">
                {{ aboutDetail.aboutIntro }}
              </div>
              <div class="tintuc__content" v-html="aboutDetail.content"></div>
            </div>
          </div>
          <FollowUsComponent />
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
            <div class="card-body m-0">
              <h6
                v-for="(about, index) in randomAbouts"
                :key="index + 'about'"
                class="hot__about__title cursor__pointer"
                @click="redirectTo(about.url)"
              >
                {{ about.aboutName }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const getMeRandomElements = function(sourceArray, neededElements) {
  const result = [];
  for (let i = 0; i < neededElements; i++) {
    result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
  }
  return result;
};
export default {
  components: {
    FollowUsComponent: () => import('@/components/v.2/FollowUsComponent'),
  },
  data() {
    return {
      aboutDetail: {},
      aboutList: [],
      search: '',
    };
  },
  computed: {
    randomAbouts() {
      if (this.aboutList.length > 0) {
        const ramdom = getMeRandomElements(this.aboutList, 4);
        return ramdom;
      } else return [];
    },
  },
  mounted() {
    this.getAboutDetail();
    this.getAboutList();
  },
  methods: {
    getAboutDetail() {
      this.$vs.loading();
      this.$axios
        .get(
          `${process.env.API_HTTP}/aboutapi/single-about-url/${this.$route.params.id}`
        )
        .then(response => {
          this.aboutDetail = response.data;
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
    getAboutList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/aboutapi/`)
        .then(response => {
          this.aboutList = response.data;
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
      this.$router.replace(`/about/${url}`);
    },
  },
};
</script>
<style lang="scss">
.aboutdetail__header__name {
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
  background-image: url('/images/abouts/about_04.jpg');
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
.hot__about__image {
  background-image: url('/images/abouts/about_01.jpg');
  background-size: cover;
  min-height: 100px;
  background-position: center;
  background-repeat: no-repeat;
}
.hot__about__title {
  font-size: 1rem;
  font-weight: bold;
  color: $primary__text;
  margin-bottom: 0.8rem;
}
.hot__about__createtime {
  font-size: 0.8rem;
  color: $muted__text;
  margin-bottom: 0.8rem;
}
.hot__about__intro {
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
.about__detail__img {
  background-image: url('/images/banner/banner_05.jpg');
  height: 450px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
