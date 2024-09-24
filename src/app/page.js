import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello School of Code</h1>
        <p>metis</p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
