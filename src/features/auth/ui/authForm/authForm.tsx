import { useLoginMutation } from "@/features/auth/api/authApi/authApi.ts";
import React, { useState } from "react";
import styles from "./authForm.module.css";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/pages/Lab2/slice/slice.ts";

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const [emailInput, setEmailInput] = useState<string>("");
  const [registerInput, setRegisterInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const credentials = {
      email: emailInput,
      password: registerInput,
    };
    console.log("Отправляемые данные:", credentials);
    try {
      const data = await login(credentials).unwrap();
      localStorage.setItem("token", data.accessToken);
      dispatch(setUser(credentials.email));
      navigate("/lab2");
      console.log("Login successful:", data);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Вход</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.formInput}
            placeholder="Введите свою почту"
            onChange={(e) => setEmailInput(e.currentTarget.value)}
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
            placeholder="Введите свой пароль"
            onChange={(e) => setRegisterInput(e.currentTarget.value)}
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
            "Войти"
          )}
        </button>

        <div className={styles.authLinks}>
          <NavLink to="/register" className={styles.authLink}>
            Зарегистрироваться
          </NavLink>
        </div>

        {error && <div className={styles.errorMessage}>⚠️ Login failed</div>}
      </form>
    </div>
  );
};

export default LoginForm;
