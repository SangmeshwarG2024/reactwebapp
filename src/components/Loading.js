import React from "react";
import logo from "../logo.svg";

export default function Loading() {
  const loadingStyle = {
    height: "200px",
    width: "200px",
  };
  return (
    <div className="app-logo">
      <img
        src={logo}
        className="App-logo-spin"
        style={loadingStyle}
        alt="loading"
      ></img>
    </div>
  );
}
