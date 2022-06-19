import React from "react";
import Content from "../../components/content/content";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "../admin.module.css";
import UserManage from "../../components/content/user/userManage";

const User = (props) => {
  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.admin_body}>
        <Sidebar />
        <Content content={<UserManage />} />
      </div>
    </div>
  );
};

export default User;
