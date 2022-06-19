import React, { useEffect, useRef, useState } from "react";
import OrderSearch from "../search/orderSearch";
import OrderList from "./orderList";
import axios from "axios";

const OrderManage = (props) => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    // getData();
  }, [page]);


  const getData = async (filteredData) => {
    console.log(filteredData);
    const response = await axios
      .put("localhost/api/orders", filteredData)
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
    <div>
      <OrderSearch onSearch={handleSearch} page={page} />
      <OrderList
        data={data}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default OrderManage;
