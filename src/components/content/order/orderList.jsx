import React, { useEffect, useRef, useState } from "react";
import styles from "./orderList.module.css";

const OrderList = ({ data, onPageChange, onOrderChange, onTotalData }) => {
  //   상품삭제
  const handleTotalData =() => {
    onTotalData();
  }

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
          <div className={styles.orderId}>주문번호</div>
          <div className={styles.orderStatus}>주문상태</div>
          <div className={styles.holderName}>명의자명</div>
          <div className={styles.holderNumber}>전화번호</div>
          <div className={styles.account}>은행</div>
          <div className={styles.accountNumber}>계좌번호</div>
          <div className={styles.itemName}>상품명</div>
          <div className={styles.paymentDate}>결제일</div>
          <div className={styles.deadlinePaymentDate}>입금기한</div>
          <div className={styles.orderDate}>주문일</div>
        </div>
        <div className={styles.lists_body}>
          <ul ref={listRef}>
            {data &&
              data.data.map((item) => (
                <li key={item.id}>
                  <div className={styles.orderId}>{item.orderId}</div>
                  <div className={styles.orderStatus}>
                    {item.orderStatus === "WAIT"
                      ? "결제대기"
                      : "결제완료"}
                  </div>
                  <div className={styles.holderName}>{item.holderName}</div>
                  <div className={styles.holderNumber}>{item.holderNumber}</div>
                  <div className={styles.account}>{item.account}</div>
                  <div className={styles.accountNumber}>{item.accountNumber}</div>
                  <div className={styles.itemName}>{item.itemName}</div>
                  <div className={styles.paymentDate}>{item.paymentDate}</div>
                  <div className={styles.deadlinePaymentDate}>{item.deadlinePaymentDate}</div>
                  <div className={styles.orderDate}>{item.orderDate}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
