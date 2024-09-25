"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header.jsx";
import Card from "@/components/Card/Card.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Main from "@/components/Main/Main.jsx";
import Auth from "@/components/Authentication/Authentication";
import Authentication from "@/components/Authentication/Authentication";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Authentication />
      </Main>
      <Card />
      <Footer />
    </>
  );
}
