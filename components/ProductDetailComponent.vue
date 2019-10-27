<template>
  <div class="product__detail__component">
    <div class="product__overview">
      <div class="row mp--none">
        <div class="col-12 col-md-6 mp--none">
          <div class="row mp--none">
            <div class="col-4 mp--none image__list">
              <div class="image__list__item"></div>
              <div class="image__list__item"></div>
              <div class="image__list__item"></div>
            </div>
            <div class="col-8 mp--none main__image">
              <div class="image__item"></div>
              <div class="image__action">
                <vs-button
                  :color="'#156867'"
                  type="flat"
                  icon="aspect_ratio"
                ></vs-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 mp--none"></div>
      </div>
    </div>
    <div class="product__detail">
      <div class="row mp--none">
        <div class="col-12 mp--none">
          <vs-tabs :color="danger">
            <vs-tab label="Mô tả">
              <div class="con-tab-ejemplo">
                **Với Chất liệu Bộ Sofa: +Vải/ Nỉ/ Gấm/ Nhung/ Bố/Da công
                nghiệp/Giả da cao cấp/Da thật nhập khẩu cao cấp. +Khung gỗ tự
                nhiên đã qua xữ lý chống mối mọt, công vênh. +Mousse cao cấp/
                Mousse + Lò xo Cao Cấp/ Nệm cao su Độ bền và Độ đàn hồi cao.
                +Màu sắc phong phú và đa dạng Đáp ứng mọi nhu cầu của khách
                hàng.
              </div>
            </vs-tab>
            <vs-tab label="Đánh giá">
              <div class="con-tab-ejemplo">
                Đánh giá
              </div>
            </vs-tab>
          </vs-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.image__item {
  background-image: url('/images/product/pro_01.jpg');
  min-height: 300px;
  background-size: cover;
  background-position: center;
}
.image__list__item {
  background-image: url('/images/product/pro_02.jpg');
  min-height: 90px;
  background-size: cover;
  background-position: center;
}
.image__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1.6rem;
}
.main__image {
  position: relative;
}
.image__action {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  background-color: transparent;
}
</style>
