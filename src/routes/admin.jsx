import React, { useEffect, useState } from "react";
import Content from "../components/content/content";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import styles from "./admin.module.css";

const Admin = (props) => {
  const [path, setPath] = useState("/admin");
  const handleNavigate = (path) => {
    setPath(() => path);
  };

  return (
    <div className={styles.admin}>
      <Header />
      <div className={styles.admin_body}>
        <Sidebar onNavigate={handleNavigate} />
        <Content path={path} />
      </div>
    </div>
  );
};

export default Admin;
