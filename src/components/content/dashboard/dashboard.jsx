import React, { useState } from "react";
import Card from "../card/card";
import styles from "../card/card.module.css";
import Calculation from "../order/calculation/calculation";
import Order from "../order/order";

const Dashboard = (props) => {
  return (
    <>
      <div className={styles.contentRow}>
        <Card title={"주문/배송"} body={<Order />} />
        <Card title={"클레임/정산"} body={<Calculation />} />
      </div>
      <div className={styles.contentRow}>
        <Card title={"배송/통계"} />
        <div className={styles.contentColumn}>
          <Card title={"차량"} />
          <Card title={"고객후기"} />
        </div>
      </div>
      <div className={styles.contentRow}>
        <Card title={"답변 문의"} />
        <Card title={"회원관리"} />
      </div>
    </>
  );
};

export default Dashboard;
