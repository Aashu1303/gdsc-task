import styles from "../Navbar/Navbar.module.css";

const NavbarResponsive = ({ hamActive }) => {
  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Departments to kill you
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              More ways to die
            </a>
          </li>
          <li>
            <a href="/" className={`${styles.navR} center`}>
              Help !!!!!!!!!!!!!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarResponsive;
