import React from "react";
import styles from "./ProfilePage.module.scss";
import useToken from "../../hooks/useToken";
import { useSelector } from "react-redux";

import Login from "../../components/auth/Login";

export default function ProfilePage() {
  const { token, setToken } = useToken();
  const user = useSelector((state) => state.auth.user);

  if (!token) {
    return (
      <div className={styles.login}>
        <div className={styles.loginChild}>
          <Login
            title="Please login to visit (Profile page)"
            setToken={setToken}
          />
        </div>
        <br />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.leftOne}>
          <div className={styles.img}>
            <img
              className={styles.profilImg}
              src="https://picsum.photos/200"
              alt="asdfg dd"
            />
          </div>
          <div>@{user.username}</div>
          <div>{user.email}</div>
          <div>{user.createAt}</div>
          <div>@{user.username}</div>
          <div>{user.email}</div>
          <div>{user.createAt}</div>
          <div>@{user.username}</div>
          <div>{user.email}</div>
          <div>{user.createAt}</div>
        </div>
        <div className={styles.leftTwo}>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </div>
      <div className={styles.right}>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
      </div>
    </div>
  );
}
