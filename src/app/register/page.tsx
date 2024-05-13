import Link from "next/link";
import styles from "../../shared/form.module.css";

const Register = () => {
  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <h3>Please Register!</h3>
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
          <input type="submit" className="primary-btn" value="Register" />
        </form>
        <p>
          Already have an account? Please <Link href="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
