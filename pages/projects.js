import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import Layout from "../components/layout.js";

export default function Projects({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Projects`}>
      <div className={styles.container}>
        <main></main>
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
