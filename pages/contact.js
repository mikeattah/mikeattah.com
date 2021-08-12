import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import Layout from "../components/layout";

export default function Contact({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Contact`}>
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
