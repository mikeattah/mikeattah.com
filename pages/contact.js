import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head></Head>
        <main></main>
      </div>
    </Layout>
  );
}
