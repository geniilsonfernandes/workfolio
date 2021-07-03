import React from "react";
import styles from "./CardSkill.module.css";

const CardSkill = ({ title }) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
    </div>
  );
};

export default CardSkill;
