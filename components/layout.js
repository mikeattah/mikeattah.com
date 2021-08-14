import Head from "next/head";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import styles from "./layout.module.scss";

export default function Layout({
  children,
  pageTitle,
  pageDescription,
  ...props
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
