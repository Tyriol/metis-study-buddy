import React from "react";
import "./Main.css";
import SignoutButton from "../SignoutButton/SignoutButton";
import AuthButton from "../AuthButton/AuthButton";
import Image from "next/image";

const Main = ({ children }) => {
  return (
    <div className="homepage-div">
      <main className="main">
        <Image
          className="logo"
          src="/assets/images/metis-logo.png"
          width={525}
          height={525}
          alt="Metis Logo"
        />
        <div className="main-content">
          <h1>Welcome to METIS</h1>
          <p> Connect, Learn, Succeed</p>
          <p>
            <AuthButton />
          </p>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Main;
