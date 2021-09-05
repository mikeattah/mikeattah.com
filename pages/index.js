import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout.js";

export default function Home({ title, description, ...props }) {
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
        <div className={styles.codewars}>
          <div className={styles.codewarslogo}>
            <Image
              src="/codewars-icon.svg"
              alt="Codewars icon"
              layout="fill"
              objectFit="contain"
              title="Codewars Honor"
            />
          </div>
          <span className={styles.codewarstext} title="Codewars Honor">
            {props.honor}
          </span>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
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
