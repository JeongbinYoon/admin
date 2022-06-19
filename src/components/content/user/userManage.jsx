import React, { useEffect, useRef, useState } from "react";
import UserSearch from "../search/userSearch";
import UserList from "./userList";
import axios from "axios";

const UserManage = (props) => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    // getData();
  }, [page]);


  const getData = async (filteredData) => {
    console.log(filteredData);
    const response = await axios
      .put("localhost/api/users", filteredData)
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
      <UserSearch onSearch={handleSearch} page={page} />
      <UserList
        data={data}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserManage;
