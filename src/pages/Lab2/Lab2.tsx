import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store.ts";
import styles from "./ui/style.module.css";
import { useDispatch } from "react-redux";
import { clearUser } from "@/pages/Lab2/slice/slice.ts";
import LoginForm from "@/features/auth";
import { useNavigate } from "react-router-dom";

export default function Lab2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handler() {
    dispatch(clearUser());
    navigate("/auth");
  }
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      {isAuthenticated ? (
        <div className={styles.container}>
          <span className={styles.userName}>Привет, {user}</span>
          <button className={styles.logoutButton} onClick={handler}>
            Выйти
          </button>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
