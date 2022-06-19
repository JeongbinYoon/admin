import React from "react";
import Content from "../../../components/content/content";
import DeliveryList from "../../../components/content/delivery/delivery";
import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import styles from "../../admin.module.css";

const Delivery = (props) => {
  return (
    <div className={styles.admin}>
      <Header/>
      <div className={styles.admin_body}>
        <Sidebar/>
        <Content content={<DeliveryList />} />
      </div>
    </div>
  );
};

export default Delivery;
