<template>
  <div class="login__page bg-primary">
    <div
      class="container login__container d-flex justify-content-center align-items-center"
    >
      <div class="card shadow login__card">
        <div class="card-body">
          <div class="row mp--none">
            <div class="col-12">
              <h6>Reset mật khẩu</h6>
            </div>
          </div>
          <div class="row mp--none">
            <div class="col-12 my-2">
              <vs-input
                v-model="login.email"
                label="Xác nhân email"
                placeholder="emailadmin@gmail.com"
                class="w-100"
                :danger="validation.target == 'email'"
                :danger-text="validation.text"
              />
            </div>
            <div class="col-12 my-2">
              <vs-input
                v-model="login.password"
                label="Mật khẩu mới"
                placeholder="Nhập mật khẩu"
                class="w-100"
                :danger="validation.target == 'password'"
                :danger-text="validation.text"
              />
            </div>
            <div class="col-12 my-2">
              <vs-input
                v-model="login.confirmPassword"
                label="Xác nhận mật khẩu"
                placeholder="Nhập lại mật khẩu"
                class="w-100"
                :danger="validation.target == 'confirmPass'"
                :danger-text="validation.text"
              />
            </div>
            <div class="col-12 my-2">
              <vs-button color="primary" type="filled" @click="changePassword"
                >Reset</vs-button
              >
              <vs-button color="danger" type="flat" to="/admin/login"
                >Login ?</vs-button
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
  data: () => ({
    login: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validation: {
      target: '',
      text: '',
    },
  }),
  methods: {
    changePassword() {
      if (!this.validationData()) {
        return;
      }
      this.$axios
        .post(
          `${process.env.API_HTTP}/authenapi/change-pass/${this.$route.params.id}`,
          this.login
        )
        .then(result => {
          this.$vs.loading.close();
          if (result.data.changePasswordStatus === false) {
            this.$vs.notify({
              color: 'danger',
              title: 'Change password fail',
              text: result.data.message,
            });
          } else {
            this.$vs.notify({
              color: 'success',
              title: 'Change password Success',
              text: result.data.message,
            });
            this.$store.commit('login/changeLoginStatus', false);
            this.$router.replace('/admin/login');
          }
        });
    },
    validationData() {
      if (this.login.email.length === 0) {
        this.validation = {
          target: 'email',
          text: 'Vui lòng nhập địa chỉ email',
        };
        return false;
      }
      if (this.login.password.length < 8) {
        this.validation = {
          target: 'password',
          text: 'Mật khẩu trên 8 kí tự',
        };
        return false;
      }
      if (this.login.password !== this.login.confirmPassword) {
        this.validation = {
          target: 'confirmPass',
          text: 'Mật khẩu xác nhận không đúng',
        };
        return false;
      }
      return true;
    },
  },
};
</script>
<style lang="scss">
.login__card {
  max-width: 300px;
}
.login__page {
  height: 100vh;
}
.login__container {
  height: 100%;
}
</style>
