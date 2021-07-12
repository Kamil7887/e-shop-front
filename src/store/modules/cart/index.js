import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const cart = {
  namespaced: true,
  state: () => ({ cart: {}, productIndexes: [] }),
  mutations: mutations,
  getters: getters,
  actions: actions,
};
