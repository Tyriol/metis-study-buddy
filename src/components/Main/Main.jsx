import React from "react";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="main-content">
        <h1>Welcome to METIS</h1>
        <p>Please sign in or sign up to continue</p>
        {children}
      </div>
    </main>
  );
};

export default Main;
