const apiHost = "http://localhost:3007";

export const loginAsync = (email, password) => {
  return fetch(apiHost + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ email, password }),
  });
};

export const testAsync = (email, password) => {};

export function registerAsync(username, email, password) {
  return fetch(apiHost + "/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ username, email, password }),
  });
}

export function refreshAuth() {
  const token = localStorage.getItem("token");
  if (token) {
    return fetch(apiHost + "/api/account/refresh", {
      method: "GET",
      headers: {
        auth: token,
      },
    });
  }
}
