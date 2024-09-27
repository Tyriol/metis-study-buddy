import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "../../../helpers/supabaseClient";
import "./AuthButton.css";

export default function AuthButton() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getUser();
  }, []);

  const handleAuth = () => {
    router.push("/auth");
  };

  if (user) return null;

  return (
    <button className="auth-button" onClick={handleAuth}>
      Click here to Sign In or Sign Up now!
    </button>
  );
}
