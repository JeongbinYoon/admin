import React from "react";
import styles from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faTruck } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  return (
    <div className={styles.container}>
      {/* 주문 */}
      <div className={`${styles.icon} ${styles.first}`}>
        <FontAwesomeIcon icon={faGift} />
      </div>
      <div className={styles.info}>
        <div>
          <span>결제대기</span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
        <div>
          <span>신규주문</span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
      </div>
      {/* 배송 */}
      <div className={`${styles.icon} ${styles.second}`}>
        <FontAwesomeIcon icon={faTruck} />
      </div>
      <div className={styles.info}>
        <div>
          <span>배송준비</span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
        <div>
          <span>배송중</span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
        <div>
          <span>배송완료</span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
      </div>
    </div>
  );
};

export default Order;
