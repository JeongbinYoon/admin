import React from "react";
import styles from "../admin.module.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Content from "../../components/content/content";
import List from "../../components/content/list/list";

const Product = (props) => {
  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.admin_body}>
        <Sidebar />
        <Content content={<List />} />
      </div>
    </div>
  );
};

export default Product;
