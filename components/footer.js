import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Image
        src="/icons8-git.svg"
        alt="GIT icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-css3.svg"
        alt="CSS3 icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-sass.svg"
        alt="Sass icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-bootstrap.svg"
        alt="Bootstrap icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-javascript.svg"
        alt="JavaScript icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-jquery.svg"
        alt="JQuery icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-react.svg"
        alt="React icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-redux.svg"
        alt="Redux icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/next-js.svg"
        alt="Next icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/icons8-graphql.svg"
        alt="GraphQL icon by Icons8"
        width="45"
        height="45"
      />
      <Image
        src="/gatsby-js.svg"
        alt="Gatsby icon by icons-for-free"
        width="45"
        height="45"
      />
      <Image
        src="/jest-icon.svg"
        alt="Jest icon by Iconsfinder"
        width="45"
        height="45"
      />
      <Image
        src="/cypress-js.svg"
        alt="Cypress icon by icons-for-free"
        width="45"
        height="45"
      />
    </div>
  );
}
