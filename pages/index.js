// import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout.js";

export default function Home({ title, description, ...props }) {
  // const honor = `https://img.shields.io/badge/Codewars-${props.honor}-blue?logo=codewars`;
  return (
    <Layout pageTitle={title} pageDescription={description}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi I&apos;m <span>Mike!</span>
          </h1>
          <h3 className={styles.description}>I am a frontend developer</h3>
          {/* I build web applications using React, Next.js, and Gatsby. */}
          {/* I build web, mobile and desktop apps. */}
        </main>
        {/* <div className={styles.codewars}>
          <a
            href="https://www.codewars.com/users/mikeattah"
            className={styles.codewarslogo}
          >
            <Image
              src={honor}
              alt="Codewars Honor"
              className={styles.codewarstext}
              title="Codewars Honor"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div> */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const [configRes, codewarsRes] = await Promise.all([
    import(`../siteconfig.json`),
    fetch("https://www.codewars.com/api/v1/users/mikeattah"),
  ]);

  const [configData, codewarsData] = await Promise.all([
    configRes.default,
    codewarsRes.json(),
  ]);

  // console.log(codewarsData);

  return {
    props: {
      title: configData.title,
      description: configData.description,
      honor: codewarsData.honor,
    },
  };
}
