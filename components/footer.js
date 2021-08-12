import Image from "next/image";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <a href="https://icons8.com/icon/23028/html-5">
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png"
          alt="Html 5 icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons8.com/icon/23028/html-5">
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/css3.png"
          alt="CSS3 icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons8.com/icon/H997wGMPVphe/sass">
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/sass.png"
          alt="Sass icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons8.com/icon/39854/javascript">
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/javascript.png"
          alt="JavaScript icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons8.com/icon/55215/jquery">
        <Image
          src="https://img.icons8.com/ios/50/000000/jquery.png"
          alt="JQuery icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons8.com/icon/122637/react">
        <Image
          src="https://img.icons8.com/ios-glyphs/30/000000/react.png"
          alt="React icon by Icons8"
          width="45"
          height="45"
        />
      </a>
      <a href="https://icons8.com/icon/A6r5yddU9uA0/redux">
        <Image
          src="https://img.icons8.com/ios-filled/50/000000/redux.png"
          alt="Redux icon by Icons8"
          width="45"
          height="45"
        />
      </a>
    </div>
  );
}
