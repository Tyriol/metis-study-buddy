// import signOut from "@/helpers/signout";
// import './SignoutButton.css';

// export default function SignoutButton() {
//   return <button className="signout-button" onClick={signOut}>Sign Out</button>;
// }

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "../../../helpers/supabaseClient";
import signOut from "@/helpers/signout";
import "./SignoutButton.css";

export default function SignoutButton() {
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

  const handleSignout = async () => {
    const error = await signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      router.push("/auth");
    }
  };

  if (!user) return null;

  return (
    <button className="signout-button" onClick={handleSignout}>
      Sign Out
    </button>
  );
}
