import { createOrder } from "./orders_repository";
import { createUser, getToken } from "src/services/auth/auth.js";

test("test order created", async () => {
  const user_res = await createUser("jest@gmail.com", "password");
  const user = user_res.data();
  const token_res = await getToken("jest@gmail.com", "password");
  const _ = token_res.data;
  const order_res = await createOrder(user.id);
  expect(order_res.status).toBe(201);
});
