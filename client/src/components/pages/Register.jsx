import styles from './register.module.css'
import { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDeafult()

        console.log(username, password)
    } 

    return(
        <div className={styles['container']}>
            <h1 className={styles['title']}>Register for Grub Gram now!</h1>
            <form className={styles['registerForm']} onSubmit={handleSubmit}>
                <div className={styles['headings']}>
                    <h3>Sign up</h3>
                </div>

                <div className={styles['main']}>
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
 
                    <div className={styles['subcontainer']}>
                        <p className={styles['forgotpsd']}> <a href="#">Forgot Password?</a></p>
                    </div>

                    <button className={styles.registerButton}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register
