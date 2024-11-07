import styles from "../styles/PostSec.module.css";
import PostSecCard from "./PostSecCard";
import { Heebo } from "@next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function PostSection() {
  return (
    <>
      <div className={styles.container}>
        <div style={{ display: "flex" }}>
          <p className={`${styles.p1} ${heebo.className}`}>Recent Post</p>
          <p className={`${styles.p2} ${heebo.className}`}>View all</p>
        </div>
        <div>
          <PostSecCard
            title="Making a design system from scratch"
            date="12 Feb 2020&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Design , Pattern"
            para="  Amet minim mollit non deseruent ullamco est sit aliqua
             dolor do amet sint. Velit officia consequat duis enim
             velit molit. Exercitation veniam consequat sunt
             nostrud amet."
          />
        </div>
      </div>
    </>
  );
}
