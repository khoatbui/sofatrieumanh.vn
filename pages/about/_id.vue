<template>
  <div class="about__component"></div>
</template>
<script>
export default {
  layout: '',
  data() {
    return {
      about: '',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
};
</script>
