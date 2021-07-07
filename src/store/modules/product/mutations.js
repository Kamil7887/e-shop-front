import { ProductsException } from "@/repository/products/products_exceptions";

export const mutations = {
  setProductsList(state, productsList) {
    state.productsList = productsList;
  },
  setSelectedProduct(state, product) {
    state.selectedProduct = product;
  },
  setProductsException(state) {
    state.error = new ProductsException();
  },
};
