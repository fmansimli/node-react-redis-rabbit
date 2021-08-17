import styles from "./Loading.module.scss";

const Loading = ({ message }) => {
  return (
    <div className={styles.cont}>
      <span className={styles.text}>{message}</span>
    </div>
  );
};

Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
