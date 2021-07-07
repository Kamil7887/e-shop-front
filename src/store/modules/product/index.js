import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const product = {
  namespaced: true,
  state: () => ({ productsList: null, error: null, selectedProduct: null }),
  mutations: mutations,
  getters: getters,
  actions: actions,
};
