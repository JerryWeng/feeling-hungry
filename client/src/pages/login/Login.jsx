import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.js";

import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Login to GrubGram</h1>
      <form className={styles["loginForm"]} onSubmit={handleSubmit}>

        <div className={styles["main"]}>
          <label htmlFor="username">Username: </label>
          <input
            className={styles.inputBox}
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />

          <label htmlFor="pswrd">Password: </label>
          <input
            className={styles.inputBox}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <Link to="/register">Don't have an account?</Link>
          <button className={styles["loginButton"]} disabled={isLoading}>
            Log in
          </button>
        </div>
        {error && <div className={styles["error"]}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
