<template>
  <div class="subscribe__component">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-6 m-0 p-0 text-center">
        <h6>Bạn muốn nhận các chương trình khuyến mãi</h6>
      </div>
      <div class="col-12 col-md-6 sub__input m-0 p-0">
        <input
          id="iRegitry"
          v-model="email"
          type="text"
          name=""
          placeholder="Địa chỉ email của bạn"
        />
        <vs-button color="#252531" type="filled" @click="subscribe"
          >subscribe</vs-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscribe() {
      if (this.email.length === 0) {
        return;
      }
      this.$vs.loading();
      this.$axios
        .post(
          `${process.env.API_HTTP}/subscribeapi/create-subscribe`,
          this.email
        )
        .then(result => {
          this.$vs.notify({
            color: 'success',
            title: 'Thankyou!',
            text: 'Cảm ơn bạn đã đăng kí.',
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
  },
};
</script>
<style lang="scss">
.sub__input {
  display: flex;
  justify-content: center;
  align-items: center;
}
#iRegitry {
  border-bottom: 2px solid $muted__text !important;
  padding: 0.8rem;
  margin: 0 0.4rem;
}
.subscribe__component h6 {
  font-size: 1.5rem;
}
.subscribe__component button {
  border-radius: 0 !important;
  padding: 0.8rem 1.6rem;
}
</style>
