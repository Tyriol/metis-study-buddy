"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/app/components/Header/Header.jsx";
import Card from "@/app/components/Card/Card.jsx";
import Footer from "@/app/components/Footer/Footer.jsx";
import Main from "@/app/components/Main/Main.jsx";
import Test from "@/components/Matches/Matches";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
