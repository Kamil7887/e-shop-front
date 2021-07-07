import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8000/";

export function createUser(email, password) {
  const payload = { email: email, password: password };
  return Axios.post("users/create/", payload);
}

export function getToken(email, password) {
  const payload = { email: email, password: password };
  return Axios.post("/users/token/", payload);
}

export function getUserDetails(token) {
  return Axios.get("/users/me/", generateTokenHeaders(token));
}

export function updateUser(token, payload) {
  return Axios.patch("/users/me/", payload, generateTokenHeaders(token));
}

export function deleteUser(token) {
  return Axios.delete("/users/me/", generateTokenHeaders(token));
}

export function generateTokenHeaders(token) {
  return {
    headers: {
      Authorization: "Token " + token,
    },
  };
}
