import React from "react";
import "./Main.css";
import SignoutButton from "../SignoutButton/SignoutButton";

const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="main-content">
        <h1>Welcome to METIS</h1>
        <SignoutButton />
        <p>Please sign in or sign up to continue</p>
        {children}
      </div>
    </main>
  );
};

export default Main;
