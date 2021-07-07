import * as products from "@/repository/products/products_repository";
import { ProductsException } from "@/repository/products/products_exceptions";

export const actions = {
  async getProductsList({ commit }) {
    try {
      const res = await products.getProducts();
      commit("setProductsList", res.data);
    } catch (e) {
      console.log(e);
      commit("setProductsException");
      throw new ProductsException();
    }
  },
};
