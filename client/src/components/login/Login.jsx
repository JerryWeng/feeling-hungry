import Register from '../pages/Register.jsx'
import React, { useState } from "react"
import LoginTransition from "./LoginTransition.jsx"
import styles from './login.module.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('');
    const [pass, setPass]  = useState('');

    return (
        <div>
        <button className={styles.loginButton} onClick= {() => setShow(true) }>Login</button>
        <LoginTransition onClose={() => setShow(false)} show={show}>
            <div className={styles.loginInformation}> 
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter password" id="password" name="password"/>
                <Link to="/Register">Don't have an account?</Link>
            </div>
        </LoginTransition>
        </div>
    )
}

export default Login

