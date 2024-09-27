"use client";

import Main from "@/app/components/Main/Main.jsx";
import AuthButton from "@/app/components/AuthButton/AuthButton.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Main>
        <Image
          className="logo"
          src="/assets/images/metis-logo.png"
          width={525}
          height={525}
          alt="Metis Logo"
        />
        <h1>Welcome to METIS</h1>
        <p> Connect, Learn, Succeed</p>
        <AuthButton />
      </Main>
    </>
  );
}
