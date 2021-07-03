import React from "react";
import styles from "./WorkCard.module.css";
import img from "../../../../img/fake.png";
import { Link } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className={styles.work__card}>
      <div className={styles.card__cover}>
        <Link to="projeto/:1">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className={styles.card__title}>
        <h2>
          <Link to="projeto/:1">Colorise App</Link>
        </h2>
        <p>
          Design a new personal finance management feature that embeds within the current Venmo app and in the operating
          system of your choice.
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
