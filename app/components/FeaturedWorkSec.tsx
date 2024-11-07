import styles from "../styles/FeaturedSec.module.css";
import FeaturedCard from "./FeatureCard";
import { Heebo } from "@next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
});


export default function FeaturedWorkSec() {
  return (
    <div className={`${styles.div} ${heebo.className}`}>
      <h5
        style={{
          width: "153px",
          height: "32px",
          // fontFamily: "Heebo",
          fontSize: "22px",
          fontWeight: "500",
          lineHeight: "32.31px",
          textAlign: "left",
        }}
      >
        Featured works
      </h5>
      <FeaturedCard image="/Rectangle 30.png" />
      <FeaturedCard image="/Rectangle 32.png" />
      <FeaturedCard image="/Rectangle 34.png" />
    </div>
  );
}
