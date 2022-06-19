import React, { useEffect, useRef, useState } from "react";
import styles from "./search.module.css";

const DeliverySearch = ({ onSearch, page}) => {
    
  // 기간 버튼 선택
  let btns;

  // 초기화
  const productnameRef = useRef();
  const statusCheckboxesRef = useRef();
  const reset = () => {
    productnameRef.current.value = "";
    const statusCheckRef = statusCheckboxesRef.current.childNodes;
    [...statusCheckRef]
      .filter((el) => el.tagName === "INPUT")
      .map((radio) => (radio.checked = false));
    btns &&
      [...btns].map((btn) => {
        btn.classList.remove(`${styles["active"]}`);
      });

  };

  const filteredData = {
    receiver: null,
    deliveryStatus: null,
    paging: 50,
  };

  // 검색
  const handleSearch = () => {
    const statusCheckRef = statusCheckboxesRef.current.childNodes;
    let receiver = productnameRef.current.value;
    let deliveryStatus = null;

    [...statusCheckRef]
      .filter((el) => el.tagName === "INPUT")
      .filter((el) => el.checked === true)
      .filter((el) => (deliveryStatus = el.nextSibling.innerHTML));

    page = page === 0 ? 50 : page;
    console.log(page);

    receiver = receiver === "" ? null : receiver;

    if (deliveryStatus === "배송준비") {
        deliveryStatus = "READY";
    } else if (deliveryStatus === "배송중") {
        deliveryStatus = "GOING";
    } else if (deliveryStatus === "배송완료") {
        deliveryStatus = "COMP";
    } else if (deliveryStatus === "전체") {
        deliveryStatus = null;
    }

    filteredData.receiver = receiver;
    filteredData.deliveryStatus = deliveryStatus;
    filteredData.paging = page;
    onSearch(filteredData);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        {/* 수취인검색 */}
        <div className={styles.searchWord}>
          <div className={styles.title}>수취인검색</div>
          <div>
            <input
              ref={productnameRef}
              className={styles.productName}
              type="text"
            />
          </div>
        </div>

        {/* 판매상태 */}
        <div className={styles.saleStatus}>
          <div className={styles.title}>배송상태</div>
          <div ref={statusCheckboxesRef} className={styles.statusCheckbox}>
            <input
              type="radio"
              value={"배송준비"}
              id={"READY"}
              name={"status"}
            />
            <label htmlFor="READY">배송준비</label>
            <input type="radio" value={"배송중"} id={"GOING"} name={"status"} />
            <label htmlFor="GOING">배송중</label>
            <input
              type="radio"
              value={"배송완료"}
              id={"COMP"}
              name={"status"}
            />
            <label htmlFor="COMP">배송완료</label>
            <input
              type="radio"
              value={"전체"}
              id={"all"}
              name={"status"}
            />
            <label htmlFor="all">전체</label>
          </div>
        </div>
      </div>

      {/* 검색, 초기화 */}
      <div className={styles.resultBtn}>
        <button onClick={handleSearch} className={styles.searchBtn}>
          검색
        </button>
        <button onClick={reset} className={styles.resetBtn}>
          초기화
        </button>
      </div>
    </div>
  );
};

export default DeliverySearch;
