export const state = () => ({
  favoriteItem: 0,
  favoriteList: [],
});
export const mutations = {
  favoriteItemClick(state, favoItem) {
    state.favoriteItem++;
    if (typeof state.favoriteList === 'undefined') {
      state.favoriteList = [favoItem];
    } else {
      state.favoriteList.push(favoItem);
    }
  },
};
