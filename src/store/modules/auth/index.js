import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

export const auth = {
  namespaced: true,
  state: () => ({ user: null, token: null, error: null }),
  mutations: mutations,
  getters: getters,
  actions: actions,
};
