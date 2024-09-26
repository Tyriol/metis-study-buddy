import React from "react";
import "./Main.css";
import SignoutButton from "../SignoutButton/SignoutButton";
import AuthButton from "../AuthButton/AuthButton";

const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="main-content">
        <h1>Welcome to METIS</h1>
        <p>
          <AuthButton />
        </p>
        {children}
      </div>
    </main>
  );
};

export default Main;
