export const state = () => ({
  favoriteItem: 0,
  favoriteList: [],
});
export const mutations = {
  favoriteItemClick(state, favoItem) {
    if (typeof state.favoriteList === 'undefined') {
      state.favoriteList = [favoItem];
      state.favoriteItem++;
    } else {
      const filtered = state.favoriteList.filter(function(value, index, arr) {
        return value.url === favoItem.url;
      });
      if (filtered.length === 0) {
        state.favoriteList.push(favoItem);
        state.favoriteItem++;
      }
    }
  },
  removeFavoriteItemClick(state, favoItem) {
    if (typeof state.favoriteList !== 'undefined') {
      const filtered = state.favoriteList.filter(function(value, index, arr) {
        return value.url !== favoItem.url;
      });
      state.favoriteList = filtered;
      state.favoriteItem = filtered.length;
    }
  },
};
