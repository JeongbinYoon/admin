import React from "react";
import styles from "./product.module.css";

const Product = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={`${styles.lists} ${styles.first}`}>
          <li>
            <span>판매중</span>
            <span>
              <span className={styles.count}>0 </span>건
            </span>
          </li>
          <li>
            <span>준비중</span>
            <span>
              <span className={styles.count}>0 </span>건
            </span>
          </li>
          <li>
            <span>팬매종료</span>
            <span>
              <span className={styles.count}>0 </span>건
            </span>
          </li>
        </ul>
      </div>
      <div>
        <span className={styles.listTitle}>최근 등록 차량</span>
        <ul className={`${styles.lists} ${styles.second}`}>
          <li>
            <span className={styles.type}>국산</span>
            <span>기아 올 뉴 k7 하이브리드 노블레스</span>
            <span className={styles.date}>06.13</span>
          </li>
          <li>
            <span className={styles.type}>수입</span>
            <span>기아 올 뉴 k7 하이브리드 노블레스</span>
            <span className={styles.date}>06.13</span>
          </li>
          <li>
            <span className={styles.type}>국산</span>
            <span>기아 올 뉴 k7 하이브리드 노블레스</span>
            <span className={styles.date}>06.13</span>
          </li>
          <li>
            <span className={styles.type}>국산</span>
            <span>기아 올 뉴 k7 하이브리드 노블레스</span>
            <span className={styles.date}>06.13</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
