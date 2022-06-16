import React, { useState, useEffect } from "react";
import MyResponsiveLine from "../card/chart/myresponsiveline";
import styles from "./answer.module.css";

const Answer = ({ data, inquiryDto }) => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    setChartData([{ id: "문의", color: "hsl(132, 70%, 50%)" }]);
  }, [data]);
  const makeChartData = async () => {
    let valArr = [];
    await data.map((val) => valArr.push({ x: val.hour, y: val.count }));
    chartData.map((item) => (item.data = valArr));
  };
  data && makeChartData();

  return (
    <div className={styles.answer}>
      <div className={styles.container}>
        <div>
          <ul className={`${styles.lists} ${styles.first}`}>
            <li>
              <span>제안/칭찬 접수</span>
              <span>
                <span className={styles.count}>{inquiryDto.offerInquiry}</span> 건
              </span>
            </li>
            <li>
              <span>상품문의</span>
              <span>
                <span className={styles.count}>{inquiryDto.itemInquiry}</span> 건
              </span>
            </li>
            <li>
              <span>고객문의</span>
              <span>
                <span className={styles.count}>{inquiryDto.clientInquiry}</span> 건
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.chart}>
          {data && <MyResponsiveLine data={chartData} rotate={"0"} />}
        </div>
      </div>
    </div>
  );
};

export default Answer;
