import React from "react";
import styles from "./SimpleButton.module.css";
const SimpleButton = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default SimpleButton;
