import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8000/";

export function getProducts() {
  return Axios.get("/product/");
}

export function getProductById(id) {
  return Axios.get(`/product/${id}`);
}
