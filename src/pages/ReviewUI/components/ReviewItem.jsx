import Card from "./utils/Card";
import { FaTimes } from "react-icons/fa";
import styles from "../styles.module.css";

function ReviewItem(props) {
  return (
    <Card>
      <div className={styles.numdisplay}>{props.review.rating}</div>
      <button
        className={styles.close}
        onClick={() => props.handleDelete(props.review.id)}
      >
        <FaTimes color="purple" />
      </button>
      <div>{props.review.comment}</div>
    </Card>
  );
}

export default ReviewItem;
