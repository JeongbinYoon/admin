import React from "react";
import styles from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateLeft,
  faWonSign,
} from "@fortawesome/free-solid-svg-icons";

const Calculation = () => {
  return (
    <div className={styles.container}>
      {/* 클레임 */}
      <div className={`${styles.icon} ${styles.first}`}>
        <FontAwesomeIcon icon={faArrowRotateLeft} />
      </div>
      <div className={styles.info}>
        <div>
          <span>취소요청</span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
        <div>
          <span>반품요청 </span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
      </div>
      {/* 정산 */}
      <div className={`${styles.icon} ${styles.second}`}>
        <FontAwesomeIcon icon={faWonSign} />
      </div>
      <div className={styles.info}>
        <div>
          <span>오늘 구매확정</span>
          <span>
            <span className={styles.count}>0 </span>건
          </span>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
