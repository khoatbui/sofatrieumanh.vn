<template>
  <div class="admin__about__page">
    <div class="row m-0 p-0 my-2">
      <div class="col-12 m-0 p-0">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newAboutClick"
              >Tạo mới bài viết</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editAboutClick"
              >Sửa bài viết</vs-button
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
            :data="aboutList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                About / Help/ Hướng dẫn
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Tên bài viết
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
                <vs-td :data="data[indextr].aboutName">
                  {{ data[indextr].aboutName }}
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
      <vs-popup fullscreen :title="selected.aboutName" :active.sync="editPopup">
        <div class="popup_body">
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-5">
              <vs-input
                v-model="editedItem.aboutName"
                label="Tên bài viết"
                placeholder="5 bước để có chiếc sofa đẹp"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-5">
              <vs-input
                v-model="editedItem.url"
                label="URL bài viết"
                placeholder="5-buoc-de-co-mot-so-fa-dep"
                class="w-100"
              />
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isActive">Public ?</vs-checkbox>
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.aboutIntro"
                counter="200"
                label="Mô tả tóm tắt(SEO)"
                :counter-danger.sync="counterDanger"
              />
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12">
              <vs-upload
                multiple
                text="Ảnh bài viết"
                :action="`${api}/uploadapi/upload-about-img`"
                @on-success="successUpload"
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
                @click="saveAbout"
                >Lưu bài viết</vs-button
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
      selected: [],
      editedIndex: -1,
      editedItem: {
        aboutName: '',
        aboutIntro: '',
        isActive: true,
        createDate: '',
        modifyDate: '',
        createBy: 'trieumanh',
        url: '',
        content: '',
        images: [],
      },
      defaultItem: {
        aboutName: '',
        aboutIntro: '',
        isActive: true,
        createDate: '',
        modifyDate: '',
        createBy: 'trieumanh',
        url: '',
        content: '',
        images: [],
      },
      counterDanger: false,
      aboutList: [],
    };
  },
  mounted() {
    this.getAboutList();
    document.querySelector('.con-input-upload input').name = 'imagesx';
  },
  methods: {
    editAboutClick(index) {
      this.editedIndex = this.selected._id;
      this.getAboutById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD');
      });
      this.editPopup = true;
    },
    newAboutClick() {
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
    removeImagesItem(value) {
      this.editedItem.images = value;
    },
    removeTag(item) {
      this.editedItem.tags.splice(this.editedItem.tags.indexOf(item), 1);
    },
    async getAboutById(id) {
      this.$vs.loading();
      this.editedDataLoaded = false;
      await this.$axios
        .get(`${process.env.API_HTTP}/aboutapi/single-about/${id}`)
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
    saveAbout() {
      this.$vs.loading();
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/aboutapi/register-about`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo bài viết thành công',
            });
            this.getAboutList();
          });
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/aboutapi/update-about/${this.editedIndex}`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa bài viết thành công',
            });

            this.getAboutList();
          });
      }
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
.admin__about__page {
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
</style>
