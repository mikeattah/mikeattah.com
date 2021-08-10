import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head></Head>
        <main></main>
      </div>
    </Layout>
  );
}
