export const state = () => ({
  dictionary: {
    top__headerpromotion: 'Hello',
  },
});

export const getters = {};

export const mutations = {
  setDictionary(state, newDiction) {
    state.dictionary = newDiction;
  },
};
