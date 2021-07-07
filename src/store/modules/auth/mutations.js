import {
  RegisterException,
  LoginException,
} from "../../../services/auth/exceptions";

export const mutations = {
  setUser(state, userData) {
    state.user = userData;
  },
  setToken(state, token) {
    state.token = token;
  },
  logout(state) {
    state.user = null;
    state.token = null;
  },
  setRegisterError(state) {
    state.error = new RegisterException();
  },
  setLoginError(state) {
    state.error = new LoginException();
  },
  setUpdateUserError(state) {
    state.error = new RegisterException();
  },
  resetError(state) {
    state.error = null;
  },
};
