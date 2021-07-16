export const mutations = {
  /**
   * Add product in cart
   * @param  {Object} productPayload payload must contain base product info + amount of items from user input
   */
  setOrders(state, ordersPayload) {
    state.ordersList = generateOrganisedOrders(ordersPayload);
  },

  clearOrders(state) {
    state.ordersList = {};
  },

  setWasPaid(state) {
    state.ordersList = {};
  },
};
function generateOrganisedOrders(orderProductArray) {
  var organisedOrders = {};
  for (var item of orderProductArray) {
    var usefullData = { ...item };
    delete usefullData["id"];
    delete usefullData["order_id"];
    console.log(usefullData);
    if (item.order_id in organisedOrders) {
      organisedOrders[item.order_id].push(usefullData);
    } else {
      organisedOrders[item.order_id] = [usefullData];
    }
  }
  return organisedOrders;
}
