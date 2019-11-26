<template>
  <div class="login__page bg-primary">
    <div
      class="container login__container d-flex justify-content-center align-items-center"
    >
      <div class="card shadow login__card">
        <div class="card-body">
          <div class="row mp--none">
            <div class="col-12">
              <h6>Yêu cầu mật khẩu</h6>
            </div>
          </div>
          <div class="row mp--none">
            <div class="col-12">
              <vs-input
                v-model="login.email"
                label="Email"
                placeholder="emailadmin@gmail.com"
                class="w-100"
                :danger="validation.target == 'email'"
                :danger-text="validation.text"
              />
            </div>
            <div class="col-12">
              <vs-button color="primary" type="filled" @click="requestReset"
                >Send email reset</vs-button
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
    },
    validation: {
      target: '',
      text: '',
    },
  }),
  methods: {
    requestReset() {
      if (!this.validationData()) {
        return;
      }
      this.$axios
        .post(`${process.env.API_HTTP}/authenapi/reset`, this.login)
        .then(result => {
          this.$vs.loading.close();
          if (result.data.sendMail === false) {
            this.$vs.notify({
              color: 'danger',
              title: 'Login fail',
              text: result.data.message,
            });
          } else {
            this.$vs.notify({
              color: 'success',
              title: 'Login Success',
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
