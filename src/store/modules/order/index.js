import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const order = {
  namespaced: true,
  state: () => ({ ordersObject: {} }),
  mutations: mutations,
  getters: getters,
  actions: actions,
};
