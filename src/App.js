import { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";
import styles from "./App.module.scss";
import { refreshAuth } from "./services/auth";
import { useDispatch } from "react-redux";
import { LOGOUT, LOGIN } from "./store/actions/auth";

function App() {
  const [appMessage, setAppMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const resp = await refreshAuth();
        if (!resp) {
          return;
        }
        if (resp.status === 401) {
          dispatch({ type: LOGOUT });
          throw new Error("session ended...");
        }
        const auth = await resp.json();
        dispatch({ type: LOGIN, auth });
      } catch (error) {
        setAppMessage(error.message);
        setTimeout(() => {
          setAppMessage("");
        }, 3000);
      }
    })();
  }, [dispatch]);

  return (
    <div className={styles.default}>
      {appMessage && <div className={styles.errMessage}>{appMessage}</div>}
      <AppRouter />
    </div>
  );
}

export default App;
