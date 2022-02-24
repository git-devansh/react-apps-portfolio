import React from "react";
import styles from "../../styles.module.css";

function Button(props) {
  return (
    <button
      type={props.type}
      disabled={props.isDisabled}
      className={`${styles.btn} ${styles.btnprimary}`} //  ${styles}.btn-${props.version}}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
