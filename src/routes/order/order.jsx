import React from "react";
import Content from "../../components/content/content";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../admin.module.css";
import OrderManage from "../../components/content/order/orderManage";

const Order = (props) => {
  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.admin_body}>
        <Sidebar />
        <Content content={<OrderManage />} />
      </div>
    </div>
  );
};

export default Order;
