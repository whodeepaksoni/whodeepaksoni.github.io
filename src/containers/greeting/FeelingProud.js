import React from "react";
import myImage from "../../assets/images/me_deepak.png";

export default function FeelingProud() {
  return (
    <img
      src={myImage}
      alt="Deepak Soni"
      style={{
        width: "100%",
        maxWidth: "650px",
        height: "auto"
      }}
    />
  );
}