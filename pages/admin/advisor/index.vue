<template>
  <div class="admin__advisor__page">
    <div class="row m-0 p-0 my-2">
      <div class="col-12 m-0 p-0">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newAdvisorClick"
              >Tạo mới yêu cầu</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editAdvisorClick"
              >Sửa yêu cầu</vs-button
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
            :data="advisorList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Danh sách yêu cầu tư vấn
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Khách hàng
              </vs-th>
              <vs-th>
                Ngày gửi yêu cầu
              </vs-th>
              <vs-th>
                Ngày tư vấn
              </vs-th>
              <vs-th>
                Trạng thái?
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
                <vs-td :data="data[indextr].fullName">
                  {{ data[indextr].fullName }}
                </vs-td>

                <vs-td :data="data[indextr].createDate">
                  {{ $moment(data[indextr].createDate).format('YYYY-MM-DD') }}
                </vs-td>

                <vs-td :data="data[indextr].modifyDate">
                  {{ $moment(data[indextr].modifyDate).format('YYYY-MM-DD') }}
                </vs-td>

                <vs-td :data="data[indextr].advisorStatus">
                  {{ data[indextr].advisorStatus }}
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <div class="popup">
      <vs-popup fullscreen :title="selected.fullName" :active.sync="editPopup">
        <div class="popup_body">
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-3">
              <vs-input
                v-model="editedItem.fullName"
                label="Họ tên"
                readonly
                placeholder="Hoàng Văn Long"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-3">
              <vs-input
                v-model="editedItem.email"
                label="Email"
                readonly
                placeholder="akx@gmail.com"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-3">
              <vs-input
                v-model="editedItem.phoneNumber"
                label="Số điện thoại"
                readonly
                placeholder="akx@gmail.com"
                class="w-100"
              />
            </div>
            <div class="col-6 col-md-3 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.advisorStatus"
                >Trạng thái tư vấn ?</vs-checkbox
              >
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.request"
                readonly
                counter="200"
                label="Yêu cầu từ khách hàng"
                :counter-danger.sync="counterDanger"
              />
            </div>
          </div>
          <div class="row m-0 p-0 mb-3 border-top">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.advisorDetail"
                counter="1000"
                label="Nhật kí tư vấn"
                :counter-danger.sync="counterDanger"
              />
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
                @click="saveAdvisor"
                >Lưu tư vấn</vs-button
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
  layout: 'adminlayout',
  data: () => ({
    editPopup: false,
    editedDataLoaded: false,
    advisorList: [],
    selected: [],
    editedIndex: -1,
    editedItem: {
      fullName: '',
      email: '',
      phoneNumber: '',
      request: '',
      advisorStatus: false,
      advisorDetail: '',
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
    },
    defaultItem: {
      fullName: '',
      email: '',
      phoneNumber: '',
      request: '',
      advisorStatus: false,
      createDate: '',
      advisorDetail: '',
      modifyDate: '',
      createBy: 'trieumanh',
    },
    counterDanger: false,
  }),
  mounted() {
    this.getAdvisorList();
  },
  methods: {
    editAdvisorClick(index) {
      this.editedIndex = this.selected._id;
      this.getAdvisorById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD');
      });
      this.editPopup = true;
    },
    newAdvisorClick() {
      this.editPopup = true;
      this.editedItem = this.defaultItem;
      this.editedIndex = -1;
      this.editedItem.createDate = this.$moment().format('YYYY-MM-DD');
    },
    async getAdvisorById(id) {
      this.$vs.loading();
      this.editedDataLoaded = false;
      await this.$axios
        .get(`${process.env.API_HTTP}/advisorapi/single-advisor/${id}`)
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
    getAdvisorList() {
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/advisorapi/`)
        .then(response => {
          this.advisorList = response.data;
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
    saveAdvisor() {
      this.$vs.loading();
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/advisorapi/register-advisor`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo yêu cầu sản phẩm thành công',
            });
            this.getAdvisorList();
          });
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/advisorapi/update-advisor/${this.editedIndex}`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa yêu cầu sản phẩm thành công',
            });

            this.getAdvisorList();
          });
      }
    },
  },
};
</script>
<style lang="scss">
.admin__advisor__page {
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
