"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "../../shared/form.module.css";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleRegister = handleSubmit((userFormData: FormData) => {
    const { fullName, email, password } = userFormData;
    const userData = { fullName, email, password };

    // using localStorage as database to store user's data
    localStorage.setItem("userData", JSON.stringify(userData));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Registration successful",
      showConfirmButton: false,
      timer: 1500,
    });
  });

  const password = watch("password");
  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <h3>Please Register!</h3>
        <form onSubmit={handleRegister} className={styles.form}>
          <label>
            <input
              type="text"
              {...register("fullName", { required: "FullName is required!" })}
              placeholder="Full Name"
            />
            {errors.fullName && (
              <span className={styles.errorMsg}>{errors.fullName.message}</span>
            )}
          </label>
          <label>
            <input
              type="email"
              {...register("email", { required: "Email is required!" })}
              placeholder="Email"
            />
            {errors.email && (
              <span className={styles.errorMsg}>{errors.email.message}</span>
            )}
          </label>
          <label>
            <input
              type="password"
              {...register("password", { required: "Password is required!" })}
              placeholder="Password"
            />
            {errors.password && (
              <span className={styles.errorMsg}>{errors.password.message}</span>
            )}
          </label>
          <label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "ConfirmPassword is required!",
                validate: (value) => {
                  if (value !== password) {
                    return "Password doesn't match";
                  }
                },
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <span className={styles.errorMsg}>
                {errors.confirmPassword.message}
              </span>
            )}
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
