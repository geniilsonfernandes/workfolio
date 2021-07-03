import React from "react";
import styles from "./CardSkill.module.css";

const CardSkill = ({ title }) => {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>Design a new personal finance management feature that embeds within the current Venmo .</p>
    </div>
  );
};

export default CardSkill;
