import styles from "../styles/PostSec.module.css";
import { Heebo } from "@next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function PostSecCard(props: postCardType) {
  return (
    <>
      <div className={heebo.className} style={{ display: "flex" }}>
        <div className={styles.card2}>
          <h3 className={styles.p}>{props.title}</h3>
          <p
            style={{
              width: "301.28px",
              height: "42.12px",
              marginTop: "0px",
              paddingTop: "0px",
              marginLeft: "35.44px",
              // fontFamily: "Heebo",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "38px",
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
          >
            {props.date}
          </p>
          <p
            style={{
              width: "391px",
              height: "129.7px",
              top: "194.3px",
              marginLeft: "35px",
              gap: "0px",
              opacity: "0px",
              // fontFamily: "Heebo",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "23.5px",
              textAlign: "left",
            }}
          >
            {props.para}
          </p>
        </div>
        <div className={styles.card1}>
          {" "}
          <h3 className={styles.p}>{props.title}</h3>
          <p
            style={{
              width: "301.28px",
              height: "42.12px",
              marginTop: "0px",
              paddingTop: "0px",
              marginLeft: "35.44px",
              // fontFamily: "Heebo",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "38px",
              letterSpacing: "0.02em",
              textAlign: "left",
              color: "#000000B2",
            }}
          >
            {props.date}
          </p>
          <p
            style={{
              width: "391px",
              height: "129.7px",
              top: "194.3px",
              marginLeft: "35px",
              gap: "0px",
              opacity: "0px",
              // fontFamily: "Heebo",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "23.5px",
              textAlign: "left",
            }}
          >
            {props.para}
          </p>
        </div>
      </div>
    </>
  );
}
