import Image from "next/image";
import styles from "./navbar.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>Copyright by Mike Attah</p>
    </div>
  );
}
