import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import Layout from "../components/layout.js";

export default function Projects({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Projects`}>
      <div className={styles.container}>
        <div className={styles.projecttitle}>
          <h1>My Projects</h1>
        </div>
        <div className={styles.projectgroup}>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
        </div>
        <div className={styles.projectbutton}>
          <a
            className={styles.showall}
            href="https://codesandbox.io/u/mikeattah"
            target="_blank"
            rel="noreferrer"
          >
            Show All
          </a>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
