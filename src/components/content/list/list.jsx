import React, { useEffect, useRef, useState } from "react";
import styles from "./list.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/search";
import ProductList from "../productList/productList";
import axios from "axios";

const List = (props) => {
  const [totalData, setTotalData] = useState("");
  const [data, setData] = useState("");
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    // getData();
  }, [page]);

  useEffect(() => {});

  // 데이터 로드
  const getTotalData = async () => {
    const response = await axios
      .get("localhost/api/car-home")
      .then((res) => res.data);

    setTotalData((prev) => {
      return response;
    });
  };

  const getData = async (filteredData) => {
    console.log(filteredData);
    const response = await axios
      .put("localhost/api/cars", filteredData)
      .then((res) => res.data);

    setData((prev) => {
      return response;
    });

  };

  useEffect(() => {
    getData();
    getTotalData();
  }, []);

  // 검색
  const handleSearch = (filteredData) => {
    getData(filteredData);
  };

  // OrderBy
  const handleOrderChange = (orderBy) => {
    console.log(orderBy);
    setOrderBy(orderBy);
  };

  // 페이징 처리
  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleTotalData =() => {
    getTotalData();
  }

  return (
    <div className={styles.product}>
      <div className={styles.totalData}>
        <ul>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>전체</span>
              <span>
                <span className={styles.dataValue}>
                  {totalData.totalQuantity}
                </span>
                건
              </span>
            </div>
          </li>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>판매대기</span>
              <span>
                <span className={styles.dataValue}>{totalData.ready}</span> 건
              </span>
            </div>
          </li>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>판매중</span>
              <span>
                <span className={styles.dataValue}>{totalData.on}</span> 건
              </span>
            </div>
          </li>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>판매종료</span>
              <span>
                <span className={styles.dataValue}>{totalData.stop}</span>건
              </span>
            </div>
          </li>
        </ul>
      </div>

      <Search onSearch={handleSearch} page={page} orderBy={orderBy} />
      <ProductList
        data={data}
        onPageChange={handlePageChange}
        onOrderChange={handleOrderChange}
        onTotalData={handleTotalData}
      />
    </div>
  );
};

export default List;
