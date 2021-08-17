import { NavLink } from "react-router-dom";
import styles from "./AppHeader.module.scss";

import useToken from "../../hooks/useToken";

export default function AppHeader(props) {
  const { token, setToken } = useToken();
  return (
    <div className={styles.nav}>
      <div className={styles.menu}>
        <div className={styles.mainLinks}>
          <div className={styles.menuItem}>
            <NavLink to="/" exact activeClassName="active">
              App
            </NavLink>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/tasks" exact activeClassName="active">
              Tasks
            </NavLink>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </div>
          <div className={styles.menuItem}>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </div>
        </div>
        <div className={styles.authLinks}>
          {token ? (
            <>
              <div className={styles.menuItemRight}>
                <NavLink to="/account/profile" activeClassName="active">
                  Profile
                </NavLink>
              </div>
              <div className={styles.menuItemRight}>
                <NavLink to="#" onClick={() => setToken(null)}>
                  Logout
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className={styles.menuItemRight}>
                <NavLink to="/auth/login" activeClassName="active">
                  Login
                </NavLink>
              </div>
              <div className={styles.menuItemRight}>
                <NavLink to="/auth/register" activeClassName="active">
                  Register
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
