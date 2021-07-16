import {
  getOrderProductItems,
  payOrder,
} from "../../../repository/orders/orders_repository";
import { OrderException } from "@/repository/orders/orders_exceptions";
export const actions = {
  async getOrders({ commit }, data) {
    try {
      const token = data.token;
      const res = await getOrderProductItems(token);
      commit("setOrders", res.data);
    } catch (e) {
      commit("setOrderException");
      throw new OrderException();
    }
  },
  async payOrder({ dispatch, commit }, data) {
    try {
      const token = data.token;
      const orderId = data.orderId;
      await payOrder(orderId, token);
      dispatch("getOrders", data);
    } catch (e) {
      commit("setOrderException");
      throw new OrderException();
    }
  },
};
