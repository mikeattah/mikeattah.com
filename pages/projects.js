import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import Layout from "../components/layout.js";
import { projectRecords } from "../projectrecord.js";

const projectOne = Math.floor(Math.random() * projectRecords.length);
const projectTwo = Math.floor(Math.random() * projectRecords.length);
const projectThree = Math.floor(Math.random() * projectRecords.length);
const projectFour = Math.floor(Math.random() * projectRecords.length);

// projectRecords[projectOne].href
// projectRecords[projectOne].src
// projectRecords[projectOne].cap

export default function Projects({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Projects`}>
      <div className={styles.container}>
        <div className={styles.projecttitle}>
          <h1>Some of my projects</h1>
        </div>
        <div className={styles.projectgroup}>
          <a className={styles.project}>
            <Image
              src="/projects/random-quote-machine.jpg"
              width="100"
              height="100"
              alt="Random Quote Machine"
            />
            <span></span>
          </a>
          <a className={styles.project}></a>
          <a className={styles.project}></a>
          <a className={styles.project}></a>
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
