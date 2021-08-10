import { LOGIN, LOGOUT, SET_TOKEN, REFRESH } from "../actions/auth";

const initialState = {
  user: null,
  token: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.auth;
    case LOGOUT:
      localStorage.removeItem("token");
      return initialState;
    case SET_TOKEN:
      return { ...state, token: action.token };
    case REFRESH:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
