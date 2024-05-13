"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "../../shared/form.module.css";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<LoginData>();

  const handleLogin = handleSubmit((userFormData: LoginData) => {
    // getting user's data from localStorage for authentication
    const userDataJson = localStorage.getItem("userData");

    if (userDataJson) {
      const userData = JSON.parse(userDataJson);

      if (userData.email !== userFormData.email) {
        return setError("email", {
          message: "Account doesn't exist",
        });
      } else if (userData.password !== userFormData.password) {
        return setError("password", { message: "Invalid password" });
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 1500,
      });

      localStorage.setItem("isLogin", "true");
    } else {
    }
  });
  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <h3>Wellcome Back!</h3>
        <form onSubmit={handleLogin} className={styles.form}>
          <label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
            />
            {errors.email && (
              <span className={styles.errorMsg}>{errors.email.message}</span>
            )}
          </label>
          <label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
            />
            {errors.password && (
              <span className={styles.errorMsg}>{errors.password.message}</span>
            )}
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
