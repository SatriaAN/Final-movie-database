// import CSS Module dan di simpan di variable styles
import styles from "./Navbar.module.css";

// Membuat Component Navbar: Menampilkan Navigasi
function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Home</li>
            <li className={styles.navbar__item}>Add Movie</li>
            <li className={styles.navbar__item}>Popular</li>
            <li className={styles.navbar__item}>Now Playing</li>
            <li className={styles.navbar__item}>Home</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
