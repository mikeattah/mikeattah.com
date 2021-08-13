import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import Layout from "../components/layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faAt, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Contact({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Contact`}>
      <div className={styles.container}>
        <div id="work">
          <p>Let&apos;s work together...</p>
          <p>
            How do you like your coffee?{" "}
            <FontAwesomeIcon icon={faCoffee} className={styles.coffee} />
            <span>Drink water!</span>
          </p>
        </div>
        <div id="profile">
          <a>
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className={styles.profile}
            />
            <span>GitHub</span>
          </a>
          <a>
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.profile}
            />
            <span>LinkedIn</span>
          </a>
          <a>
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className={styles.profile}
            />
            <span>Twitter</span>
          </a>
          <a>
            <FontAwesomeIcon icon={faAt} className={styles.profile} />
            <span>Send a mail</span>
          </a>
          <a>
            <FontAwesomeIcon icon={faMobile} className={styles.profile} />
            <span>Call me</span>
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
