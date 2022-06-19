import React, { useEffect, useRef, useState } from "react";
import styles from "./search.module.css";

const UserSearch = ({ onSearch, page, orderBy }) => {

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

  };

  // 초기화
  const nameRef = useRef();
  const statusCheckboxesRef = useRef();
  const reset = () => {
    nameRef.current.value = "";
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
    name: null,
    authority: null,
    paging: 50,
  };

  // 검색
  const handleSearch = () => {
    const statusCheckRef = statusCheckboxesRef.current.childNodes;
    let authority = null;
    [...statusCheckRef]
        .filter((el) => el.tagName === "INPUT")
        .filter((el) => el.checked === true)
        .filter((el) => (authority = el.nextSibling.innerHTML));
    let name = nameRef.current.value;
    page = page === 0 ? 50 : page;
    console.log(page);

    name = name === "" ? null : name;
    if (authority === "일반회원") {
        authority = "USER";
    } else if (authority === "구독회원") {
        authority = "SUBS";
    } else if (authority === "관리자") {
        authority = "ADMIN";
    } else if (authority === "전체") {
        authority = null;
    }

    filteredData.name = name;
    filteredData.authority = authority;
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
        {/* 회원이름 */}
        <div className={styles.searchWord}>
          <div className={styles.title}>회원이름</div>
          <div>
            <input
              ref={nameRef}
              className={styles.productName}
              type="text"
            />
          </div>
        </div>
        
        {/* 주문상태 */}
        <div className={styles.saleStatus}>
          <div className={styles.title}>권한검색</div>
          <div ref={statusCheckboxesRef} className={styles.statusCheckbox}>
            <input
              type="radio"
              value={"일반회원"}
              id={"USER"}
              name={"status"}
            />
            <label htmlFor="USER">일반회원</label>
            <input type="radio" value={"구독회원"} id={"SUBS"} name={"status"} />
            <label htmlFor="SUBS">구독회원</label>
            <input
              type="radio"
              value={"관리자"}
              id={"ADMIN"}
              name={"status"}
            />
            <label htmlFor="ADMIN">관리자</label>
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

export default UserSearch;
