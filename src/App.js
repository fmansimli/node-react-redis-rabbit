import { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import styles from "./App.module.scss";
import { refreshAuth } from "./services/auth";
import { useDispatch } from "react-redux";
import { LOGOUT, LOGIN } from "./store/actions/auth";

import GifLoading from "./components/common/GifLoading";

function App() {
  const [appMessage, setAppMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const resp = await refreshAuth();
        if (!resp) {
          setLoading(false);
          return;
        }
        if (resp.status === 401) {
          dispatch({ type: LOGOUT });
          setLoading(false);
          throw new Error("session ended...");
        }
        const auth = await resp.json();
        dispatch({ type: LOGIN, auth });
        setLoading(false);
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
      {loading ? (
        <GifLoading />
      ) : (
        <>
          {appMessage && <div className={styles.errMessage}>{appMessage}</div>}
          <AppRouter />
        </>
      )}
    </div>
  );
}

export default App;
