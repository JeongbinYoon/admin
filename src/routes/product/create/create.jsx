import React from "react";
import Content from "../../../components/content/content";
import Header from "../../../components/header/header";
import ProductCreate from "../../../components/productCreate/productCreate";
import Sidebar from "../../../components/sidebar/sidebar";
import styles from "../../admin.module.css";

const Create = (props) => {
  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.admin_body}>
        <Sidebar />
        <Content content={<ProductCreate />} />
      </div>
    </div>
  );
};

export default Create;
