import React from "react";
import supabase from "@/helpers/supabaseClient";
import "./Header.css";

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

const Header = () => {
  return (
    <header className="header">
      <div className="logo">METIS</div>
      <button onClick={signOut}>Sign Out</button>
    </header>
  );
};

export default Header;
