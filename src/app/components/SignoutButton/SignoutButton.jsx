// import signOut from "@/helpers/signout";
// import './SignoutButton.css';

// export default function SignoutButton() {
//   return <button className="signout-button" onClick={signOut}>Sign Out</button>;
// }

import React from "react";
import { useRouter } from "next/navigation";
import signOut from "@/helpers/signout";
import "./SignoutButton.css";

export default function SignoutButton() {
  const router = useRouter();

  const handleSignout = async () => {
    const error = await signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      router.push("/auth"); // Redirect to the authentication page after sign-out
    }
  };

  return (
    <button className="signout-button" onClick={handleSignout}>
      Sign Out
    </button>
  );
}
