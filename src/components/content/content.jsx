import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import styles from "./content.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Product from "../../routes/product/product";

const Content = ({ path, content }) => {
  // useEffect(() => {
  //   changeContent();
  // }, [path]);

  // const changeContent = () => {
  //   console.log(path);
  //   let content;
  //   if (path === "/admin") {
  //     content = <Dashboard />;
  //     return content;
  //   } else if (path === "/product") {
  //     content = <Product />;
  //     return content;
  //   }
  // };

  const [toggleTitle, setToggleTitle] = useState(true);
  const toggleContentTitle = (e) => {
    const target = e.currentTarget.nextSibling;
    if (target.classList.contains(`${styles["active"]}`)) {
      target.classList.remove(`${styles["active"]}`);
      setToggleTitle(true);
    } else {
      target.classList.add(`${styles["active"]}`);
      setToggleTitle(false);
    }
  };
  return (
    <div className={styles.content}>
      <div className={styles.contentNav}>
        <button onClick={toggleContentTitle}>
          {toggleTitle ? (
            <FontAwesomeIcon icon={faAngleLeft} />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </button>
        <div className={`${styles.contentTitle} `}>대시보드</div>
      </div>
      {/* <Dashboard /> */}
      {content}
      {/* {changeContent()} */}
    </div>
  );
};

export default Content;
