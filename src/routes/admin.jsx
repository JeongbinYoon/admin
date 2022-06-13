import React from "react";
import Content from "../components/content/content";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import styles from "./admin.module.css";

const Admin = (props) => {
  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.admin_body}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Admin;
