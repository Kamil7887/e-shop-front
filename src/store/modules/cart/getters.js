export const getters = {
  cartSize: (state) => {
    return Object.keys(state.cart).length;
  },
};
