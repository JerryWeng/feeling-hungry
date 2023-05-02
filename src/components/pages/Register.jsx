import styles from './register.module.css'

const Register = () => {

    return(
        <div class={styles['container']}>
            <h1 class={styles['title']}>Register for Grub Gram now!</h1>
            <form class={styles['registerForm']}action="">
                <div class={styles['headings']}>
                    <h3>Sign up</h3>
                </div>

                <div class={styles['main']}>
                    <label for="username">Desired Username: </label>
                    <input class={styles.inputBox} type="text" placeholder="Enter Username" name="username" required/>

                    <br></br>
                    
                    <label for="pswrd">Desired Password: </label>
                    <input class={styles.inputBox} type="password" placeholder="Enter Password" name="pswrd" required/>
 
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
