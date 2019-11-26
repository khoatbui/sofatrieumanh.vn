export const state = () => ({
  loginStatus: false,
});
export const mutations = {
  changeLoginStatus(state, status) {
    state.loginStatus = status;
  },
};
