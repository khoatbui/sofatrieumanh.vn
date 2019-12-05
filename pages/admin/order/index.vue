<template>
  <div class="admin__order__page">
    <div class="row m-0 p-0 my-2">
      <div class="col-12 m-0 p-0">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newOrderClick"
              >Xác nhận đơn hàng</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editOrderClick"
              >Sửa đơn hàng</vs-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 my-2">
      <div class="col-12 m-0 p-0">
        <div v-if="completedData" class="card border-0 shadow">
          <vs-table
            v-model="selected"
            :data="orderList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Danh sách đơn hàng
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Mã đơn hàng
              </vs-th>
              <vs-th>
                Tên khách hàng
              </vs-th>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Số điện thoại
              </vs-th>
              <vs-th>
                Ngày tạo đơn
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
                <vs-td :data="data[indextr].transactionCode">
                  {{ data[indextr].transactionCode }}
                </vs-td>

                <vs-td :data="data[indextr].customer.fullName">
                  {{ data[indextr].customer.fullName }}
                </vs-td>
                <vs-td :data="data[indextr].customer.email">
                  {{ data[indextr].customer.email }}
                </vs-td>
                <vs-td :data="data[indextr].customer.phoneNumber">
                  {{ data[indextr].customer.phoneNumber }}
                </vs-td>
                <vs-td :data="data[indextr].createDate">
                  {{ $moment(data[indextr].createDate).format('YYYY-MM-DD') }}
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
          <div class="row m-0 p-0 mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.customer.fullName"
                label="Họ tên khách hàng"
                placeholder="Hoang Van A"
                class="w-100"
                readonly
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.customer.email"
                label="Email khách hàng"
                placeholder="cokiea@gmail.com"
                class="w-100"
                readonly
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.customer.phoneNumber"
                label="Số điện thoại khách hàng"
                placeholder="09205930594"
                class="w-100"
                readonly
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.address"
                label="Địa chỉ giao hàng"
                placeholder="113 Trung Kinh, Cau Giay"
                class="w-100"
                readonly
              />
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isCall"
                >Gọi cho khách ?</vs-checkbox
              >
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isPackage"
                >Đã đóng gói chưa ?</vs-checkbox
              >
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isDelivery"
                >Đã giao hàng chưa ?</vs-checkbox
              >
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isFinish"
                >Khách đã nhận hàng ?</vs-checkbox
              >
            </div>
          </div>
          <div class="row m-0 p-0 mb-3">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.comment"
                counter="200"
                label="Yêu cầu của khách"
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
                @click="savePromotion"
                >Cập nhập đơn hàng</vs-button
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
// import AdminTipTapComponent from '@/components/AdminTipTapComponent.vue';
// import FileListComponent from '@/components/FileListComponent';
export default {
  middleware: 'authentication',
  components: {
    // AdminTipTapComponent,
    // FileListComponent,
  },
  layout: 'adminlayout',
  data() {
    return {
      api: process.env.API_HTTP,
      pickerBirthday: moment().format('YYYY-MM-DD'),
      datePopup: false,
      editPopup: false,
      editedDataLoaded: false,
      selected: [],
      editedIndex: -1,
      editedItem: {
        customer: {},
        address: '',
        comment: '',
        totalPrice: 0,
        products: [],
        transactionCode: '',
        createDate: '',
        modifyDate: '',
        createBy: 'trieumanh',
      },
      defaultItem: {
        customer: {},
        address: '',
        comment: '',
        totalPrice: 0,
        products: [],
        transactionCode: '',
        createDate: '',
        modifyDate: '',
        createBy: 'trieumanh',
      },
      counterDanger: false,
      orderList: [],
      completedData: false,
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    editOrderClick(index) {
      this.editedIndex = this.selected._id;
      this.getOrderById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD');
      });
      this.editPopup = true;
    },
    newOrderClick() {
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
    async getOrderById(id) {
      this.$vs.loading();
      this.editedDataLoaded = false;
      await this.$axios
        .get(`${process.env.API_HTTP}/orderapi/single-order/${id}`)
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
    getOrderList() {
      this.completedData = false;
      this.$vs.loading();
      this.$axios
        .get(`${process.env.API_HTTP}/orderapi/`)
        .then(response => {
          this.orderList = response.data;
          this.completedData = true;
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
    saveOrder() {
      this.$vs.loading();
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/orderapi/register-order`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo khuyến mãi thành công',
            });
            this.getOrderList();
          });
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/orderapi/update-order/${this.editedIndex}`,
            this.editedItem
          )
          .then(result => {
            this.$vs.loading.close();
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa khuyến mãi thành công',
            });

            this.getOrderList();
          });
      }
    },
  },
};
</script>
<style lang="scss">
.admin__order__page {
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
