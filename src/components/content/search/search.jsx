import React, { useEffect, useRef, useState } from "react";
import styles from "./search.module.css";

const Search = ({ onSearch, page, orderBy }) => {
  const [category, setCategory] = useState("");
  const myCarCategory = useRef();
  const rentCategory = useRef();
  const selectCategory = (e) => {
    setCategory(e.target.value);
  };

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
  const statusCheckboxesRef = useRef();
  const categoryRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const reset = () => {
    productnameRef.current.value = "";
    const statusCheckRef = statusCheckboxesRef.current.childNodes;
    [...statusCheckRef]
      .filter((el) => el.tagName === "INPUT")
      .map((radio) => (radio.checked = false));
    categoryRef.current.selectedIndex = 0;
    setCategory("대분류");
    minPriceRef.current.value = "";
    maxPriceRef.current.value = "";
    btns &&
      [...btns].map((btn) => {
        btn.classList.remove(`${styles["active"]}`);
      });

    calendarFrom.current.value = "";
    calendarTo.current.value = "";
  };

  const filteredData = {
    carName: null,
    saleStatus: null,
    category: null,
    startPrice: null,
    endPrice: null,
    startDate: null,
    endDate: null,
    orderByFilter: "판매가낮은순",
    paging: 50,
  };

  // 검색
  const handleSearch = () => {
    const statusCheckRef = statusCheckboxesRef.current.childNodes;
    let carName = productnameRef.current.value;
    let saleStatus = null;
    let selectedCategory = null;
    let startPrice = Number(minPriceRef.current.value);
    let endPrice = Number(maxPriceRef.current.value);

    [...statusCheckRef]
      .filter((el) => el.tagName === "INPUT")
      .filter((el) => el.checked === true)
      .filter((el) => (saleStatus = el.nextSibling.innerHTML));
    if (category === "내차사기") {
      selectedCategory = myCarCategory.current.value;
    } else if (category === "렌트") {
      selectedCategory = rentCategory.current.value;
    }

    let d = new Date();
    let startDate = `${calendarFrom.current.value} 00:00`;
    let endDate = `${calendarTo.current.value} 00:00`;

    orderBy = orderBy === "" ? "상품등록일순" : orderBy;
    page = page === 0 ? 50 : page;
    console.log(page);

    carName = carName === "" ? null : carName;
    startPrice = startPrice === 0 ? null : startPrice;
    endPrice = endPrice === 0 ? null : endPrice;
    startDate = startDate === " 00:00" ? null : startDate;
    endDate = endDate === " 00:00" ? null : endDate;
    if (saleStatus === "판매대기") {
      saleStatus = "READY";
    } else if (saleStatus === "판매중") {
      saleStatus = "ON";
    } else if (saleStatus === "판매종료") {
      saleStatus = "STOP";
    } else if (saleStatus === "전체") {
      saleStatus = null;
    }

    filteredData.carName = carName;
    filteredData.saleStatus = saleStatus;
    filteredData.category = selectedCategory;
    filteredData.startPrice = startPrice;
    filteredData.endPrice = endPrice;
    filteredData.startDate = startDate;
    filteredData.endDate = endDate;
    filteredData.orderByFilter = orderBy;
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
          <div className={styles.title}>상품명</div>
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
          <div className={styles.title}>판매상태</div>
          <div ref={statusCheckboxesRef} className={styles.statusCheckbox}>
            <input
              type="radio"
              value={"판매대기"}
              id={"wait"}
              name={"status"}
            />
            <label htmlFor="wait">판매대기</label>
            <input type="radio" value={"판매중"} id={"going"} name={"status"} />
            <label htmlFor="going">판매중</label>
            <input
              type="radio"
              value={"판매종료"}
              id={"done"}
              name={"status"}
            />
            <label htmlFor="done">판매종료</label>
            <input
              type="radio"
              value={"전체"}
              id={"all"}
              name={"status"}
            />
            <label htmlFor="all">전체</label>
          </div>
        </div>

        {/* 카테고리 */}
        <div className={styles.category}>
          <div className={styles.title}>카테고리</div>
          <div>
            <select ref={categoryRef} onChange={selectCategory}>
              <option value="대분류">대분류</option>
              <option value="내차사기">내차사기</option>
              <option value="렌트">렌트</option>
            </select>
            {category === "" || category === "대분류" ? (
              <select disabled>
                <option value="중분류">중분류</option>
              </select>
            ) : category === "내차사기" ? (
              <select className={styles.myCarCategory} ref={myCarCategory}>
                <option value="중분류">중분류</option>
                <option value="차량검색">차량검색</option>
                <option value="리스차량">리스차량</option>
                <option value="테마기획전">테마기획전</option>
                <option value="위클리특가">위클리특가</option>
              </select>
            ) : (
              <select className={styles.rentCategory} ref={rentCategory}>
                <option value="중분류">중분류</option>
                <option value="중고차렌트">중고차 렌트</option>
                <option value="신차렌트">신차 렌트</option>
              </select>
            )}
          </div>
        </div>

        {/* 판매가 */}
        <div className={styles.price}>
          <div className={styles.title}>판매가</div>
          <div>
            <input ref={minPriceRef} type="number" placeholder="최소" />
            <span>~</span>
            <input ref={maxPriceRef} type="number" placeholder="최대" />
          </div>
        </div>

        {/* 기간 */}
        <div className={styles.period}>
          <div className={styles.title}>기간</div>
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

export default Search;
