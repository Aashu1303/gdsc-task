import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          You order we won't deliver, it's VIT promise!
        </h2>
        <div className={styles.slogan}>
          <p>Whatever you want, keep it upto yourself.</p>
        </div>
        <div className={styles.inputLocation}>
          <i className="fa-solid fa-cat"> </i>
          <input type="text" placeholder="So, How was your day ??" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://vitbhopal.ac.in/file/2020/02/Brochure-Front-Cover-Image11.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
