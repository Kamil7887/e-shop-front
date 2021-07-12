export const mutations = {
  /**
   * Add product in cart
   * @param  {Object} productPayload payload must contain base product info + amount of items from user input
   */
  addToCart(state, productPayload) {
    const existingProducts = state.productIndexes;
    if (productPayload.amount == 0) return;
    if (existingProducts.includes(productPayload.id))
      state.cart[productPayload.id].amount += parseInt(productPayload.amount);
    else {
      state.productIndexes.push(productPayload.id);
      state.cart[productPayload.id] = productPayload;
    }
  },
  clearCart(state) {
    state.cart = {};
    state.productIndexes = [];
  },
};
