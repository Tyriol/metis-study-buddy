import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header.jsx";
import Card from "@/components/Card/Card.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Main from "@/components/Main/Main.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <p>METIS CREATED BY BYTE-SIZED FRIENDS</p>
      <Card />
      <Footer />
    </>
  );
}
