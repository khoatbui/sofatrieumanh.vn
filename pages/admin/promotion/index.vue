<template>
  <div class="admin__promotion__page">
    <div class="row mp--none my-2">
      <div class="col-12 mp--none">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newPromotionClick"
              >Tạo mới khuyến mãi</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editPromotionClick"
              >Sửa khuyến mãi</vs-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row mp--none my-2">
      <div class="col-12 mp--none">
        <div class="card border-0 shadow">
          <vs-table
            v-model="selected"
            :data="promotionList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Chương trình khuyến mãi
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Tên chương trình
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
              <vs-th>
                Thời hạn khuyến mãi
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
                <vs-td :data="data[indextr].promotionName">
                  {{ data[indextr].promotionName }}
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
                <vs-td :data="data[indextr].validDate">
                  {{ $moment(data[indextr].validDate).format('YYYY-MM-DD') }}
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
        :title="selected.promotionName"
        :active.sync="editPopup"
      >
        <div class="popup_body">
          <div class="row mp--none mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.promotionName"
                label="Tên khuyến mãi"
                placeholder="Khuyến mãi chào xuân 2019"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-2 d-flex align-items-end">
              <vs-input
                v-model="editedItem.validDate"
                label="Ngày hết hạn"
                placeholder="2019-09-19"
                class="w-100"
                @click="
                  datePopup = true;
                  pickerBirthday = editedItem.validDate;
                "
              />
              <vs-popup
                class="birthday__popup"
                :button-close-hidden="false"
                :active.sync="datePopup"
              >
                <no-ssr>
                  <v-app>
                    <v-date-picker v-model="pickerBirthday" class="mt-4">
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="datePopup = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="
                          editedItem.validDate = pickerBirthday;
                          datePopup = false;
                        "
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-app>
                </no-ssr>
              </vs-popup>
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isActive">Public ?</vs-checkbox>
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isHot">Hot ?</vs-checkbox>
            </div>
          </div>
          <div class="row mp--none mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.url"
                label="URL khuyến mãi"
                placeholder="khuyen-mai-chao-xuan-2019"
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
          <div class="row mp--none mb-3">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.promotionIntro"
                counter="200"
                label="Mô tả tóm tắt(SEO)"
                :counter-danger.sync="counterDanger"
              />
            </div>
          </div>
          <div class="row mp--none mb-3">
            <div class="col-12">
              <vs-upload
                multiple
                text="Ảnh khuyến mãi"
                :action="`${api}/uploadapi/upload-promotion-img`"
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
          <div class="row mp--none mb-3">
            <div class="col-12">
              <AdminTipTapComponent
                :data-parent="editedItem.content"
                :is-async-completed="editedDataLoaded"
                @childtoparent="editedItem.content = $event"
              />
            </div>
          </div>
          <div class="row mp--none margin__top--4 border-top">
            <div class="col-12 py-2 d-flex justify-content-end">
              <vs-button
                color="danger"
                type="filled"
                class="py-2 px-3 border__radius--none mr-2"
                >Reset</vs-button
              >
              <vs-button
                color="primary"
                type="filled"
                class="py-2 px-3 border__radius--none"
                @click="savePromotion"
                >Lưu khuyến mãi</vs-button
              >
            </div>
          </div>
        </div>
      </vs-popup>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import AdminTipTapComponent from '@/components/AdminTipTapComponent.vue';
import FileListComponent from '@/components/FileListComponent';
export default {
  components: {
    AdminTipTapComponent,
    FileListComponent,
  },
  layout: 'adminlayout',
  data: () => ({
    api: process.env.API_HTTP,
    pickerBirthday: moment().format('YYYY-MM-DD'),
    datePopup: false,
    editPopup: false,
    editedDataLoaded: false,
    selected: [],
    editedIndex: -1,
    editedItem: {
      promotionName: '',
      promotionIntro: '',
      isHot: false,
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
      validDate: '',
      tags: [],
      url: '',
      content: '',
      images: [],
    },
    defaultItem: {
      promotionName: '',
      promotionIntro: '',
      isHot: false,
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
      validDate: '',
      tags: [],
      url: '',
      content: '',
      images: [],
    },
    counterDanger: false,
    promotionList: [],
  }),
  mounted() {
    this.getPromotionList();
    document.querySelector('.con-input-upload input').name = 'imagesx';
  },
  methods: {
    editPromotionClick(index) {
      this.editedIndex = this.selected._id;
      this.getPromotionById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD');
      });
      this.editPopup = true;
    },
    newPromotionClick() {
      this.editPopup = true;
      this.editedItem = this.defaultItem;
      this.editedIndex = -1;
      this.editedItem.createDate = this.$moment().format('YYYY-MM-DD');
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
    async getPromotionById(id) {
      this.$vs.loading();
      this.editedDataLoaded = false;
      await this.$axios
        .get(`${process.env.API_HTTP}/promotionapi/single-promotion/${id}`)
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
    getPromotionList() {
      this.$vs.loading();
      this.$axios
        .get('/api/promotionapi/')
        .then(response => {
          this.promotionList = response.data;
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
    savePromotion() {
      this.$vs.loading();
      if (this.editedIndex === -1) {
        this.$axios
          .post('/api/promotionapi/register-promotion', this.editedItem)
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo khuyến mãi thành công',
            });
            this.getPromotionList();
          });
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/promotionapi/update-promotion/${this.editedIndex}`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa khuyến mãi thành công',
            });

            this.getPromotionList();
          });
      }
    },
  },
};
</script>
<style lang="scss">
.admin__promotion__page {
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
.birthday__popup .v-application--wrap {
  min-height: 100px !important;
}
.birthday__popup {
  border-radius: 5px;
}
.birthday__popup .vs-popup {
  width: 300px !important;
}
.birthday__popup .vs-popup--header {
  display: none !important;
}
.birthday__popup .vs-popup--content {
  width: 100%;
  border-radius: 5px;
  padding: 0 !important;
  margin: 0 !important;
}
.birthday__popup .v-picker.v-card.v-picker--date.mt-4.theme--light {
  margin: 0 !important;
}
.birthday__popup .v-btn.v-btn--active.v-btn--rounded.theme--light.accent {
  background-color: $primary__color !important;
}
</style>
