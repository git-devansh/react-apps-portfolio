import React from "react";
import styles from "../styles.module.css";

function ReviewStatus(props) {
  let calAverage = (
    props.review.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / props.review.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className={styles.feedbackstats}>
      <h4>{props.review.length} Reviews</h4>
      <h4>Average Rating: {isNaN(calAverage) ? 0 : calAverage}</h4>
    </div>
  );
}

export default ReviewStatus;
