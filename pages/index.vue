<template>
  <div class="home__page">
    <section class="new__category">
      <NewCategory />
    </section>
    <section class="hot__promotion section__margin--b">
      <HotPromotion />
    </section>
    <section class="section__margin--y">
      <div class="container">
        <TopProductComponent />
      </div>
    </section>
    <section class="section__margin--y">
      <div class="container">
        <HotBlogComponent />
      </div>
    </section>
    <section class="section__margin--y">
      <div class="container">
        <SubscribeComponent />
      </div>
    </section>
    <section class="section__margin--y">
      <div class="container">
        <FollowUsComponent />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'homelayout',
  components: {
    NewCategory: () => import('@/components/v.2/NewCategory'),
    HotPromotion: () => import('@/components/v.2/HotPromotion'),
    TopProductComponent: () => import('@/components/v.2/TopProductComponent'),
    HotBlogComponent: () => import('@/components/v.2/HotBlogComponent'),
    FollowUsComponent: () => import('@/components/v.2/FollowUsComponent'),
    SubscribeComponent: () => import('@/components/v.2/SubscribeComponent'),
  },
  fetch({ store, params, $axios }) {
    return $axios
      .get(`${process.env.API_HTTP}/dictionaryapi/used`)
      .then(res => {
        store.commit(
          'dictionary/setDictionary',
          res.data.reduce(
            (acc, cur) => ({
              ...acc,
              [cur.dictionaryCode]: cur.dictionaryName,
            }),
            {}
          )
        );
      });
  },
  head() {
    return {
      title: 'sofatrieumanh.com',
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
