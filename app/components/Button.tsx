import { Heebo } from "@next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

export default function Button() {
  return (
    <button className={heebo.className}
      style={{
        width: "205px",
        height: "50px",
        backgroundColor: "#F98585",
        boxShadow: "0px 4px 4px 0px #4141418A",
        color: "white",
        border: "none",
      }}
    >
      <div
        style={{
          // fontFamily: "Heebo",
          fontSize: "18px",
          fontWeight: 500,
          lineHeight: "26.44px",
        }}
      >
        Download Resume
      </div>
    </button>
  );
}
