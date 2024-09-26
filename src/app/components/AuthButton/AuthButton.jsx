import React from "react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
    const router = useRouter();

    const handleAuth = () => {
        router.push("/auth");
    };

    return <button onClick={handleAuth}>Click here to Sign In or Sign Up now!</button>;
}