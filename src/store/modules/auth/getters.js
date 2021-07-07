export const getters = {
  isAuthenticated: (state) => {
    return state.token == null ? false : true;
  },
  user: (state) => state.user,
};
