import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      paths: [
        'favoriteItem.favoriteItem',
        'favoriteItem.favoriteList',
        'cartItem.cartItem',
        'cartItem.cartList',
        'login.loginStatus',
      ],
    })(store);
  });
};
