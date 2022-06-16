import React from "react";
import styles from "./productList.module.css";

const ProductList = (props) => {
  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <span>상품목록</span>
        <div className={styles.selectBox}>
          <select>
            <option value="판매가 낮은순">판매가 낮은순</option>
            <option value="판매가 높은순">판매가 높은순</option>
            <option value="상품등록일순">상품등록일순</option>
            <option value="상품수정일순">상품수정일순</option>
          </select>
          <select>
            <option value="300">300개씩</option>
            <option value="200">200개씩</option>
            <option value="100">100개씩</option>
            <option value="50">50개씩</option>
          </select>
        </div>
      </div>

      <div className={styles.lists}>
        <div className={styles.lists_header}>
          <div className={styles.check}></div>
          <div className={styles.productNumber}>상품번호</div>
          <div className={styles.saleStatus}>판매상태</div>
          <div className={styles.importStatus}>수입여부</div>
          <div className={styles.productName}>상품명</div>
          <div className={styles.carNumber}>차량번호</div>
          <div className={styles.carName}>차종</div>
          <div className={styles.seat}>인승</div>
          <div className={styles.mileage}>주행거리</div>
          <div className={styles.color}>색상</div>
          <div className={styles.fuel}>연료</div>
          <div className={styles.manufacturer}>제조사</div>
          <div className={styles.model}>모델</div>
          <div className={styles.detailedModel}>세부모델</div>
          <div className={styles.gear}>변속기</div>
          <div className={styles.accident}>사고유무</div>
        </div>
        <div className={styles.lists_body}>
          <ul>
            <li>
              <div className={styles.check}>
                <input type="checkbox" />
              </div>
              <div className={styles.productNumber}>.</div>
              <div className={styles.saleStatus}>.</div>
              <div className={styles.importStatus}>.</div>
              <div className={styles.productName}>.</div>
              <div className={styles.carNumber}>.</div>
              <div className={styles.carName}>.</div>
              <div className={styles.seat}>.</div>
              <div className={styles.mileage}>.</div>
              <div className={styles.color}>.</div>
              <div className={styles.fuel}>.</div>
              <div className={styles.manufacturer}>.</div>
              <div className={styles.model}>.</div>
              <div className={styles.detailedModel}>.</div>
              <div className={styles.gear}>.</div>
              <div className={styles.accident}>.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
