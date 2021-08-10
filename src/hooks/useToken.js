import { useSelector, useDispatch } from "react-redux";
import { SET_TOKEN, LOGOUT } from "../store/actions/auth";
const Token = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const updateToken = (token) => {
    if (!token) {
      dispatch({ type: LOGOUT });
      return;
    }
    dispatch({ type: SET_TOKEN, token });
    localStorage.setItem("token", token);
  };

  return { token: token, setToken: updateToken };
};

export default Token;
