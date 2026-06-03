import React, { Component } from "react";
import myImage from "../../assets/images/systemadmin.png";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        src={myImage}
        alt="Cloud Infrastructure"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
        }}
      />
    );
  }
}