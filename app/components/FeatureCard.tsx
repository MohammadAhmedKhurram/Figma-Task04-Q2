import Image from "next/image";

export default function FeaturedCard(props: FeatureCardType) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Image src={props.image} alt="img" width={246} height={180} />
      <div
        style={{
          width: "623.46px",
          height: "272.1px",
          paddingLeft: "20px",
          marginBottom: "93.36px",
        }}
      >
        <h3
          style={{
            paddingLeft: "15.92px",
            marginTop: "0px",
            width: "305px",
            height: "44px",
            // fontFamily: "Heebo",
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "44.06px",
            textAlign: "left",
            marginBottom: "8.1px",
            color: "black"
          }}
        >
          Designing Dashboards
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "15.92px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "68px",
              height: "24px",
              borderRadius: "50px",
              backgroundColor: "#F98585",
              color: "white",
              // fontFamily: "Heebo",
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "center",
              marginRight: "14px",
            }}
          >
            2020
          </div>
          <p
            style={{
              // fontFamily: "Heebo",
              fontSize: "20px",
              fontWeight: "400",
              color: "#0000009E",
              margin: 0,
            }}
          >
            Dashboard
          </p>
        </div>
        <p
          style={{
            width: "628px",
            height: "170px",
            top: " 102.1px",
            paddingLeft: "15.92px",
            // fontFamily: "Heebo",
            fontSize: "18px",
            fontWeight: "300",
            lineHeight: "26.44px",
            textAlign: "left",
            color: "black",
          }}
        >
          Amet minim mollit non deseruent ullamco est sit aliqua dolor do amet
          sint. Velit <br /> officia consequat duis enim velit molit. Exercitation veniam
          consequat sunt <br /> nostrud amet.
        </p>
      </div>
    </div>
  );
}
