import Image from "next/image";
import styles from "../styles/Projects.module.scss";
import Layout from "../components/layout.js";
import { projectRecords } from "../projectrecord.js";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Projects`}>
      <div className={styles.container}>
        <div className={styles.projecttitle}>
          <h1>Some of my projects</h1>
        </div>
        <div className={styles.projectgroup}>
          <a className={styles.project} href={projectRecords[0].href}>
            <div className={styles.projectimages}>
              <Image
                src={projectRecords[0].src}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
                alt={projectRecords[0].cap}
                className={styles.image}
              />
            </div>
            <div className={styles.projectcaption}>
              <span>{projectRecords[0].cap}</span>
            </div>
          </a>
          <a className={styles.project} href={projectRecords[1].href}>
            <div className={styles.projectimages}>
              <Image
                src={projectRecords[1].src}
                layout="fill"
                objectFit="cover"
                alt={projectRecords[1].cap}
                className={styles.image}
              />
            </div>
            <div className={styles.projectcaption}>
              <span>{projectRecords[1].cap}</span>
            </div>
          </a>
          <a className={styles.project} href={projectRecords[2].href}>
            <div className={styles.projectimages}>
              <Image
                src={projectRecords[2].src}
                layout="fill"
                objectFit="cover"
                alt={projectRecords[2].cap}
                className={styles.image}
              />
            </div>
            <div className={styles.projectcaption}>
              <span>{projectRecords[2].cap}</span>
            </div>
          </a>
          {/* 4, 5 & 6 are not available on mobile */}
          <a
            className={[styles.project, styles.hideBlock].join(" ")}
            href={projectRecords[3].href}
          >
            <div className={styles.projectimages}>
              <Image
                src={projectRecords[3].src}
                layout="fill"
                objectFit="cover"
                alt={projectRecords[3].cap}
                className={styles.image}
              />
            </div>
            <div className={styles.projectcaption}>
              <span>{projectRecords[3].cap}</span>
            </div>
          </a>
          {/* 5 & 6 are not available on tablet */}
          <a
            className={[styles.project, styles.hideBlock].join(" ")}
            href={projectRecords[4].href}
          >
            <div className={styles.projectimages}>
              <Image
                src={projectRecords[4].src}
                layout="fill"
                objectFit="cover"
                alt={projectRecords[4].cap}
                className={styles.image}
              />
            </div>
            <div className={styles.projectcaption}>
              <span>{projectRecords[4].cap}</span>
            </div>
          </a>
          <a
            className={[styles.project, styles.hideBlock].join(" ")}
            href={projectRecords[5].href}
          >
            <div className={styles.projectimages}>
              <Image
                src={projectRecords[5].src}
                layout="fill"
                objectFit="cover"
                alt={projectRecords[5].cap}
                className={styles.image}
              />
            </div>
            <div className={styles.projectcaption}>
              <span>{projectRecords[5].cap}</span>
            </div>
          </a>
        </div>
        <div className={styles.projectbutton}>
          <a
            className={styles.showall}
            href="https://codesandbox.io/u/mikeattah"
            target="_blank"
            rel="noreferrer"
          >
            <span>Show All</span>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={styles.showallicon}
            />
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
