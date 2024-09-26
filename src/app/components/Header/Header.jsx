import React from "react";
import "./Header.css";
import SignoutButton from "../SignoutButton/SignoutButton";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">METIS</div>
      <SignoutButton />
    </header>
  );
};

export default Header;
