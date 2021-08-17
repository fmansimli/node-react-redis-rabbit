const host = process.env.REACT_APP_API_HOST;

export const loginAsync = (email, password) => {
  return fetch(host + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ email, password }),
  });
};

export function registerAsync(username, email, password) {
  return fetch(host + "/api/auth/register", {
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
    return fetch(host + "/api/account/refresh", {
      method: "GET",
      headers: {
        auth: token,
      },
    });
  }
}
