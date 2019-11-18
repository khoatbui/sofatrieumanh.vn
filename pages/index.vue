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
      <FollowUsComponent />
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
};
</script>
