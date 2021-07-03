import React from "react";
import styles from "./WorkCard.module.css";
import { Link } from "react-router-dom";
const WorkCard = (props) => {
  const { name, objectives, cover, id } = props;
  return (
    <div className={styles.work__card}>
      <div className={styles.card__cover}>
        <Link to={`projeto/${id}`}>
          <img src={cover} alt="" />
        </Link>
      </div>
      <div className={styles.card__title}>
        <h2>
          <Link to={`projeto/${id}`}>{name}</Link>
        </h2>
        <p>{objectives.substring(0, 150)}</p>
      </div>
    </div>
  );
};

export default WorkCard;
