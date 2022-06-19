import React, { useEffect, useRef, useState } from "react";
import styles from "./productList.module.css";
import axios from "axios";

const ProductList = ({ data, onPageChange, onOrderChange }) => {
  //   상품삭제
  const removeData = async (checkedItems) => {
    const response = await axios
      .put("localhost/api/cars-delete", checkedItems)
      .then((res) => res.data);
  };

  const listRef = useRef();
  const removeAlert = (checkedItemArr, checkedItems) => {
    const productNumber = [];
    if (window.confirm("해당 상품을 삭제하시겠습니까?")) {
      checkedItemArr.map((el) => console.log(el.childNodes[1].innerHTML));
      checkedItemArr.map((el) => {
        productNumber.push(el.childNodes[1].innerHTML);
        el.remove();
      });

      Object.assign(checkedItems, { id: productNumber });
      removeData(checkedItems);
    }
  };
  const remove = () => {
    const checkedItemArr = [];
    const checkedItems = { id: checkedItemArr };
    const ul = listRef.current.childNodes;
    [...ul]
      .filter((li) => li.childNodes[0].childNodes[0].checked === true)
      .map((checkedLI) => {
        if (checkedLI.childNodes[2].innerHTML === "판매종료") {
          checkedItemArr.push(checkedLI);
        }
      });
    removeAlert(checkedItemArr, checkedItems);
  };

  const handlePageChange = (e) => {
    let page = Number(e.target.value);
    onPageChange(page);
  };

  const handleOrderChange = (e) => {
    let orderBy = e.target.value;
    onOrderChange(orderBy);
  };
  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <span>상품목록 (총 {data ? data.cnt : 0}개)</span>
        <div className={styles.selectBox}>
          <select onChange={handleOrderChange}>
            <option value="판매가낮은순">판매가 낮은순</option>
            <option value="판매가높은순">판매가 높은순</option>
            <option value="상품등록일순">상품 등록일순</option>
            <option value="상품수정일순">상품 수정일순</option>
          </select>
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
          <div className={styles.check}></div>
          <div className={styles.productNumber}>상품번호</div>
          <div className={styles.salesStatus}>판매상태</div>
          <div className={styles.importStatus}>수입여부</div>
          <div className={styles.name}>상품명</div>
          <div className={styles.carNumber}>차량번호</div>
          <div className={styles.vehicleType}>차종</div>
          <div className={styles.seater}>인승</div>
          <div className={styles.mileage}>주행거리</div>
          <div className={styles.color}>색상</div>
          <div className={styles.fuel}>연료</div>
          <div className={styles.manufacturer}>제조사</div>
          <div className={styles.model}>모델</div>
          <div className={styles.detailModel}>세부모델</div>
          <div className={styles.transmission}>변속기</div>
          <div className={styles.accident}>사고유무</div>
          <div className={styles.categoryName}>카테고리이름</div>
          <div className={styles.assessorName}>차량평가사</div>
          <div className={styles.shopRegion}>지역/직영점</div>
          <div className={styles.stockQuantity}>재고수량</div>
          <div className={styles.createDate}>상품등록일</div>
        </div>
        <div className={styles.lists_body}>
          <ul ref={listRef}>
            {data &&
              data.data.map((item) => (
                <li key={item.id}>
                  <div className={styles.check}>
                    <input type="checkbox" />
                  </div>
                  <div className={styles.productNumber}>{item.id}</div>
                  <div className={styles.salesStatus}>
                    {item.salesStatus === "READY"
                      ? "판매대기"
                      : item.salesStatus === "ON"
                      ? "판매중"
                      : "판매종료"}
                  </div>
                  <div className={styles.importStatus}>
                    {item.importStatus === "0" ? "국산" : "수입"}
                  </div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.carNumber}>{item.carNumber}</div>
                  <div className={styles.vehicleType}>{item.vehicleType}</div>
                  <div className={styles.seater}>{item.seater}</div>
                  <div className={styles.mileage}>{item.mileage}</div>
                  <div className={styles.color}>{item.color}</div>
                  <div className={styles.fuel}>{item.fuel}</div>
                  <div className={styles.manufacturer}>{item.manufacturer}</div>
                  <div className={styles.model}>{item.model}</div>
                  <div className={styles.detailModel}>{item.detailModel}</div>
                  <div className={styles.transmission}>{item.transmission}</div>
                  <div className={styles.accident}>
                    {item.accident ? "유" : "무"}
                  </div>
                  <div className={styles.categoryName}>{item.categoryName}</div>
                  <div className={styles.assessorName}>{item.assessorName}</div>
                  <div className={styles.shopRegion}>{item.shopRegion}</div>
                  <div className={styles.stockQuantity}>
                    {item.stockQuantity}
                  </div>
                  <div className={styles.createDate}>{item.createDate}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <button onClick={remove} className={styles.removeBtn}>
        선택 삭제
      </button>
    </div>
  );
};

export default ProductList;
