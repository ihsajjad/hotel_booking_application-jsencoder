import styles from "./login.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <h3>Wellcome Back!</h3>
        <form className={styles.form}>
          <label>
            <input type="text" placeholder="Full Name" />
          </label>
          <label>
            <input type="text" placeholder="Email" />
          </label>
          <label>
            <input type="text" placeholder="Password" />
          </label>
          <label>
            <input type="text" placeholder="Confirm Password" />
          </label>
          <input type="submit" className="primary-btn" value="Login" />
        </form>
      </div>
    </main>
  );
};

export default Login;
