import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.line}></div>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.des}>Explore my diverse projects, where you can see my skills, creativity, and hard work. Each project reflects my focus on delivering high-quality solutions and solving problems effectively.</div>
      <div className="gap">
        <div className={styles.projects}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};