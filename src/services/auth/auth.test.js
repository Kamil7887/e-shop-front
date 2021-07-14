import {
  createUser,
  deleteUser,
  getToken,
  getUserDetails,
  updateUser,
} from "./auth";

test("user created", async () => {
  const user = await createUser("test@gmail.com", "password");
  expect(user.status).toBe(201);
  const token_res = await getToken("test@gmail.com", "password");
  const token = token_res.data.token;
  await deleteUser(token);
});

test("get token", async () => {
  await createUser("test@gmail.com", "password");
  const token_res = await getToken("test@gmail.com", "password");
  expect(token_res.status).toBe(200);
  expect(token_res.data.token).not.toBe("");
  expect(token_res.data.token).not.toContain("password");
  const token = token_res.data.token;
  await deleteUser(token);
});

test("get user details", async () => {
  await createUser("test@gmail.com", "password");
  const resToken = await getToken("test@gmail.com", "password");
  const token = resToken.data.token;
  const resUser = await getUserDetails(token);
  expect(resUser.status).toBe(200);
  await deleteUser(token);
});

test("delete user", async () => {
  await createUser("test@gmail.com", "password");
  const resToken = await getToken("test@gmail.com", "password");
  const token = resToken.data.token;
  const resUser = await deleteUser(token);
  expect(resUser.status).toBe(204);
});

test("update users's first name field", async () => {
  await createUser("test@gmail.com", "password");
  const resToken = await getToken("test@gmail.com", "password");
  const token = resToken.data.token;
  const resUpdateUser = await updateUser(token, { first_name: "Kamil" });
  expect(resUpdateUser.status).toBe(200);
  expect(resUpdateUser.data.first_name).toBe("Kamil");
  await deleteUser(token);
});

test("update users's password field", async () => {
  await createUser("test@gmail.com", "password");
  const resToken = await getToken("test@gmail.com", "password");
  const token = resToken.data.token;
  const resUpdateUser = await updateUser(token, { password: "new_password" });
  expect(resUpdateUser.status).toBe(200);
  expect(resUpdateUser.data.password).not.toBe("new_password");
  const resNewToken = await getToken("test@gmail.com", "new_password");
  const newToken = resNewToken.data.token;
  const resDelete = await deleteUser(newToken);
  expect(resDelete.status).toBe(204);
});
