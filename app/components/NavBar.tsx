import styles from "../styles/NavBar.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

export default function NavBar() {
  return (
    <nav className={inter.className}>
      <div className={styles.div}></div>
      <ul className={styles.ul}>
        <li className={styles.works}>Works</li>
        <li className={styles.blog}>Blog</li>
        <li className={styles.contact}>Contact</li>
      </ul>
    </nav>
  );
}
