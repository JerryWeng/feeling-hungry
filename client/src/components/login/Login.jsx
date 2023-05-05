import React, { useState } from "react";
import LoginTransition from "./LoginTransition.jsx";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
	const [show, setShow] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault()

		console.log(username, password)
	}

	return (
		<div>
			<button 
				className={styles.loginButton} 
				onClick={() => {
					setShow(true) 
				}}>
				Login
			</button>

			<LoginTransition onClose={() => setShow(false)} show={show}>
				<form onSubmit={handleSubmit}>
					<label htmlFor="username">Username:  </label>
					<input
						type="username"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						placeholder="Enter username"
					/>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						placeholder="Enter password"
						
					/>
					<div>
						<Link to="/register">Don't have an account?</Link>
					</div>
					<div className={styles['loginSubmit']}>
						<button className={styles['submit']} type="submit">Login</button>
					</div>
				</form>
			</LoginTransition>
		</div>
	);
};

export default Login;
