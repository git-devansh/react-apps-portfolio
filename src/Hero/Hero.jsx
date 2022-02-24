import React from "react";
import styles from "./Hero.module.css";
import heroimage from "../assest/heroimage.svg";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftcontent}>
        <h1>
          Hi There! <span className={styles.wave}>👋🏻</span>{" "}
        </h1>
        <h1>
          I'M <span>DEVANSH THAKUR</span>
        </h1>
      </div>
      <div className={styles.rightcontent}>
        <img src={heroimage} alt="developer" className={styles.heroimage} />
      </div>
    </div>
  );
}

export default Hero;
