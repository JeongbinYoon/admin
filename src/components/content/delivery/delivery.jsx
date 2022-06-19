import React, { useEffect, useRef, useState } from "react";
import styles from "./delivery.module.css";
import DeliverySearch from "../search/deliverySearch";
import DeliveryList from "./deliveryList";
import axios from "axios";

const Delivery = (props) => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    // getData();
  }, [page]);


  const getData = async (filteredData) => {
    console.log(filteredData);
    const response = await axios
      .put("localhost/api/deliveries", filteredData)
      .then((res) => res.data);

    setData((prev) => {
      return response;
    });

  };

  // 검색
  const handleSearch = (filteredData) => {
    getData(filteredData);
  };

  // 페이징 처리
  const handlePageChange = (page) => {
    setPage(page);
  };


  return (
    <div className={styles.product}>
      <DeliverySearch onSearch={handleSearch} page={page} />
      <DeliveryList
        data={data}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Delivery;
