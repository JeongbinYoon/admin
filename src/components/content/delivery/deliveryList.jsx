import React, { useEffect, useRef, useState } from "react";
import styles from "./deliveryList.module.css";
import axios from "axios";

const ProductList = ({ data, onPageChange, onOrderChange, onTotalData }) => {
  //   상품삭제
  const handleTotalData =() => {
    onTotalData();
  }
  const removeData = async (checkedItems) => {
    const response = await axios
      .put("localhost/api/cars-delete", checkedItems)
      .then((res) => {
        alert(res.data.data);
        handleTotalData();
      });
  };

  const listRef = useRef();
  const removeAlert = (checkedItemArr, checkedItems) => {
    const productNumber = [];
    if (window.confirm("해당 상품을 수정하시겠습니까?")) {
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
          <div className={styles.check}>수정</div>
          <div className={styles.deliveryId}>배송번호</div>
          <div className={styles.deliveryStatus}>배송상태</div>
          <div className={styles.receiver}>수취인</div>
          <div className={styles.phoneNumber}>전화번호</div>
          <div className={styles.zipCode}>우편번호</div>
          <div className={styles.city}>주소</div>
          <div className={styles.street}>상세주소</div>
          <div className={styles.hopeDate}>희망배송일</div>
          <div className={styles.deliveryCompDate}>배송완료일</div>
          <div className={styles.createDate}>주문일</div>
          <div className={styles.modifiedDate}>수정일</div>
        </div>
        <div className={styles.lists_body}>
          <ul ref={listRef}>
            {data &&
              data.data.map((item) => (
                <li key={item.id}>
                  <div className={styles.check}>
                    <input type="checkbox" />
                  </div>
                  <div className={styles.deliveryId}>{item.deliveryId}</div>
                  <div className={styles.deliveryStatus}>
                    {item.deliveryStatus === "READY"
                      ? "배송준비"
                      : item.deliveryStatus === "GOING"
                      ? "배송중"
                      : "배송완료"}
                  </div>
                  <div className={styles.receiver}>{item.receiver}</div>
                  <div className={styles.phoneNumber}>{item.phoneNumber}</div>
                  <div className={styles.zipCode}>{item.address.zipCode}</div>
                  <div className={styles.city}>{item.address.city}</div>
                  <div className={styles.street}>{item.address.street}</div>
                  <div className={styles.hopeDate}>{item.hopeDate}</div>
                  <div className={styles.deliveryCompDate}>{item.deliveryCompDate}</div>
                  <div className={styles.createDate}>{item.createDate}</div>
                  <div className={styles.modifiedDate}>{item.modifiedDate}</div>
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
