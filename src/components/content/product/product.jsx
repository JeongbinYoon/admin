import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import styles from "./product.module.css";

const Product = ({ data }) => {
  const [carInfo, setCarInfo] = useState(data.carInfo);
  const [recentCreateList, setRecentCreateList] = useState(
    data.recentCreateList
  );

  useEffect(() => {
    setCarInfo(data.carInfo);
    setRecentCreateList(data.recentCreateList);
  }, [data]);

  return (
    <div className={styles.container}>
      <div>
        <ul className={`${styles.lists} ${styles.first}`}>
          <li>
            <span>판매중</span>
            <span>
              <span className={styles.count}>{carInfo.on}</span> 건
            </span>
          </li>
          <li>
            <span>준비중</span>
            <span>
              <span className={styles.count}>{carInfo.ready}</span> 건
            </span>
          </li>
          <li>
            <span>팬매종료</span>
            <span>
              <span className={styles.count}>{carInfo.stop}</span> 건
            </span>
          </li>
        </ul>
      </div>
      <div>
        <span className={styles.listTitle}>최근 등록 차량</span>
        <ul className={`${styles.lists} ${styles.second}`}>
          {recentCreateList &&
            recentCreateList.map((data) => {
              return (
                <li key={data.createDate}>
                  <span className={styles.type}>
                    {data.importStatus === "0" ? "국산" : "수입"}
                  </span>
                  <span>{data.carName}</span>
                  <span className={styles.date}>{data.createDate}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Product;
