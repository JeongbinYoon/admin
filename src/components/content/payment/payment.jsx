import React, { useEffect, useState } from "react";
import styles from "./payment.module.css";
import MyResponsiveLine from "../card/chart/myresponsiveline";

const Payment = ({ data }) => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    setChartData([{ id: "결제 건수", color: "hsl(132, 70%, 50%)" }]);
  }, [data]);
  // let chartData;
  const makeChartData = async () => {
    let valArr = [];
    //   chartData = [{ id: "결제 건수", color: "hsl(132, 70%, 50%)" }];
    await data.map((val) => valArr.push({ x: val.date, y: val.count }));
    chartData.map((item) => (item.data = valArr));
  };
  data && makeChartData();

  return (
    <div className={styles.payment}>
      {data && (
        <MyResponsiveLine
          data={chartData}
          legend={["날짜", "수량"]}
          rotate={"-45"}
        />
      )}
    </div>
  );
};

export default Payment;
