import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.hello}>Hello,</h1>
        <h1 className={styles.name}> I'm Manikanta</h1>
        <p className={styles.description1}>
        I have a strong foundation in full stack development, and a passion for solving complex problems through code.
        </p>
        <p className={styles.description2}> Let's connect to create something impactful together!
        </p>
        <div className={styles.buttonContainer}>
          <a href="#contact" className={styles.contactBtn}>Contact_Me</a>
          <a href="/manikanta_resume5.pdf" download="Manikanta_Resume.pdf" className={styles.contactBtn}>Download_CV</a>
        </div>
      
      
      <div className={styles.back_box}>
        {/* Random dots */}
        <div className={`${styles.dot} ${styles.dot1}`}></div>
        <div className={`${styles.dot} ${styles.dot2}`}></div>
        <div className={`${styles.dot} ${styles.dot3}`}></div>
        <div className={`${styles.dot} ${styles.dot4}`}></div>
        <div className={`${styles.dot} ${styles.dot5}`}></div>
        <div className={`${styles.dot} ${styles.dot6}`}></div>
        <div className={`${styles.dot} ${styles.dot7}`}></div>
        <div className={`${styles.dot} ${styles.dot8}`}></div>
        <div className={`${styles.dot} ${styles.dot9}`}></div>
        <div className={`${styles.dot} ${styles.dot10}`}></div>
        <div className={`${styles.dot} ${styles.dot11}`}></div>
        <div className={`${styles.dot} ${styles.dot12}`}></div>
        <div className={`${styles.dot} ${styles.dot13}`}></div>
      </div>
        <img
          src={getImageUrl("hero/WhatsApp_Image_2024-08-13_at_21.15.40_0f04de32-removebg-preview.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
