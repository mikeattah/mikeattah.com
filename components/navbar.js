import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.imagecontainer}>
          <Link href="/" passHref>
            <Image
              src="/mikeattah002.jpg"
              width="52"
              height="52"
              alt="Mike Attah"
            />
          </Link>
        </div>
        <div className={styles.navitems}>
          <Link className={styles.brand} href="/">
            Home
          </Link>
          <Link className={styles.brand} href="/about">
            About
          </Link>
          <Link className={styles.brand} href="/projects">
            Projects
          </Link>
          <Link className={styles.brand} href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
