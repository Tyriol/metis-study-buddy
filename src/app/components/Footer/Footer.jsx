import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        <a href="/matches" className="material-symbols-outlined" style={{ textDecoration: 'none', color: 'inherit' }}>
          home
        </a>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </div>
      <div className="footer-icon">
        <a href="/profile-update" className="material-symbols-outlined" style={{ textDecoration: 'none', color: 'inherit' }}>
          chat
        </a>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </div>
      <div className="footer-icon">
        <a href="/user-profile" className="material-symbols-outlined" style={{ textDecoration: 'none', color: 'inherit' }}>
          account_circle
        </a>
      </div>
    </footer>
  );
};

export default Footer;
