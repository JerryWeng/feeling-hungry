import styles from './register.module.css'

const Register = () => {

    return(
        <div class={styles['container']}>
            <h1 class={styles['title']}>Register for Grub Gram now!</h1>
            <form class={styles['registerForm']}action="">
                <div class={styles['headings']}>
                    <h2>Sign up</h2>
                </div>
                
                <div class={styles['main']}>
                    <label for="username">Username: </label>
                    <input class={styles.inputBox} type="text" placeholder="Username" name="username" required/>
                    
                    <label for="pswrd">Password: </label>
                    <input class={styles.inputBox} type="password" placeholder="Password" name="pswrd" required/>

                    <label for="confpswrd">Confirm Password: </label>
                    <input class={styles.inputBox} type="confpassword" placeholder="Confirm Password" name="confpswrd" required/>
 
                    <div class={styles['subcontainer']}>
                        <p class={styles['forgotpsd']}> <a href="#">Forgot Password?</a></p>
                    </div>

                    <button class={styles.registerButton} type="submit">Register</button>
                </div>

            </form>
        </div>
    )
}

export default Register
