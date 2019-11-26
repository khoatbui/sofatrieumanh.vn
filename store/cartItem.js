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
        return value.product.url === cartItem.product.url;
      });
      if (filtered.length === 0) {
        state.cartList.push(cartItem);
        state.cartItem++;
      } else {
        const objIndex = state.cartList.findIndex(
          age => age.product.url === cartItem.product.url
        );
        state.cartList[objIndex].qty = cartItem.qty;
      }
    }
  },
  removeCartItemClick(state, cartItem) {
    if (typeof state.cartList !== 'undefined') {
      const filtered = state.cartList.filter(function(value, index, arr) {
        return value.product.url !== cartItem.product.url;
      });
      state.cartList = filtered;
      state.cartItem = filtered.length;
    }
  },
  plusItem(state, cartItemPlus) {
    const objIndex = state.cartList.findIndex(
      age => age.product.url === cartItemPlus.product.url
    );
    state.cartList[objIndex].qty++;
  },
  minusItem(state, cartItem) {
    const objIndex = state.cartList.findIndex(
      age => age.product.url === cartItem.product.url
    );
    state.cartList[objIndex].qty--;
  },
  removeOrderdItems(state, cartItems) {
    if (typeof state.cartList !== 'undefined') {
      let filtered = state.cartList;
      cartItems.forEach(cartItem => {
        filtered = filtered.filter(function(value, index, arr) {
          return value.product.url !== cartItem.product.url;
        });
      });
      state.cartList = filtered;
      state.cartItem = filtered.length;
    }
  },
};
