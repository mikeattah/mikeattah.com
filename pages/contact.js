import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import Layout from "../components/layout.js";
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
          <p className={styles.workone}>Let&apos;s work together...</p>
          <div className={styles.worktwo}>
            <span className={styles.coffeetext}>
              How do you like your coffee?
            </span>
            {/* <FontAwesomeIcon icon={faCoffee} className={styles.coffee} /> */}
          </div>
          {/* <span className={styles.watertext}>Drink water!</span> */}
        </div>
        <div className={styles.profilecontainer}>
          <a
            className={styles.githubprofile}
            href="https://github.com/mikeattah"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className={styles.profileicon}
            />
            <span className={styles.profiletext}>GitHub</span>
          </a>
          <a
            className={styles.linkedinprofile}
            href="https://www.linkedin.com/in/mikeattah/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.profileicon}
            />
            <span className={styles.profiletext}>LinkedIn</span>
          </a>
          <a
            className={styles.twitterprofile}
            href="https://twitter.com/mikeattah_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className={styles.profileicon}
            />
            <span className={styles.profiletext}>Twitter</span>
          </a>
          <a className={styles.maillink} href="mailto:mailenemona@gmail.com">
            <FontAwesomeIcon icon={faAt} className={styles.profileicon} />
            <span className={styles.profiletext}>Mail</span>
          </a>
          <a className={styles.calllink} href="tel:+2347013194373">
            <FontAwesomeIcon icon={faMobile} className={styles.profileicon} />
            <span className={styles.profiletext}>Call</span>
          </a>
        </div>
        <div className={styles.emoticon}>
          <Image src="/cool.png" height="100" width="100" alt="cool emoticon" />
          <div className={styles.attribute}>
            Stickers made by{" "}
            <a
              href="https://www.flaticon.com/authors/stickers"
              title="Stickers"
            >
              Stickers
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
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
