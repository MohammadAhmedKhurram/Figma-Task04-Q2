import Image from "next/image";
import { Heebo } from "@next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Footer() {
  return (
    <div
      className={heebo.className}
      style={{
        width: "1440px",
        height: "243px",
        marginTop: "282px",
        // paddingTop: "2239px",
        // border: "2px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "279px",
          height: "30px",
          top: "2288px",
          paddingLeft: "578px",
          //   border: "2px solid black",
          paddingTop: "30px",
        }}
      >
        <Image src="/fb.png" alt="img" width={30} height={30}></Image>
        <div style={{ paddingLeft: "43px", margin: "0px" }}>
          <Image src="/insta.png" alt="img" width={30} height={30}></Image>
        </div>
        <div style={{ paddingLeft: "43px", margin: "0px" }}>
          <Image src="/Group.png" alt="img" width={36.92} height={30}></Image>
        </div>

        <div style={{ paddingLeft: "43px", margin: "0px" }}>
          <Image src="/Linkedin.png" alt="img" width={30} height={30}></Image>
        </div>
      </div>
      <p
        style={{
          width: "354px",
          height: "32px",
          paddingLeft: "543px",
          fontSize: "22px",
          fontWeight: "500",
          lineHeight: "32.31px",
          textAlign: "left",
          marginTop: "45px",
        }}
      >
        Copyright &copy;2020 All rights reserved
      </p>
    </div>
  );
}
