import React from "react";
import "./Main.css";
import SignoutButton from "../SignoutButton/SignoutButton";
import AuthButton from "../AuthButton/AuthButton";
import Image from "next/image";

const Main = ({ children }) => {
  return (
    // <div className="homepage-div">
    <main className="main">
      <div className="main-content">{children}</div>
    </main>
    // </div>
  );
};

export default Main;
