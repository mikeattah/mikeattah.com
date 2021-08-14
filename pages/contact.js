import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import Layout from "../components/layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faAt,
  faMobile,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Contact({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Contact`}>
      <div className={styles.container}>
        <div className={styles.workcontainer}>
          <p className={styles.work}>Let&apos;s work together...</p>
          <p className={styles.coffeetext}>
            How do you like your coffee?{" "}
            <FontAwesomeIcon icon={faCoffee} className={styles.coffee} />
            <span className={styles.watertext}>Drink water!</span>
          </p>
        </div>
        <div className={styles.profilecontainer}>
          <a
            className={styles.profilelink}
            href="https://github.com/mikeattah"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className={styles.profile}
            />
            <span className={styles.text}>GitHub</span>
          </a>
          <a
            className={styles.profilelink}
            href="https://www.linkedin.com/in/mikeattah/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.profile}
            />
            <span className={styles.text}>LinkedIn</span>
          </a>
          <a
            className={styles.profilelink}
            href="https://twitter.com/mikeattah_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className={styles.profile}
            />
            <span className={styles.text}>Twitter</span>
          </a>
          <a className={styles.profilelink} href="mailto:mailenemona@gmail.com">
            <FontAwesomeIcon icon={faAt} className={styles.profile} />
            <span className={styles.text}>Mail</span>
          </a>
          <a className={styles.profilelink} href="tel:+2347013194373">
            <FontAwesomeIcon icon={faMobile} className={styles.profile} />
            <span className={styles.text}>Call</span>
          </a>
        </div>
        <div className={styles.resumecontainer}>
          <a
            className={styles.resumebutton}
            href="/mike_attah_resume.pdf"
            download
          >
            <FontAwesomeIcon icon={faDownload} className={styles.resumeicon} />
            <span className={styles.resumetext}>Resume</span>
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
