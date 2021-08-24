import Image from "next/image";
import styles from "../styles/About.module.scss";
import Layout from "../components/layout.js";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | About`}>
      <div className={styles.container}>
        <div className={styles.petdog}>
          <Image
            src="/stuck-at-home-pet-dog-1.png"
            height="75"
            width="75"
            alt="stuck-at-home-pet-dog-1 from blush.design"
          />
        </div>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <div className={styles.contenttop}>
            <p>I am a civil engineer turned frontend developer!</p>
            <p>
              My journey into tech started at the beginning of 2021 and it has
              so far been a roller coaster experience - exciting and challenging
              at the same time, but totally worth it.
            </p>
            <p>
              I have completed several courses on freeCodeCamp, Codecademy,
              Sololearn and W3Schools related to HTML, CSS, JavaScript, React
              and more!
            </p>
            <p>
              Please checkout my{" "}
              <a
                href="https://mikeattah.vercel.app/projects"
                className={styles.links}
              >
                Projects
              </a>{" "}
              page to see what I have done so far. I am eager to get started on
              interesting projects or products!
            </p>
          </div>
          <div className={styles.contentbottom}>
            <p>
              I am available for freelance and fulltime roles. And I can build
              web apps with these tools:
            </p>
            <div className={styles.toolsone}>
              <span className={styles.tool}>CSS</span>
              <span className={styles.tool}>Sass</span>
              <span className={styles.tool}>Bootstrap</span>
              <span className={styles.tool}>JavaScript</span>
              <span className={styles.tool}>JQuery</span>
              <span className={styles.tool}>React</span>
              <span className={styles.tool}>Redux</span>
              <span className={styles.tool}>Next</span>
              <span className={styles.tool}>GraphQL</span>
              <span className={styles.tool}>Gatsby</span>
            </div>
            <p>Run unit and integration tests with:</p>
            <div className={styles.toolstwo}>
              <span className={styles.tool}>Jest</span>
              <span className={styles.tool}>React-Testing-Library</span>
              <span className={styles.tool}>Cypress</span>
            </div>
            <p>And handle version control with:</p>
            <div className={styles.toolsthree}>
              <span className={styles.tool}>Git</span>
            </div>
          </div>
        </div>
        <a
          className={styles.resumebutton}
          href="/mike_attah_resume_002.pdf"
          download
        >
          <FontAwesomeIcon icon={faDownload} className={styles.resumeicon} />
          <span className={styles.resumetext}>Resume</span>
          <span className={styles.resumetextmobile}>Resume</span>
        </a>
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
