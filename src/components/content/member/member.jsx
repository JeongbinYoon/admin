import React from "react";
import styles from "./member.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Member = ({ data }) => {
  return (
    <div className={styles.member}>
      <div className={styles.total}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <span>총 회원수</span>
        <span className={styles.count}>{data.totalUser}</span>
      </div>

      <div className={styles.new}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <span>신규 회원수</span>
        <span className={styles.count}>{data.newUser}</span>
      </div>

      <div className={styles.subscribe}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <span>구독 회원수</span>
        <span className={styles.count}>{data.subUser}</span>
      </div>

      <div className={styles.normal}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <span>일반 회원수</span>
        <span className={styles.count}>{data.normalUser}</span>
      </div>
    </div>
  );
};

export default Member;
