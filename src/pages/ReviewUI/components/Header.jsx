import React from "react";
import styles from "../styles.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>{props.title}</h1>
      </div>
    </header>
  );
}

export default Header;
