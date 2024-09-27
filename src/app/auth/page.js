"use client";
import Authentication from "@/app/components/Authentication/Authentication";
import Main from "@/app/components/Main/Main";
import Image from "next/image";

export default function AuthPage() {
  return (
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
      <Authentication />
    </Main>
  );
}
