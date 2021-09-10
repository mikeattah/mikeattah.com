import Head from "next/head";
import Image from "next/image";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import styles from "./layout.module.scss";

const backgroundImage = [
  "/pexels-karolina-grabowska-4194857.jpg",
  "/pexels-monstera-7794483.jpg",
  "/jj-ying-7JX0-bfiuxQ-unsplash.jpg",
  "/pexels-nathalie-de-boever-1398049.jpg",
  "/pexels-emiliano-arano-1312488.jpg",
  "/pexels-pixabay-531767.jpg",
  "/samsommer-vddccTqwal8-unsplash.jpg",
  "/thijs-kennis-hxQWcORMHBE-unsplash.jpg",
];

var randomImage = Math.floor(Math.random() * backgroundImage.length);

export default function Layout({
  children,
  pageTitle,
  pageDescription,
  ...props
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title property="og:title">{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:description"
          content={pageDescription}
          contentType="application/javascript"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikeattah.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={backgroundImage[randomImage]}
        alt="background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        // backgroundRepeat="repeat"
        className={styles.backgroundImage}
      />
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <main className={styles.main}>{children}</main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
