<template>
  <div class="admin__charactery__page">
    <div class="row m-0 p-0 my-2">
      <div class="col-12 m-0 p-0">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newCharacteryClick"
              >Tạo mới đặc điểm</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editCharacteryClick"
              >Sửa đặc điểm</vs-button
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
            :data="characteryList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Đặc điểm/ cấu tạo sản phẩm
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Tên đặc điểm
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
                <vs-td :data="data[indextr].characteryName">
                  {{ data[indextr].characteryName }}
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
        :title="selected.characteryName"
        :active.sync="editPopup"
      >
        <div class="popup_body">
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.characteryName"
                label="Tên đặc điểm sản phẩm"
                placeholder="Chân sắt"
                class="w-100"
              />
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isActive">Public ?</vs-checkbox>
            </div>
          </div>
          <div class="row m-0 p-0 margin__top--4 border-top">
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
                @click="saveCharactery"
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
  layout: 'adminlayout',
  data: () => ({
    editPopup: false,
    editedDataLoaded: false,
    characteryList: [],
    selected: [],
    editedIndex: -1,
    editedItem: {
      characteryName: '',
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
    },
    defaultItem: {
      characteryName: '',
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
    },
  }),
  mounted() {
    this.getCharacteryList();
  },
  methods: {
    editCharacteryClick(index) {
      this.editedIndex = this.selected._id;
      this.getCharacteryById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD');
      });
      this.editPopup = true;
    },
    newCharacteryClick() {
      this.editPopup = true;
      this.editedItem = this.defaultItem;
      this.editedIndex = -1;
      this.editedItem.createDate = this.$moment().format('YYYY-MM-DD');
    },
    async getCharacteryById(id) {
      this.$vs.loading();
      this.editedDataLoaded = false;
      await this.$axios
        .get(`${process.env.API_HTTP}/characteryapi/single-charactery/${id}`)
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
    saveCharactery() {
      this.$vs.loading();
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/characteryapi/register-charactery`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo đặc điểm sản phẩm thành công',
            });
            this.getCharacteryList();
          });
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/characteryapi/update-charactery/${this.editedIndex}`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa đặc điểm sản phẩm thành công',
            });

            this.getCharacteryList();
          });
      }
    },
  },
};
</script>
<style lang="scss">
.admin__charactery__page {
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
