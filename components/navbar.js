import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import {
  faHome,
  faUser,
  faPhoneSquare,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <div className={styles.imagecontainer}>
        <Link href="/" passHref>
          <Image
            src="/mikeattah002.jpg"
            layout="fill"
            objectFit="cover"
            alt="Mike Attah"
          />
        </Link>
      </div>
      <div className={styles.navitems}>
        <Link href="/" passHref>
          <a
            className={
              router.pathname === "/" ? styles.activeLink : styles.link
            }
          >
            <FontAwesomeIcon icon={faHome} className={styles.icons} />
            <span>Home</span>
          </a>
        </Link>
        <Link href="/about" passHref>
          <a
            className={
              router.pathname === "/about" ? styles.activeLink : styles.link
            }
          >
            <FontAwesomeIcon icon={faUser} className={styles.icons} />
            <span>About</span>
          </a>
        </Link>
        <Link href="/projects" passHref>
          <a
            className={
              router.pathname === "/projects" ? styles.activeLink : styles.link
            }
          >
            <FontAwesomeIcon icon={faCogs} className={styles.icons} />
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a
            className={
              router.pathname === "/contact" ? styles.activeLink : styles.link
            }
          >
            <FontAwesomeIcon icon={faPhoneSquare} className={styles.icons} />
            <span>Contact</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
