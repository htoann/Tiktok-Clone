export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.meta.token) {
    return {
      Authorization: "Bearer " + user.meta.token,
    };
  } else {
    return {};
  }
}
