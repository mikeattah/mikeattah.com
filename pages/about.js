import Image from "next/image";
import styles from "../styles/About.module.scss";
import Layout from "../components/layout.js";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | About`}>
      <div className={styles.container}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <div className={styles.contenttop}>
            <p>I am a civil engineer turned frontend developer!</p>
            <p>
              My journey into tech started at the beginning of 2021 and it has
              so far been a roller coaster experience - exciting and challenging
              at the same time.
            </p>
            <p>
              I have completed several courses on freeCodeCamp, Codecademy, and
              Sololearn related to HTML, CSS, JavaScript, React and more!
            </p>
            <p>
              Please checkout my{" "}
              <a
                href="https://mikeattah.vercel.app/projects"
                className={styles.links}
              >
                Projects
              </a>{" "}
              page to see what I have done so far. You can also find my
              pro/social media links and resume on the{" "}
              <a
                href="https://mikeattah.vercel.app/contact"
                className={styles.links}
              >
                Contact
              </a>{" "}
              page.
            </p>
          </div>
          <div className={styles.contentbottom}>
            <p>
              I am available for freelance and fulltime roles. And I can build
              web apps with these tools:
            </p>
            <div className={styles.toolsone}>
              <span>CSS</span>
              <span>Sass</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>JQuery</span>
              <span>React</span>
              <span>Redux</span>
              <span>Next</span>
              <span>GraphQL</span>
              <span>Gatsby</span>
            </div>
            <p>Run unit and integration tests with:</p>
            <div className={styles.toolstwo}>
              <span>Jest</span>
              <span>React-Testing-Library</span>
              <span>Cypress</span>
            </div>
            <p>And handle version control with:</p>
            <div className={styles.toolsthree}>
              <span>Git</span>
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
