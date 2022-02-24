import React, { useState } from "react";
import SelectRating from "./SelectRating";
import Button from "./utils/Button";
import Card from "./utils/Card";
import styles from "../styles.module.css";

function AddReview(props) {
  const [comment, setComment] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState("");
  const [rating, setRating] = useState(10);

  const handleChange = (e) => {
    if (comment === "") {
      setBtnDisabled(true);
      setError(null);
    } else if (comment !== "" && comment.trim().length <= 10) {
      setError("Please enter at least 10 characters");
      setBtnDisabled(true);
    } else {
      setError(null);
      setBtnDisabled(false);
    }
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim().length > 10) {
      const newReview = {
        comment,
        rating,
      };
      props.handleNewReview(newReview);
      setComment("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our new feature?</h2>
        <SelectRating select={(rating) => setRating(rating)} />
        <div className={styles.inputgroup}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write a review"
            value={comment}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Post
          </Button>
        </div>

        <div className={styles.message}>{error}</div>
      </form>
    </Card>
  );
}

export default AddReview;
