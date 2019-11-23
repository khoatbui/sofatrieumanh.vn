<template>
  <div class="admin__dictionary__page">
    <div class="row mp--none my-2">
      <div class="col-12 mp--none">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newDictionaryClick"
              >Tạo mới từ điển</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editDictionaryClick"
              >Sửa từ điển</vs-button
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
            :data="dictionaryList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Danh sách từ điển
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Tên từ điển
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
                <vs-td :data="data[indextr].dictionaryName">
                  {{ data[indextr].dictionaryName }}
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
        :title="selected.dictionaryName"
        :active.sync="editPopup"
      >
        <div class="popup_body">
          <div class="row mp--none mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.dictionaryCode"
                label="Mã từ điển"
                placeholder="home__topheader"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.dictionaryName"
                label="Tên từ điển"
                placeholder="Khuyen mai khung 20/10"
                class="w-100"
              />
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isActive">Public ?</vs-checkbox>
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
                @click="saveDictionary"
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
    dictionaryList: [],
    selected: [],
    editedIndex: -1,
    editedItem: {
      dictionaryCode: '',
      dictionaryName: '',
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
    },
    defaultItem: {
      dictionaryCode: '',
      dictionaryName: '',
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
    },
  }),
  mounted() {
    this.getDictionaryList();
  },
  methods: {
    editDictionaryClick(index) {
      this.editedIndex = this.selected._id;
      this.getDictionaryById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD');
      });
      this.editPopup = true;
    },
    newDictionaryClick() {
      this.editPopup = true;
      this.editedItem = this.defaultItem;
      this.editedIndex = -1;
      this.editedItem.createDate = this.$moment().format('YYYY-MM-DD');
    },
    async getDictionaryById(id) {
      this.$vs.loading();
      this.editedDataLoaded = false;
      await this.$axios
        .get(`${process.env.API_HTTP}/dictionaryapi/single-dictionary/${id}`)
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
    getDictionaryList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/dictionaryapi/`)
        .then(response => {
          this.dictionaryList = response.data;
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
    saveDictionary() {
      this.$vs.loading();
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/dictionaryapi/register-dictionary`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo từ điển  thành công',
            });
            this.getDictionaryList();
          });
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/dictionaryapi/update-dictionary/${this.editedIndex}`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa từ điển  thành công',
            });

            this.getDictionaryList();
          });
      }
    },
  },
};
</script>
<style lang="scss">
.admin__dictionary__page {
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
