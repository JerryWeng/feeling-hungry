import React, { useState } from "react"
import LoginTransition from "./LoginModal.jsx"

const Login = props => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('');
    const [pass, setPass]  = useState('');

    return (
        <div className="Login">
        <button className="loginButton" onClick= {() => setShow(true) }>Login</button>
        <LoginTransition title="Login" onClose={() => setShow(false)} show={show}>
            <div className="loginInformation"> 
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter password" id="password" name="password"/>
            <a href="./Register.jsx">Don't have an account?</a>
            </div>
        </LoginTransition>
        </div>
    )
}

export default Login

