import styles from "./register.module.css";
import { useState } from "react";
import { useRegister } from "../../hooks/useRegister.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(username, password);
  };

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Register for GrubGram</h1>
      <form className={styles["registerForm"]} onSubmit={handleSubmit}>

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

          {/* <label for="confpswrd">Confirm Password: </label>
                    <input 
                        className={styles.inputBox} 
                        type="confpassword" 
                        placeholder="Confirm Password" 
                        name="confpswrd" required/> */}

          {/* <div className={styles['subcontainer']}>
                        <p className={styles['forgotpsd']}> <a href="#">Forgot Password?</a></p>
                    </div> */}

          <button className={styles.registerButton} disabled={isLoading}>
            Register
          </button>
        </div>
        {error && <div className={styles["error"]}>{error}</div>}
      </form>
    </div>
  );
};

export default Register;
