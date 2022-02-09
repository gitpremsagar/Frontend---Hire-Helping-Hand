import Head from "next/head";
import styles from "../styles/Home.module.css";
import AsideLeft from "./../components/Theme/AsideLeft/AsideLeft";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hire Helping Hand</title>
        <meta
          name="description"
          content="Hire helping hand is a platform to hire freelancers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <AsideLeft />
      <main className={styles.main}>This is main page</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
