import React from "react";
import styles from "../product/product.module.css";

const Review = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={`${styles.lists} ${styles.first}`}>
          <li>
            <span>총 후기 수</span>
            <span>
              <span className={styles.count}>0 </span>건
            </span>
          </li>
          <li>
            <span>오늘 작성된 후기</span>
            <span>
              <span className={styles.count}>0 </span>건
            </span>
          </li>
        </ul>
      </div>
      <div>
        <span className={styles.listTitle}>최근 고객 후기</span>
        <ul className={`${styles.lists} ${styles.second}`}>
          <li>
            <span className={styles.type}>내차받기</span>
            <span>후기 후기 후기 후기</span>
            <span className={styles.date}>06.13</span>
          </li>
          <li>
            <span className={styles.type}>내차사기</span>
            <span>후기 후기 후기 후기</span>
            <span className={styles.date}>06.13</span>
          </li>
          <li>
            <span className={styles.type}>내차사기</span>
            <span>후기 후기 후기 후기</span>
            <span className={styles.date}>06.13</span>
          </li>
          <li>
            <span className={styles.type}>내차받기</span>
            <span>후기 후기 후기 후기</span>
            <span className={styles.date}>06.13</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
