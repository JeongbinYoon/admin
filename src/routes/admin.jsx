import React, { useEffect, useState } from "react";
import Content from "../components/content/content";
import Dashboard from "../components/content/dashboard/dashboard";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import styles from "./admin.module.css";

const Admin = (props) => {
  // const [path, setPath] = useState("/admin");
  // const handleNavigate = (path) => {
  //   setPath(() => path);
  // };

  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.admin_body}>
        <Sidebar />
        <Content content={<Dashboard />} />
      </div>
    </div>
  );
};

export default Admin;
