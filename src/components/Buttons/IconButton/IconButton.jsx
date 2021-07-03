import React from "react";
import styles from "./IconButton.module.css";
const IconButton = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default IconButton;
