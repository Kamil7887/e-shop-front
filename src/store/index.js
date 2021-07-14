import { createStore } from "vuex";
import { auth } from "@/store/modules/auth/index";
import { product } from "@/store/modules/product/index";
import { cart } from "@/store/modules/cart/index";
import { order } from "@/store/modules/order/index";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  modules: { auth, product, cart, order },
  plugins: [createPersistedState()],
});
