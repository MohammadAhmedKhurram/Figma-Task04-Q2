import styles from "../styles/Hero.module.css";
import Button from "./Button";
import Image from "next/image";
import { Heebo } from "@next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

export default function HeroSection() {
  return (
    <>
    <div className={`${styles.hero} ${heebo.className}`}>
      <h1 className={styles.h1}>
        Hi, I am John, <br />
        Creative Technologist
      </h1>
      
      <div className={styles.p}>
      <p >
        Amet minim mollit non deseruent ullamco est sit aliqua dolor do amet
        <br /> sint. Velit officia consequat duis enim velit molit. Exercitation
        veniam <br />
        consequat sunt nostrud amet.
      </p>
      <Button/>
    </div>
    </div>
    <div className={styles.circle}></div>
    <Image className={styles.image} src="/heroimg.png" alt="hero image" width={292} height={299}></Image>
    </>
  );
}
