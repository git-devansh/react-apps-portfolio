import React from "react";
import ReviewItem from "./ReviewItem";
import { motion, AnimatePresence } from "framer-motion";

function ReviewList(props) {
  if (!props.review || props.review.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {props.review.map((i) => (
          <motion.div
            key={i.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ReviewItem
              key={i.id}
              review={i}
              handleDelete={props.handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ReviewList;
