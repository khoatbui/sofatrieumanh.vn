<template>
  <div class="tuvan__component">
    <div class="row m-0 p-0 category__component w-100">
      <div
        class="col-12 mx-auto m-0 p-0 d-flex justify-content-center align-items-center flex-column tuvan__img"
      >
        <h1 class="category__name text__white__color text-center">
          Yêu cầu tư vấn thiết kế cho ngôi nhà của bạn
        </h1>
      </div>
    </div>
    <div class="section__padding--y">
      <div class="container section__padding--y">
        <div class="row m-0 p-0">
          <div class="col-12 col-md-6 m-0 p-0">
            <h6 class="contact__title">Liên lạc trực tiếp với chúng tôi</h6>
            <div
              class="contact__item d-flex flex-column justify-content-center align-items-start"
            >
              <span
                class="font-weight-bold text__size--x12 d-flex justify-content-center align-items-start"
              >
                <i class="material-icons warning__color mr-2">
                  storefront
                </i>
                Địa chỉ</span
              >
              <span
                >Ngã 3 Cái Lân - Số 432 - Tổ 4 - Khu 10 - P. Bãi Cháy, TP. Hạ
                Long, Quảng Ninh</span
              >
            </div>
            <div
              class="contact__item d-flex flex-column justify-content-center align-items-start"
            >
              <span
                class="font-weight-bold text__size--x12 d-flex justify-content-center align-items-start"
              >
                <i class="material-icons warning__color mr-2">
                  local_phone
                </i>
                Hotline</span
              >
              <span>098-844-2886 / 091-902-5915 (Mr. Manh)</span>
            </div>
            <div
              class="contact__item d-flex flex-column justify-content-center align-items-start"
            >
              <span
                class="font-weight-bold text__size--x12 d-flex justify-content-center align-items-start"
              >
                <i class="material-icons warning__color mr-2">
                  mail
                </i>
                Email</span
              >
              <span>care@sofatrieumanh.com / sofatrieumanh@gmail.com</span>
            </div>
          </div>
          <div class="col-12 col-md-6 m-0 p-0 tuvan__form">
            <h6 class="contact__title">Hoặc gửi cho chúng tôi tin nhắn</h6>
            <vs-input
              v-model="comment.fullName"
              label="Họ tên"
              placeholder="Nguyen Quy Hanh"
              class="w-100 border__radius--none custom__input"
              :danger="validation.target === 'fullName'"
              :danger-text="validation.text"
            />
            <vs-input
              v-model="comment.email"
              label="Địa chỉ email"
              placeholder="email@gmail.com"
              class="w-100 border__radius--none custom__input"
              :danger="validation.target === 'email'"
              :danger-text="validation.text"
            />
            <vs-input
              v-model="comment.phoneNumber"
              label="Số điện thoại"
              placeholder="+84 935-235-695"
              class="w-100 border__radius--none custom__input"
              :danger="validation.target === 'phoneNumber'"
              :danger-text="validation.text"
            />
            <div class="custom__input">
              <label for="icomment" class="label__input">Yêu cầu</label>
              <vs-textarea
                id="icomment"
                v-model="comment.request"
                class="w-100 comment__input"
              />
            </div>
            <vs-button
              :color="'#ffb400'"
              type="filled"
              class="px-4 py-2 border__radius--none"
              @click="requestAdvisor"
              >Gửi yêu cầu</vs-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'pagelayout',
  data() {
    return {
      comment: {
        fullName: '',
        email: '',
        phoneNumber: '',
        request: '',
      },
      validation: {
        target: '',
        text: '',
      },
    };
  },
  head() {
    return {
      title: 'SofaTrieuManh Yêu cầu tư vấn thiết kế cho ngôi nhà của bạn',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'name',
          name: 'name',
          content: 'sofatrieumanh.com',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'SofaTrieuManh có thể đáp ứng tất cả các thiết kế riêng theo yêu cầu của quý khách. Đến với sofaTrieuManh, bạn có thể yên tâm về chất lượng, dịch vụ và sản phẩm dành cho ngôi nhà của bạn',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Tư vấn, sofatrieumanh,thiết kế riêng, thiết kế sofa, nội thất đẹp, sản phẩm chất lượng',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'SofaTrieuManh cung cấp dịch vụ tư vấn, thiết kế nội thất. Chúng tôi có thể đáp ứng tất cả các thiết kế riêng theo yêu cầu của quý khách. Đến với sofaTrieuManh, bạn có thể yên tâm về chất lượng, dịch vụ và sản phẩm dành cho ngôi nhà của bạn',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'SofaTrieuManh Yêu cầu tư vấn thiết kế cho ngôi nhà của bạn',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'sofatrieumanh.com',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'http://sofatrieumanh.com/tu-van-thiet-ke',
        },

        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: 'http://sofatrieumanh.com/tu-van-thiet-ke',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'SofaTrieuManh Yêu cầu tư vấn thiết kế cho ngôi nhà của bạn',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'SofaTrieuManh cung cấp dịch vụ tư vấn, thiết kế nội thất. Chúng tôi có thể đáp ứng tất cả các thiết kế riêng theo yêu cầu của quý khách. Đến với sofaTrieuManh, bạn có thể yên tâm về chất lượng, dịch vụ và sản phẩm dành cho ngôi nhà của bạn',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: 'sofatrieumanh.com',
        },
      ],
    };
  },
  methods: {
    requestAdvisor() {
      if (!this.validationData()) {
        return;
      }
      this.$vs.loading();
      this.$axios
        .post(
          `${process.env.API_HTTP}/advisorapi/register-advisor`,
          this.comment
        )
        .then(result => {
          this.$vs.notify({
            color: 'success',
            title: 'Thankyou!',
            text: 'Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.',
          });
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
    validationData() {
      if (this.comment.fullName.length === 0) {
        this.validation = {
          target: 'fullName',
          text: 'Vui lòng nhập họ tên',
        };
        return false;
      }
      if (this.comment.email.length === 0) {
        this.validation = {
          target: 'email',
          text: 'Vui lòng nhập địa chỉ email',
        };
        return false;
      }
      if (this.comment.phoneNumber.length === 0) {
        this.validation = {
          target: 'phoneNumber',
          text: 'Vui lòng nhập số điện thoại',
        };
        return false;
      }
      return true;
    },
  },
};
</script>
<style lang="scss">
.tuvan__img {
  background-image: url('/images/blogs/blog_04.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-height: 450px;
}
.text__white__color {
  color: $white__color !important;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.warning__color {
  color: $secondary__color;
}
.contact__title {
  margin: 0 0 3.2rem 0;
  font-weight: bold;
  font-size: 2rem;
}
.contact__item {
  margin-bottom: 3.2rem;
}
.tuvan__form .vs-input--input {
  border-radius: 0 !important;
}
.tuvan__form .vs-input--label,
.tuvan__form .label__input {
  font-weight: bold;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
  padding-left: 5px;
}
.tuvan__form .custom__input {
  margin-bottom: 1.2rem;
}
.tuvan__form .comment__input {
  background-color: $white__color;
  border-radius: 0 !important;
  border-color: rgba(0, 0, 0, 0.2) !important;
}
</style>
