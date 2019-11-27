export const state = () => ({
  compareItem: 0,
  compareList: [],
  showModalCompare: false,
});
export const mutations = {
  compareItemClick(state, favoItem) {
    if (typeof state.compareList === 'undefined') {
      state.compareList = [favoItem];
      state.compareItem++;
    } else {
      const filtered = state.compareList.filter(function(value, index, arr) {
        return value.url === favoItem.url;
      });
      if (filtered.length === 0) {
        state.compareList.push(favoItem);
        state.compareItem++;
      }
    }
  },
  removeCompareItemClick(state, favoItem) {
    if (typeof state.compareList !== 'undefined') {
      const filtered = state.compareList.filter(function(value, index, arr) {
        return value.url !== favoItem.url;
      });
      state.compareList = filtered;
      state.compareItem = filtered.length;
    }
  },
  showModalCompareClick(state, statusModal) {
    state.showModalCompare = statusModal;
  },
};
