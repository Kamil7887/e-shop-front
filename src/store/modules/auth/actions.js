import * as auth from "@/services/auth/auth";
import {
  LoginException,
  RegisterException,
  UpdateUserException,
} from "../../../services/auth/exceptions";

export const actions = {
  async register({ commit }, payload) {
    try {
      await auth.createUser(payload.email, payload.password);
    } catch (e) {
      console.log(e);
      commit("setRegisterError");
      throw new RegisterException();
    }
  },

  async login({ commit }, payload) {
    try {
      const res_token = await auth.getToken(payload.email, payload.password);
      const res_user = await auth.getUserDetails(res_token.data.token);
      commit("setUser", res_user.data);
      commit("setToken", res_token.data.token);
    } catch {
      commit("setLoginError");
      throw new LoginException();
    }
  },

  async updateUser({ commit }, data) {
    try {
      const payload = data.payload;
      const token = data.token;
      console.log(token);
      console.log(payload);
      const res = await auth.updateUser(token, payload);
      commit("setUser", res.data);
    } catch {
      commit("setUpdateUserError");
      throw new UpdateUserException();
    }
  },

  async logout({ commit }) {
    commit("logout");
  },
};
