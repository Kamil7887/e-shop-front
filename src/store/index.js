import { createStore } from "vuex";
import { auth } from "@/store/modules/auth/index";
import { product } from "@/store/modules/product/index";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  modules: { auth: auth, product: product },
  plugins: [createPersistedState()],
});
