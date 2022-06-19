import React, { useEffect, useRef, useState } from "react";
import styles from "./userList.module.css";
import axios from "axios";

const ProductList = ({ data, onPageChange, onOrderChange }) => {

  const listRef = useRef();

  const handlePageChange = (e) => {
    let page = Number(e.target.value);
    onPageChange(page);
  };

  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <span>상품목록 (총 {data ? data.cnt : 0}개)</span>
        <div className={styles.selectBox}>
          <select onChange={handlePageChange}>
            <option value="50">50개씩</option>
            <option value="100">100개씩</option>
            <option value="200">200개씩</option>
            <option value="300">300개씩</option>
          </select>
        </div>
      </div>

      <div className={styles.lists}>
        <div className={styles.lists_header}>
          <div className={styles.userId}>유저번호</div>
          <div className={styles.authority}>권한</div>
          <div className={styles.name}>이름</div>
          <div className={styles.email}>이메일</div>
          <div className={styles.phoneNumber}>전화번호</div>
        </div>
        <div className={styles.lists_body}>
          <ul ref={listRef}>
            {data &&
              data.data.map((item) => (
                <li key={item.id}>
                  <div className={styles.userId}>{item.userId}</div>
                  <div className={styles.authority}>
                    {item.authority === "USER"
                      ? "일반회원"
                      : item.authority === "SUBS"
                      ? "구독회원"
                      : "관리자"}
                  </div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.email}>{item.email}</div>
                  <div className={styles.phoneNumber}>{item.phoneNumber}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
