import { useState } from "react";
import ReviewStatus from "./components/ReviewStatus";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import AddReview from "./components/AddReview";
import styles from "./styles.module.css";

function ReviewUI() {
  const [review, setReview] = useState([
    {
      id: -1,
      rating: 10,
      comment: "Lorem ipsum dolor sir amet",
    },
    {
      id: -2,
      rating: 9,
      comment: "Lorem ipsum dolor sir amet",
    },
    {
      id: -3,
      rating: 7,
      comment: "Lorem ipsum dolor sir amet",
    },
    {
      id: -4,
      rating: 10,
      comment: "Lorem ipsum dolor sir amet",
    },
  ]);

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setReview(review.filter((item) => item.id !== id));
    }
  };

  const AddNewReview = (newReview) => {
    newReview.id = review[0] ? review[0].id + 1 : 0;
    setReview([newReview, ...review]);
    console.log(newReview);
  };

  return (
    <div className={styles.body1}>
      <Header title="Review UI App" />
      <div className={styles.container}>
        <AddReview handleNewReview={AddNewReview} />
        <ReviewStatus review={review} />
        <ReviewList review={review} handleDelete={deleteReview} />
      </div>
    </div>
  );
}

export default ReviewUI;
