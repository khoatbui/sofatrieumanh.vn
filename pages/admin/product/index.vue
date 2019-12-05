<template>
  <div class="admin__product__page">
    <div class="row m-0 p-0 my-2">
      <div class="col-12 m-0 p-0">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newProductClick"
              >Tạo mới sản phẩm</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editProductClick"
              >Sửa sản phẩm</vs-button
            ><vs-button
              color="danger"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="deleteProductClick"
              >Xoá sản phẩm</vs-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 my-2">
      <div class="col-12 m-0 p-0">
        <div class="card border-0 shadow">
          <vs-table
            v-model="selected"
            :data="productList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Sản phẩm
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Tên sản phẩm
              </vs-th>
              <vs-th>
                Ngày tạo
              </vs-th>
              <vs-th>
                Ngày sửa
              </vs-th>
              <vs-th>
                Có public?
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
                <vs-td :data="data[indextr].productName">
                  {{ data[indextr].productName }}
                </vs-td>

                <vs-td :data="data[indextr].createDate">
                  {{ $moment(data[indextr].createDate).format('YYYY-MM-DD') }}
                </vs-td>

                <vs-td :data="data[indextr].modifyDate">
                  {{ $moment(data[indextr].modifyDate).format('YYYY-MM-DD') }}
                </vs-td>

                <vs-td :data="data[indextr].isActive">
                  {{ data[indextr].isActive }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <div class="popup">
      <vs-popup
        fullscreen
        :title="selected.productName"
        :active.sync="editPopup"
      >
        <div class="popup_body">
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-4">
              <vs-input
                v-model="editedItem.productName"
                label="Tên sản phẩm"
                placeholder="5 bước để có chiếc sofa đẹp"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-2 d-flex align-items-end">
              <vs-input
                v-model="editedItem.source"
                label="Xuất sứ"
                placeholder="Việt Nam"
                class="w-100"
              />
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isActive">Public ?</vs-checkbox>
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isHot"
                >Sản phẩm hot ?</vs-checkbox
              >
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isNewProduct"
                >Sản phẩm mới ?</vs-checkbox
              >
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isSaleOff"
                >Sản phẩm khuyến mãi ?</vs-checkbox
              >
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.url"
                label="URL sản phẩm"
                placeholder="5-buoc-de-co-mot-so-fa-dep"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-6 my-4 my-md-0 d-flex align-items-end">
              <vs-chips
                v-model="editedItem.tags"
                color="rgb(145, 32, 159)"
                placeholder="Tags"
                class="w-100"
              >
                <vs-chip
                  v-for="tag in editedItem.tags"
                  :key="tag"
                  closable
                  color="primary"
                  @click="removeTag(tag)"
                >
                  {{ tag }}
                </vs-chip>
              </vs-chips>
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.video"
                label="Video sản phẩm"
                placeholder="https://www.youtube.com/watch?v=psgdsIdECjA"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-6 my-4 my-md-0 d-flex align-items-end">
              <vs-chips
                v-model="editedItem.buletPoint"
                color="rgb(145, 32, 159)"
                placeholder="Đặc điêm nổi bật"
                class="w-100"
              >
                <vs-chip
                  v-for="tag in editedItem.buletPoint"
                  :key="tag"
                  closable
                  color="primary"
                  @click="removeBuletPoint(tag)"
                >
                  {{ tag }}
                </vs-chip>
              </vs-chips>
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.productIntro"
                counter="200"
                label="Mô tả tóm tắt (SEO)"
                :counter-danger.sync="counterDanger"
              />
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.productFrontMaterial"
                label="Chất liệu bề mặt"
                placeholder="Da công nghiệp"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.productFrameMaterial"
                label="Chất liệu khung"
                placeholder="Khung sắt công nghiệp"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.size"
                label="Kích thước"
                placeholder="Dài : 16cm, Rộng:24cm, Cao: 33cm"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.package"
                label="Bao gồm"
                placeholder="1 bàn 2m, 4 ghế tròn"
                class="w-100"
              />
            </div>
          </div>
          <div class="row m-0 p-0 my-4">
            <div class="col-6 col-md-3">
              <vs-input
                v-model="editedItem.price"
                label="Giá thực ( discount)"
                placeholder="2300000"
                class="w-100"
              />
            </div>
            <div class="col-6 col-md-3">
              <vs-input
                v-model="editedItem.oldPrice"
                label="Giá gốc ( undiscount)"
                placeholder="3300000"
                class="w-100"
              />
            </div>
            <div class="col-6 col-md-3">
              <vs-select
                v-model="editedItem.category"
                placeholder="Select..."
                multiple
                autocomplete
                class="w-100"
                label="Category"
              >
                <vs-select-item
                  v-for="(item, index) in categoryList"
                  :key="index"
                  :value="item._id"
                  :text="item.menuName"
                />
              </vs-select>
            </div>
            <div class="col-6 col-md-3">
              <vs-select
                v-model="editedItem.characteristics"
                placeholder="Select..."
                multiple
                autocomplete
                class="w-100"
                label="Đặc điểm"
              >
                <vs-select-item
                  v-for="(item, index) in characteryList"
                  :key="index"
                  :value="item._id"
                  :text="item.characteryName"
                />
              </vs-select>
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12">
              <vs-upload
                multiple
                text="Ảnh sản phẩm"
                :action="`${api}/uploadapi/upload-product-img`"
                @on-success="successUpload"
                @on-delete="deleteUpload"
              />
            </div>
            <div class="col-12">
              <FileListComponent
                :file-list="editedItem.images"
                @deleteditem="removeImagesItem"
              />
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12">
              <AdminTipTapComponent
                :data-parent="editedItem.content"
                :is-async-completed="editedDataLoaded"
                @childtoparent="editedItem.content = $event"
              />
            </div>
          </div>
          <div class="row m-0 p-0 margin__top--4 border-top">
            <div class="col-12 py-2 d-flex justify-content-end">
              <vs-button
                color="danger"
                type="filled"
                class="py-2 px-3 border__radius--none mr-2"
                @click="resetPopup"
                >Reset</vs-button
              >
              <vs-button
                color="primary"
                type="filled"
                class="py-2 px-3 border__radius--none"
                @click="saveProduct"
                >Lưu sản phẩm</vs-button
              >
            </div>
          </div>
        </div>
      </vs-popup>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'authentication',
  components: {
    AdminTipTapComponent: () => import('@/components/AdminTipTapComponent'),
    FileListComponent: () => import('@/components/FileListComponent'),
  },
  layout: 'adminlayout',
  data() {
    return {
      api: process.env.API_HTTP,
      editPopup: false,
      editedDataLoaded: false,
      categoryList: [],
      characteryList: [],
      selected: [],
      editedIndex: -1,
      editedItem: {
        productName: '',
        productIntro: '',
        isHot: false,
        isNewProduct: false,
        isSaleOff: false,
        isActive: true,
        createDate: '',
        modifyDate: '',
        createBy: 'trieumanh',
        source: '',
        tags: [],
        buletPoint: [],
        url: '',
        content: '',
        category: [],
        images: [],
        productCode: '',
        characteristics: [],
        video: '',
      },
      defaultItem: {
        productName: '',
        productIntro: '',
        isHot: false,
        isNewProduct: false,
        isSaleOff: false,
        isActive: true,
        createDate: '',
        modifyDate: '',
        createBy: 'trieumanh',
        source: '',
        tags: [],
        buletPoint: [],
        url: '',
        content: '',
        category: [],
        images: [],
        productCode: '',
        characteristics: [],
        video: '',
      },
      counterDanger: false,
      productList: [],
    };
  },
  mounted() {
    this.getProductList();
    this.getCategoryList();
    this.getCharacteryList();
    document.querySelector('.con-input-upload input').name = 'imagesx';
  },
  methods: {
    editProductClick(index) {
      this.editedIndex = this.selected._id;
      this.getProductById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD');
      });
      this.editPopup = true;
    },
    newProductClick() {
      this.editPopup = true;
      this.editedItem = this.defaultItem;
      this.editedIndex = -1;
      this.editedItem.createDate = this.$moment().format('YYYY-MM-DD');
    },
    getCategoryList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/menuapi/get-category-withurl`)
        .then(response => {
          this.categoryList = response.data;
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
    getCharacteryList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/characteryapi/`)
        .then(response => {
          this.characteryList = response.data;
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
    successUpload(e) {
      const image = JSON.parse(e.srcElement.response);
      image.forEach(element => {
        this.editedItem.images.push(element);
      });
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Upload ảnh thành công',
      });
    },
    deleteUpload(e) {
      this.editedItem.images = this.editedItem.images.filter(function(obj) {
        return obj.fileName !== e.name;
      });
    },
    removeImagesItem(value) {
      this.editedItem.images = value;
    },
    removeTag(item) {
      this.editedItem.tags.splice(this.editedItem.tags.indexOf(item), 1);
    },
    removeBuletPoint(item) {
      this.editedItem.buletPoint.splice(
        this.editedItem.buletPoint.indexOf(item),
        1
      );
    },
    async getProductById(id) {
      this.$vs.loading();
      this.editedDataLoaded = false;
      await this.$axios
        .get(`${process.env.API_HTTP}/productapi/single-product/${id}`)
        .then(response => {
          this.editedItem = response.data;
          this.editedDataLoaded = true;
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
    getProductList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/productapi/`)
        .then(response => {
          this.productList = response.data;
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
    saveProduct() {
      this.$vs.loading();
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/productapi/register-product`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo sản phẩm thành công',
            });
            this.getProductList();
            this.resetProperty();
          });
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/productapi/update-product/${this.editedIndex}`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa sản phẩm thành công',
            });

            this.getProductList();
            this.resetProperty();
          });
      }
    },
    deleteProductClick() {
      this.$vs.dialog({
        color: 'primary',
        title: `Xác nhận xóa sản phẩm`,
        text:
          'Bạn không thể khôi phục lại sản phẩm sau khi xóa, nên chỉnh sửa sản phẩm hoặc unpublic nếu không muốn sử dụng',
        accept: this.deleteProduct,
      });
    },
    deleteProduct() {
      this.$vs.loading();
      this.$axios
        .delete(
          `${process.env.API_HTTP}/productapi/delete-product/${this.selected._id}`
        )
        .then(response => {
          this.$vs.notify({
            color: 'success',
            title: 'Xóa thành công',
            text: `${response}`,
          });
          this.$vs.loading.close();
          this.getProductList();
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
    resetProperty() {
      this.editedItem = this.defaultItem;
      this.editedItem.images = [];
    },
    resetPopup() {},
  },
};
</script>
<style lang="scss">
.admin__product__page {
  padding: 0.8rem;
}
.vs-pagination--ul {
  margin-bottom: 0 !important;
}
.con-input-upload {
  margin: 5px !important;
}
.margin__top--4 {
  margin-top: 4rem;
}
.con-chips {
  padding: 0 5px !important;
  box-shadow: none !important;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 31px;
}
.con-vs-chip {
  margin: 0 !important;
}
.con-chips--input {
  padding: 0 9px !important;
  margin: 0 !important;
  min-height: 25px !important;
}
.vs-checkbox--check i {
  font-size: 1rem !important;
}
.vs-select--options .vs-icon {
  font-size: 1rem !important;
}
.vs-select--options .vs-component span {
  font-size: 0.8rem !important;
}
</style>
