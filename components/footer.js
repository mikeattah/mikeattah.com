import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <a
        href="https://icons8.com/icon/38389/git"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/git.png"
          alt="GIT icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icon/23028/css-3"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/css3.png"
          alt="CSS3 icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icon/H997wGMPVphe/sass"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/sass.png"
          alt="Sass icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icon/H997wGMPVphe/bootstrap"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons8-bootstrap-48.png"
          alt="Bootstrap icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icon/39854/javascript"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/javascript.png"
          alt="JavaScript icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icon/55215/jquery"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/jquery.png"
          alt="JQuery icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icon/122637/react"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://img.icons8.com/ios-glyphs/30/000000/react.png"
          alt="React icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icon/A6r5yddU9uA0/redux"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/redux.png"
          alt="Redux icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://worldvectorlogo.com/logo/next-js"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/next-js.svg"
          alt="Next icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a
        href="https://icons8.com/icons/set/graphql-logo"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons8-graphql-48.png"
          alt="Redux icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons-for-free.com/" target="_blank" rel="noreferrer">
        <Image
          src="/gatsby-js.svg"
          alt="Gatsby icon by icons-for-free"
          width="45"
          height="45"
        />
      </a>
      <a href="https://www.iconfinder.com/" target="_blank" rel="noreferrer">
        <Image
          src="/jest-icon.png"
          alt="Redux icon by Iconsfinder"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons-for-free.com/" target="_blank" rel="noreferrer">
        <Image
          src="/cypress-js.svg"
          alt="Cypress icon by icons-for-free"
          width="45"
          height="45"
        />
      </a>
    </div>
  );
}
