<template>
  <div class="admin__blog__page">
    <div class="row mp--none my-2">
      <div class="col-12 mp--none">
        <div class="card border-0 shadow">
          <div class="card-body d-flex justify-content-end align-items-center">
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none border-right"
              >Add new</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editBlog"
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
            :data="users"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Blog / News
              </h3>
            </template>
            <template slot="thead">
              <vs-th>
                Blog name
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
                <vs-td :data="data[indextr].blogName">
                  {{ data[indextr].blogName }}
                </vs-td>

                <vs-td :data="data[indextr].createDate">
                  {{ data[indextr].createDate }}
                </vs-td>

                <vs-td :data="data[indextr].modifyDate">
                  {{ data[indextr].modifyDate }}
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
      <vs-popup fullscreen :title="selected.blogName" :active.sync="editPopup">
        <div class="popup_body">
          <div class="row mp--none mb-3">
            <div class="col-6">
              <vs-input
                v-model="editedItem.blogName"
                label="Tên bài viết"
                placeholder="5 bước để có chiếc sofa đẹp"
                class="w-100"
              />
            </div>
            <div class="col-2 d-flex align-items-end">
              <vs-input
                v-model="editedItem.source"
                label="Nguồn"
                placeholder="kenh14.vn"
                class="w-100"
              />
            </div>
            <div class="col-2 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isActive">Public ?</vs-checkbox>
            </div>
            <div class="col-2 d-flex align-items-end">
              <vs-checkbox v-model="editedItem.isHot">Hot ?</vs-checkbox>
            </div>
          </div>
          <div class="row mp--none mb-3">
            <div class="col-6">
              <vs-input
                v-model="editedItem.url"
                label="URL bài viết"
                placeholder="5-buoc-de-co-mot-so-fa-dep"
                class="w-100"
              />
            </div>
            <div class="col-6 d-flex align-items-end">
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
                v-model="editedItem.blogIntro"
                counter="100"
                label="Mô tả tóm tắt"
                :counter-danger.sync="counterDanger"
              />
            </div>
          </div>
          <div class="row mp--none mb-3">
            <div class="col-12">
              <vs-upload
                multiple
                text="Ảnh bài viết"
                action="https://jsonplaceholder.typicode.com/posts/"
                @on-success="successUpload"
              />
            </div>
          </div>
          <div class="row mp--none mb-3">
            <div class="col-12">
              <AdminTipTapComponent />
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
import AdminTipTapComponent from '@/components/AdminTipTapComponent.vue'

export default {
  components: {
    AdminTipTapComponent
  },
  layout: 'adminlayout',
  data: () => ({
    editPopup: false,
    selected: [],
    editedItem: {
      blogName: '',
      blogIntro: '',
      isHot: false,
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
      source: '',
      tags: [],
      url: ''
    },
    counterDanger: false,
    users: [
      {
        id: 1,
        blogName: 'Leanne Graham Samuel',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 2,
        blogName: 'Leanne Graham Gosure',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 3,
        blogName: 'Cam Leanne Graham',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 4,
        blogName: 'Marco Leanne Graham',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 5,
        blogName: 'Leanne Graham Alex',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 6,
        blogName: 'Leanne FillJohn Graham',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 7,
        blogName: 'Leanne Graham',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 8,
        blogName: 'Leanne Graham',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 9,
        blogName: 'Leanne Graham',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      },
      {
        id: 10,
        blogName: 'Leanne Graham',
        createDate: 'Bret',
        modifyDate: 'Sincere@april.biz',
        isActive: true,
        source: 'kenh14.vn'
      }
    ]
  }),
  methods: {
    editBlog() {
      this.editPopup = true
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    removeTag(item) {
      this.editedItem.tags.splice(this.editedItem.tags.indexOf(item), 1)
    }
  }
}
</script>
<style lang="scss">
.admin__blog__page {
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
.con-chips--input {
  padding: 0 9px !important;
}
</style>
