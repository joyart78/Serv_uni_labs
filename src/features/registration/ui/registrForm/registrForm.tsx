import React, { useState } from "react";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import { useRegisterMutation } from "@/features/registration/api/registrApi/registerApi.tsx";
import styles from "./registerForm.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await register({ email, password }).unwrap();
      navigate("/auth");
    } catch (err) {
      // Ошибка уже обрабатывается через error
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Create Account</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.formInput}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={styles.formInput}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.inputLabel}>
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className={styles.formInput}
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            "Register"
          )}
        </button>

        <div className={styles.authLinks}>
          <NavLink to="/auth" className={styles.authLink}>
            Already have an account? Login
          </NavLink>
        </div>

        {error && (
          <div className={styles.errorMessage}>⚠️ {(error as any).message}</div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
