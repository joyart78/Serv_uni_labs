import { Outlet } from "react-router-dom";
import Nav from "@/shared/ui/Nav/Nav.tsx";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.window_container}>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.header_container}`}>
          <Nav />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
