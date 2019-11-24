<template>
  <div class="subscribe__component">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-6 m-0 p-0 text-center">
        <h6>Bạn muốn nhận các chương trình khuyến mãi</h6>
      </div>
      <div class="col-12 col-md-6 sub__input m-0 p-0">
        <input
          id="iRegitry"
          type="text"
          name=""
          placeholder="Địa chỉ email của bạn"
        />
        <vs-button color="#252531" type="filled">subscribe</vs-button>
      </div>
    </div>
  </div>
</template>
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
