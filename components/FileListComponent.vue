<template>
  <div class="filelist__component">
    <div
      v-for="(image, index) in fileList"
      :key="index + 'imagelist'"
      class="image__item"
    >
      <img :src="image.path" alt="" />
      <vs-button
        radius
        color="danger"
        type="flat"
        icon="clear"
        class="absolute__delete"
        @click="deleteItem(image)"
      ></vs-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fileList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteItem(item) {
      const list = this.fileList.filter(function(value, index, arr) {
        return value.fileName !== item.fileName;
      });
      this.$emit('deleteditem', list);
    },
  },
};
</script>
<style lang="scss">
.filelist__component {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.image__item {
  position: relative;
  margin: 0.4rem;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  border: 1px dashed;
  overflow: hidden;
}
.image__item img {
  height: 100px;
  width: 100px;
}
.absolute__delete {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
