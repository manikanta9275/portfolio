import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.line}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.p}>A skilled full-stack developer proficient in Java and Python for backend solutions, with expertise in HTML, CSS, and JavaScript for dynamic front-end experiences. Experienced with Django, Flask, Node.js, Express.js, React, and MongoDB for building interactive UIs and scalable data management.</p>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      
    </section>
  );
};
