import React, { useEffect, useRef, useState } from "react";
import styles from "./product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Search from "../../components/content/search/search";
import ProductList from "../../components/content/productList/productList";
import axios from "axios";
import carData from "../../data/car.json";

const Product = (props) => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    getData();
  }, [page]);

  // 데이터 로드
  const getData = async (filteredData) => {
    console.log(filteredData);
    const response = await axios
      .put("localhost/api/cars", filteredData)
      .then((res) => res.data);

    // setData((prev) => {
    //   return response;
    // });

    setData(carData);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
                <span className={styles.dataValue}>0</span> 건
              </span>
            </div>
          </li>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>판대매기</span>
              <span>
                <span className={styles.dataValue}>0</span> 건
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
                <span className={styles.dataValue}>0</span> 건
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
                <span className={styles.dataValue}>0</span> 건
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
      />
    </div>
  );
};

export default Product;
