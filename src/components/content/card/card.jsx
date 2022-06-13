import React from "react";
import styles from "./card.module.css";

const Card = ({ title, body }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default Card;
