import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import "./Header.css";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

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
