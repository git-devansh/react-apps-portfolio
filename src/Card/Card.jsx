import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <Link
      to={props.projectItem.src}
      style={{ color: "#000", textDecoration: "none" }}
    >
      <div className={styles.card}>
        <div className={styles.cardbody}>
          <img
            className={styles.cardimg}
            src={props.projectItem.image}
            alt={props.projectItem.projectName}
          />
          <h4 className={styles.cardtitle}>{props.projectItem.projectName}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
