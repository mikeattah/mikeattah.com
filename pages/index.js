import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mike Attah</title>
        <meta name="description" content="Mike Attah's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi I'm <span>Mike!</span>
        </h1>
        <h3 className={styles.description}>a frontend developer</h3>
      </main>
    </div>
  );
}
