import { getProducts } from "./products_repository";

test("product list retrieved", async () => {
  const productList = await getProducts("test@gmail.com", "password");
  expect(productList.status).toBe(200);
});
