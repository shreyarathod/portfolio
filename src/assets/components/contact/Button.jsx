import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { isOutline, text, icon } = props;
  return (
    <div className={isOutline ? styles.outline_button : styles.solid_button}>
      {icon}
      {text}
    </div>
  );
}

export default Button;
