import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const NavBar = () => {
  const user = false;

  return (
    <div className={`${styles.navContainer} container`}>
      <nav>
        <Link href="/" className={styles.logo}>
          Hotel<span>BA.</span>
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.menuItem}>
            <Link href="/">Blog</Link>
          </li>
        </ul>

        <div>
          {user ? (
            <>
              <Image src="/sdf" height={40} width={40} alt="user img" />
            </>
          ) : (
            <>
              <Link href="/login" className="primary-btn">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
