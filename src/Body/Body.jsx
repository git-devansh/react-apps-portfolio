import React from "react";
import Projects from "../Projects/Projects";
import styles from "./Body.module.css";

function Body() {
  return (
    <section className={styles.container}>
      <h1 className={styles.reactprojects}>React Projects</h1>
      <div className={styles.underline} />
      <h4 className={styles.undertext}>
        Projects are the most practical way to learn any Language and Framework
      </h4>
      <Projects />
    </section>
  );
}

export default Body;
