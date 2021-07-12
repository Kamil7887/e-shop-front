import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8000/";

export function createOrderProductItem() {}

export function createOrder(user_id) {
  const payload = { user_id: user_id };
  return Axios.post("/order/", payload);
}
