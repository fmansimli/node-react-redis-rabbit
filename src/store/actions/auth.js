export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_TOKEN = "SET_TOKEN";
export const REFRESH = "REFRESH";

export const loginA = (data) => ({
  auth: {
    user: data.user,
    token: data.token,
  },
  type: LOGIN,
});
