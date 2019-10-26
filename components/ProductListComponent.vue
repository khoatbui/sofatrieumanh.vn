<template>
  <div class="productlist__component">
    <div class="row mp--none">
      <div class="col-4 mp--none">
        <div class="filter__sidebar">
          <div class="row mp--none">
            <div class="col-12 mp--none">
              <h6 class="filter__title">Chat lieu</h6>
            </div>
          </div>
          <div class="row mp--none">
            <div class="col-12 mp--none">
              <ul class="filter__list">
                <li class="filter__item">
                  <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                </li>
                <li class="filter__item">
                  <vs-checkbox v-model="checkBox1">Da</vs-checkbox>
                </li>
                <li class="filter__item">
                  <vs-checkbox v-model="checkBox1">Gỗ ép</vs-checkbox>
                </li>
                <li class="filter__item">
                  <vs-checkbox v-model="checkBox1">Sắt</vs-checkbox>
                </li>
                <li class="filter__item">
                  <vs-checkbox v-model="checkBox1">Gỗ</vs-checkbox>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 mp--none">
        <div class="product__list"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.filter__title {
  color: $primary__color;
  font-weight: bold;
  font-size: 1.2rem;
}
.filter__title::before {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 40%;
  height: 1px;
  border-radius: 100px;
  background-color: $promotion__bg__color;
}
.filter__list {
  padding-left: 0.4rem;
}
.filter__list,
.filter__list li {
  list-style: none;
}
.filter__item {
  margin: 0.4rem 0;
}
</style>
