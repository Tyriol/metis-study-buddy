import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="footer-icon">
        <a
          href="/"
          className="material-symbols-outlined"
          style={{ textDecoration: "none" }}
        >
          home
        </a>
      </div>
      <div className="footer-icon">
        <a
          href="/matches"
          className="material-symbols-outlined"
          style={{ textDecoration: "none" }}
        >
          favorite
        </a>
      </div>
      <div className="footer-icon">
        <a
          href="/user-profile"
          className="material-symbols-outlined"
          style={{ textDecoration: "none" }}
        >
          account_circle
        </a>
      </div>
    </footer>
  );
};

export default Footer;
