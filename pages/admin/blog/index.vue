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
              @click="newBlogClick"
              >Tạo mới bài viết</vs-button
            >
            <vs-button
              color="primary"
              type="filled"
              class="py-2 px-3 border__radius--none"
              @click="editBlogClick"
              >Sửa bài viết</vs-button
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
            :data="blogList"
            pagination
            max-items="7"
            search
          >
            <template slot="header">
              <h3 class="p-2">
                Blog / Tin tức/ Hướng dẫn
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
                <vs-td :data="data[indextr].blogName">
                  {{ data[indextr].blogName }}
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
      <vs-popup fullscreen :title="selected.blogName" :active.sync="editPopup">
        <div class="popup_body">
          <div class="row mp--none mb-3">
            <div class="col-12 col-md-6">
              <vs-input
                v-model="editedItem.blogName"
                label="Tên bài viết"
                placeholder="5 bước để có chiếc sofa đẹp"
                class="w-100"
              />
            </div>
            <div class="col-12 col-md-2 d-flex align-items-end">
              <vs-input
                v-model="editedItem.source"
                label="Nguồn"
                placeholder="kenh14.vn"
                class="w-100"
              />
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
                label="URL bài viết"
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
          <div class="row mp--none mb-3">
            <div class="col-12">
              <vs-textarea
                v-model="editedItem.blogIntro"
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
                text="Ảnh bài viết"
                action="/api/uploadapi/upload-blog-img"
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
                @click="resetPopup"
                >Reset</vs-button
              >
              <vs-button
                color="primary"
                type="filled"
                class="py-2 px-3 border__radius--none"
                @click="saveBlog"
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
import FileListComponent from '@/components/FileListComponent'
export default {
  components: {
    AdminTipTapComponent,
    FileListComponent
  },
  layout: 'adminlayout',
  data: () => ({
    editPopup: false,
    editedDataLoaded: false,
    selected: [],
    editedIndex: -1,
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
      url: '',
      content: '',
      images: []
    },
    defaultItem: {
      blogName: '',
      blogIntro: '',
      isHot: false,
      isActive: true,
      createDate: '',
      modifyDate: '',
      createBy: 'trieumanh',
      source: '',
      tags: [],
      url: '',
      content: '',
      images: []
    },
    counterDanger: false,
    blogList: []
  }),
  mounted() {
    this.getBlogList()
    document.querySelector('.con-input-upload input').name = 'imagesx'
  },
  methods: {
    editBlogClick(index) {
      this.editedIndex = this.selected._id
      this.getBlogById(this.selected._id).then(() => {
        this.editedItem.modifyDate = this.$moment().format('YYYY-MM-DD')
      })
      this.editPopup = true
    },
    newBlogClick() {
      this.editPopup = true
      this.editedItem = this.defaultItem
      this.editedIndex = -1
      this.editedItem.createDate = this.$moment().format('YYYY-MM-DD')
    },
    successUpload(e) {
      const image = JSON.parse(e.srcElement.response)
      image.forEach((element) => {
        this.editedItem.images.push(element)
      })
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Upload ảnh thành công'
      })
    },
    removeImagesItem(value) {
      this.editedItem.images = value
    },
    removeTag(item) {
      this.editedItem.tags.splice(this.editedItem.tags.indexOf(item), 1)
    },
    async getBlogById(id) {
      this.$vs.loading()
      this.editedDataLoaded = false
      await this.$axios
        .get(`${process.env.API_HTTP}/api/blogapi/single-blog/${id}`)
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
    getBlogList() {
      this.$vs.loading()
      this.$axios
        .get(`${process.env.API_HTTP}/api/blogapi/`)
        .then((response) => {
          this.blogList = response.data
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
    saveBlog() {
      this.$vs.loading()
      if (this.editedIndex === -1) {
        this.$axios
          .post(
            `${process.env.API_HTTP}/api/blogapi/register-blog`,
            this.editedItem
          )
          .then((result) => {
            this.$vs.loading.close()
            this.$vs.notify({
              color: 'success',
              title: 'Create Success',
              text: 'Tạo bài viết thành công'
            })
            this.getBlogList()
          })
      } else {
        this.$axios
          .put(
            `${process.env.API_HTTP}/api/blogapi/update-blog/${this.editedIndex}`,
            this.editedItem
          )
          .then((result) => {
            this.$vs.loading.close()
            this.$vs.notify({
              color: 'success',
              title: 'Update Success',
              text: 'Sửa bài viết thành công'
            })

            this.getBlogList()
          })
      }
    },
    resetProperty() {
      this.editedItem = this.defaultItem
      this.editedItem.images = []
    },
    resetPopup() {}
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
