import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ hamActive, setHamActive }) => {
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div>
          <h1>VITLIONSSSSSS </h1>
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a href="/" className={`${styles.nav} center`}>
              Departments
            </a>
            <a href="/" className={`${styles.nav} center`}>
              More ways to shop
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Help
            </a>
          </div>
          <div>
            <a href="/" className={styles.login}>
              Submit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
