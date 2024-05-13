import Link from "next/link";
import styles from "../../shared/form.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <h3>Wellcome Back!</h3>
        <form className={styles.form}>
          <label>
            <input type="text" placeholder="Email" />
          </label>
          <label>
            <input type="text" placeholder="Password" />
          </label>
          <input type="submit" className="primary-btn" value="Login" />
        </form>
        <p>
          Don&apos;t have any account? Please{" "}
          <Link href="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
