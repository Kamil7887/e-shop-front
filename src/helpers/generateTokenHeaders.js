export function generateTokenHeaders(token) {
  return {
    headers: {
      Authorization: "Token " + token,
    },
  };
}
