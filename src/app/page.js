"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header/Header.jsx";
import Card from "@/app/components/Card/Card.jsx";
import Footer from "@/app/components/Footer/Footer.jsx";
import Main from "@/app/components/Main/Main.jsx";
import Auth from "@/app/components/Authentication/Authentication";
import Authentication from "@/app/components/Authentication/Authentication";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
