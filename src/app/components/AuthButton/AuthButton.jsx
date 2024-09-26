import React from "react";
import { useRouter } from "next/navigation";
import "./AuthButton.css"; 

export default function AuthButton() {
  const router = useRouter();

  const handleAuth = () => {
    router.push("/auth");
  };

  return (
    <button className="auth-button" onClick={handleAuth}>
      Click here to Sign In or Sign Up now!
    </button>
  );
}
