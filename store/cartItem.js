export const state = () => ({
  cartItem: 0,
  cartList: [],
});
export const mutations = {
  cartItemClick(state, cartItem) {
    if (typeof state.cartList === 'undefined') {
      state.cartList = [cartItem];
      state.cartItem++;
    } else {
      const filtered = state.cartList.filter(function(value, index, arr) {
        return value.url === cartItem.url;
      });
      if (filtered.length === 0) {
        state.cartList.push(cartItem);
        state.cartItem++;
      }
    }
  },
  removeCartItemClick(state, cartItem) {
    if (typeof state.cartList !== 'undefined') {
      const filtered = state.cartList.filter(function(value, index, arr) {
        return value.url !== cartItem.url;
      });
      state.cartList = filtered;
      state.cartItem = filtered.length;
    }
  },
};
