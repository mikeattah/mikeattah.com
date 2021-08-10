import Image from "next/image";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Image src="/mikeattah002.jpg" layout="fill" />
        <a className={styles.brand} href="/"></a>
        <a className={styles.brand} href="/about"></a>
        <a className={styles.brand} href="/projects"></a>
        <a className={styles.brand} href="/contact"></a>
      </div>
    </nav>
  );
}
