import { CSSTransition } from "react-transition-group";
import styles from "./login.module.css";

const LoginTransition = (props) => {
  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        className={`${styles["login"]} ${props.show ? styles["show"] : ""}`}
        onClick={props.onClose}
      >
        <div
          className={styles["login-content"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles["login-header"]}>
            <h4 className={styles["login-title"]}>Login</h4>
          </div>
          <div className={styles["login-body"]}>{props.children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default LoginTransition;
