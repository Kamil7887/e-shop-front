import * as products from "@/repository/products/products_repository";
import { ProductsException } from "@/repository/products/products_exceptions";

export const actions = {
  async getCartSize({ commit }) {
    try {
      const res = await products.getProducts();
      commit("setProductsList", res.data);
    } catch (e) {
      commit("setProductsException");
      throw new ProductsException();
    }
  },
};
