import Axios from "axios";

import { generateTokenHeaders } from "@/helpers/generateTokenHeaders.js";
Axios.defaults.baseURL = "http://localhost:8000/";

export function getOrderProductItems(token) {
  return Axios.get("/order-product-list/", generateTokenHeaders(token));
}

export async function createOrderProductItems(user_id, cart_object, token) {
  try {
    let payload = {};
    const res_order = await createOrder(user_id, token);
    const cart_indexes = Object.keys(cart_object);
    console.log(cart_indexes);
    const gtoken = generateTokenHeaders(token);
    for (let index of cart_indexes) {
      payload.order_id = res_order.data.id;
      payload.user_id = user_id;
      console.log(index);
      payload.product_id = cart_object[index].id;
      console.log(payload.product_id);

      payload.amount = cart_object[index].amount;
      console.log(payload);
      await Axios.post("/order-product-list/", payload, gtoken);
    }
    return "ok";
  } catch (e) {
    return "not ok";
  }
}

export function createOrder(user_id, token) {
  const payload = { user_id: user_id };
  return Axios.post("/order/", payload, generateTokenHeaders(token));
}
