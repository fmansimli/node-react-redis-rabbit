import React from "react";
import styles from "./ProfilePage.module.scss";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const fDate = new Date(user.createAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
          <div>{fDate}</div>
          <div>@{user.username}</div>
          <div>{user.email}</div>
          <div>{fDate}</div>
          <div>@{user.username}</div>
          <div>{user.email}</div>
          <div>{fDate}</div>
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
