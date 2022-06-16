import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onNavigate }) => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    onNavigate(path);
  };

  const openSubNav = (e) => {
    const subNav = e.currentTarget.nextSibling;
    if (subNav.classList.contains(`${styles["active"]}`)) {
      subNav.classList.remove(`${styles["active"]}`);
    } else {
      subNav.classList.add(`${styles["active"]}`);
    }
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.imgBox}>
          <img src="./user.png" alt="프로필 이미지" />
        </div>
        <span className={styles.userName}>아이디</span>
      </div>
      <nav id={styles.nav}>
        <div>대시보드</div>
        <ul className={styles.nav}>
          <li>
            <div onClick={openSubNav}>
              <span>상품관리</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <ul className={styles.nav_sub}>
              <li onClick={() => handleNavigate("/product")}>상품조회/수정</li>
              <li>상품등록</li>
              <li>배송정보 관리</li>
            </ul>
          </li>
          <li>
            <div onClick={openSubNav}>
              <span>판매관리</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <ul className={styles.nav_sub}>
              <li>주문통합검색</li>
              <li>미결제 확인</li>
            </ul>
          </li>
          <li>
            <div onClick={openSubNav}>
              <span>정산관리</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <ul className={styles.nav_sub}>
              <li>서브 카테고리</li>
              <li>서브 카테고리</li>
            </ul>
          </li>
          <li>
            <div onClick={openSubNav}>
              <span>문의/리뷰관리</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <ul className={styles.nav_sub}>
              <li>서브 카테고리</li>
              <li>서브 카테고리</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
