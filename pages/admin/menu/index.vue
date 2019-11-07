<template>
  <div class="admin__menu__page">
    <div class="row mp--none my-2">
      <div class="col-12 mp--none">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              @click="newMenuClick"
              >Add new</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editMenuClick"
              >Edit</vs-button
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
            :data="menuList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Menu / News
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Menu name
              </vs-th>
              <vs-th>
                CreateDate
              </vs-th>
              <vs-th>
                ModifyDate
              </vs-th>
              <vs-th>
                IsActive
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
                <vs-td :data="data[indextr].menuName">
                  {{ data[indextr].menuName }}
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
      <vs-popup fullscreen :title="selected.menuName" :active.sync="editPopup">
        <div class="popup_body">
          <div class="row mp--none mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.menuName"
                label="Tên menu"
                placeholder="Ghế sofa"
                class="w-100"
                :danger="errorCheck.dangerFiel === 'menuName'"
                :danger-text="errorCheck.dangerText"
              />
            </div>
            <div class="col-12 col-md-6">
              <vs-select
                v-model="editedItem.parentMenu"
                placeholder="Select..."
                multiple
                autocomplete
                class="w-100"
                label="Parent Menu"
              >
                <vs-select-item
                  v-for="(item, index) in parentMenuList"
                  :key="index"
                  :value="item._id"
                  :text="item.menuName"
                />
              </vs-select>
            </div>
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.url"
                label="URL"
                placeholder="ghe-sofa"
                class="w-100"
                :danger="errorCheck.dangerFiel === 'url'"
                :danger-text="errorCheck.dangerText"
              />
            </div>
            <div class="col-6 col-md-2 my-4 my-md-0 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isActive">Public ?</vs-checkbox>
            </div>
          </div>
          <div class="row mp--none mb-3">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.menuIntro"
                counter="200"
                label="Mô tả tóm tắt (SEO)"
                :counter-danger.sync="counterDanger"
                :danger="errorCheck.dangerFiel === 'menuIntro'"
                :danger-text="errorCheck.dangerText"
                :class="{
                  'border-danger': errorCheck.dangerFiel === 'menuIntro'
                }"
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
                @click="saveMenu"
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
    counterDanger: false,
    menuList: [],
    selected: [],
    editedIndex: -1,
    parentMenuList: [],
    errorCheck: {
      dangerFiel: '',
      dangerText: ''
    },
    editedItem: {
      menuName: '',
      url: '',
      menuIntro: '',
      parentMenu: [],
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh'
    },
    defaultItem: {
      menuName: '',
      menuIntro: '',
      parentMenu: [],
      url: '',
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh'
    }
  }),
  mounted() {
    this.getMenuList()
    this.getParentMenuList()
  },
  methods: {
    editMenuClick(index) {
      this.editedIndex = this.selected._id
      this.getMenuById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD')
      })
      this.editPopup = true
    },
    newMenuClick() {
      this.editPopup = true
      this.editedItem = this.defaultItem
      this.editedIndex = -1
      this.editedItem.createDate = this.$moment().format('YYYY-MM-DD')
    },
    async getMenuById(id) {
      this.$vs.loading()
      this.editedDataLoaded = false
      await this.$axios
        .get(`${process.env.API_HTTP}/api/menuapi/single-menu/${id}`)
        .then((response) => {
          this.editedItem = response.data
          this.editedDataLoaded = true
          this.$vs.loading.close()
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Opps!',
            text: error
          })
        })
        .finally(() => {
          this.$vs.loading.close()
        })
    },
    getMenuList() {
      this.$vs.loading()
      this.$axios
        .get(`${process.env.API_HTTP}/api/menuapi/`)
        .then((response) => {
          this.menuList = response.data
          this.$vs.loading.close()
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Opps!',
            text: error
          })
        })
        .finally(() => {
          this.$vs.loading.close()
        })
    },
    getParentMenuList() {
      this.$vs.loading()
      this.$axios
        .get(`${process.env.API_HTTP}/api/menuapi/`)
        .then((response) => {
          this.parentMenuList = response.data
          this.$vs.loading.close()
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Opps!',
            text: error
          })
        })
        .finally(() => {
          this.$vs.loading.close()
        })
    },
    saveMenu() {
      if (!this.validation()) {
        return
      }
      this.$vs.loading()
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/api/menuapi/register-menu`,
            this.editedItem
          )
          .then((result) => {
            this.$vs.loading.close()
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo menu thành công'
            })
            this.getMenuList()
            this.getParentMenuList()
          })
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/api/menuapi/update-menu/${this.editedIndex}`,
            this.editedItem
          )
          .then((result) => {
            this.$vs.loading.close()
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa menu thành công'
            })

            this.getMenuList()
            this.parentMenuList()
          })
      }
    },
    validation() {
      if (this.editedItem.menuName.length === 0) {
        this.errorCheck = {
          dangerFiel: 'menuName',
          dangerText: 'Menu không để trống'
        }
      } else if (this.editedItem.menuIntro.length === 0) {
        this.errorCheck = {
          dangerFiel: 'menuIntro',
          dangerText: 'Mô tả menu không để trống'
        }
      } else if (this.editedItem.url.length === 0) {
        this.errorCheck = {
          dangerFiel: 'url',
          dangerText: 'Url không để trống'
        }
      } else {
        this.errorCheck = {
          dangerFiel: '',
          dangerText: ''
        }
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss">
.admin__menu__page {
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
.border-danger {
  border: 1px solid rgba(255, 71, 87, 1) !important;
}
</style>
