import React, { useEffect, useRef, useState } from "react";
import styles from "./search.module.css";

const OrderSearch = ({ onSearch, page, orderBy }) => {

  // 기간 버튼 선택
  const calendarFrom = useRef();
  const calendarTo = useRef();
  let btns;

  const periodBtnClick = (e) => {
    // 버튼 클릭시 스타일 변경
    btns = e.target.parentNode.childNodes;
    [...btns]
      .filter((el) => el !== e.target)
      .map((btn) => {
        if (btn.classList.contains(`${styles["active"]}`)) {
          btn.classList.remove(`${styles["active"]}`);
        }
      });
    e.target.classList.toggle(`${styles["active"]}`);

    // 날짜 변환
    const target = e.target.innerText;
    let d = new Date();
    let today = getDateStr(d);

    if (target === "오늘") {
      calendarFrom.current.value = today;
      calendarTo.current.value = today;
    } else if (target === "1주일") {
      let dayOfMonth = d.getDate();
      d.setDate(dayOfMonth - 7);
      let from = getDateStr(d);
      calendarFrom.current.value = from;
      calendarTo.current.value = today;
    } else if (target === "1개월") {
      let monthOfYear = d.getMonth();
      d.setMonth(monthOfYear - 1);
      let from = getDateStr(d);
      calendarFrom.current.value = from;
      calendarTo.current.value = today;
    } else if (target === "3개월") {
      let monthOfYear = d.getMonth();
      d.setMonth(monthOfYear - 3);
      let from = getDateStr(d);
      calendarFrom.current.value = from;
      calendarTo.current.value = today;
    } else if (target === "6개월") {
      let monthOfYear = d.getMonth();
      d.setMonth(monthOfYear - 6);
      let from = getDateStr(d);
      calendarFrom.current.value = from;
      calendarTo.current.value = today;
    } else if (target === "1년") {
      let fullyear = d.getFullYear();
      d.setFullYear(fullyear - 1);
      let from = getDateStr(d);
      calendarFrom.current.value = from;
      calendarTo.current.value = today;
    } else if (target === "전체") {
    }
  };

  function getDateStr(myDate) {
    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    let day = myDate.getDate();

    month = month < 10 ? "0" + String(month) : month;
    day = day < 10 ? "0" + String(day) : day;

    return year + "-" + month + "-" + day;
  }

  // 초기화
  const productnameRef = useRef();
  const nameRef = useRef();
  const statusCheckboxesRef = useRef();
  const reset = () => {
    nameRef.current.value = "";
    productnameRef.current.value = "";
    const statusCheckRef = statusCheckboxesRef.current.childNodes;
    [...statusCheckRef]
      .filter((el) => el.tagName === "INPUT")
      .map((radio) => (radio.checked = false));

    btns &&
      [...btns].map((btn) => {
        btn.classList.remove(`${styles["active"]}`);
      });

    calendarFrom.current.value = "";
    calendarTo.current.value = "";
  };

  const filteredData = {
    name: null,
    itemName: null,
    orderStatus: null,
    payStartDate: null,
    payEndDate: null,
    orderStartDate: null,
    orderEndDate: null,
    paging: 50,
  };

  // 검색
  const handleSearch = () => {
    const statusCheckRef = statusCheckboxesRef.current.childNodes;
    let orderStatus = null;
    [...statusCheckRef]
        .filter((el) => el.tagName === "INPUT")
        .filter((el) => el.checked === true)
        .filter((el) => (orderStatus = el.nextSibling.innerHTML));
    let name = nameRef.current.value;
    let itemName = productnameRef.current.value;

    let d = new Date();
    let orderStartDate = `${calendarFrom.current.value} 00:00`;
    let orderEndDate = `${calendarTo.current.value} 00:00`;

    orderBy = orderBy === "" ? "상품등록일순" : orderBy;
    page = page === 0 ? 50 : page;
    console.log(page);

    name = name === "" ? null : name;
    itemName = itemName === "" ? null : itemName;
    orderStartDate = orderStartDate === " 00:00" ? null : orderStartDate;
    orderEndDate = orderEndDate === " 00:00" ? null : orderEndDate;
    if (orderStatus === "결제대기") {
        orderStatus = "WAIT";
    } else if (orderStatus === "결제완료") {
        orderStatus = "COMP";
    } else if (orderStatus === "전체") {
        orderStatus = null;
    }

    filteredData.name = name;
    filteredData.itemName = itemName;
    filteredData.orderStatus = orderStatus;
    filteredData.orderStartDate = orderStartDate;
    filteredData.orderEndDate = orderEndDate;
    filteredData.paging = page;
    // filteredData = {
    //   carName,
    //   saleStatus,
    //   category: selectedCategory,
    //   startPrice,
    //   endPrice,
    //   startDate,
    //   endDate,
    //   orderByFilter: orderBy,
    //   paging: page,
    // };
    onSearch(filteredData);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        {/* 상품명 */}
        <div className={styles.searchWord}>
          <div className={styles.title}>명의자명</div>
          <div>
            <input
              ref={nameRef}
              className={styles.productName}
              type="text"
            />
          </div>
        </div>
        
        <div className={styles.searchWord}>
          <div className={styles.title}>차량이름</div>
          <div>
            <input
              ref={productnameRef}
              className={styles.productName}
              type="text"
            />
          </div>
        </div>
        
        {/* 주문상태 */}
        <div className={styles.saleStatus}>
          <div className={styles.title}>주문상태</div>
          <div ref={statusCheckboxesRef} className={styles.statusCheckbox}>
            <input
              type="radio"
              value={"결제대기"}
              id={"wait"}
              name={"status"}
            />
            <label htmlFor="wait">결제대기</label>
            <input type="radio" value={"결제완료"} id={"going"} name={"status"} />
            <label htmlFor="going">결제완료</label>
            <input
              type="radio"
              value={"전체"}
              id={"all"}
              name={"status"}
            />
            <label htmlFor="all">전체</label>
          </div>
        </div>

        {/* 기간 */}
        <div className={styles.period}>
          <div className={styles.title}>주문일</div>
          <div>
            <div onClick={periodBtnClick} className={styles.periodBtns}>
              <div className={styles.periodBtn}>오늘</div>
              <div className={styles.periodBtn}>1주일</div>
              <div className={styles.periodBtn}>1개월</div>
              <div className={styles.periodBtn}>3개월</div>
              <div className={styles.periodBtn}>6개월</div>
              <div className={styles.periodBtn}>1년</div>
              <div className={styles.periodBtn}>전체</div>
            </div>

            <input ref={calendarFrom} type="date" />
            <span>~</span>
            <input ref={calendarTo} type="date" />
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

export default OrderSearch;
