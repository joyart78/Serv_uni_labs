import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav>
      <ul>
        <li className={styles.nav_item}>
          <NavLink to="/lab1" className={setActive}>
            Lab1
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
