import React from "react";
import styles from "./product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Search from "../../components/content/search/search";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <div className={styles.totalData}>
        <ul>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>전체</span>
              <span>
                <span className={styles.dataValue}>0</span> 건
              </span>
            </div>
          </li>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>준비중</span>
              <span>
                <span className={styles.dataValue}>0</span> 건
              </span>
            </div>
          </li>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>판매중</span>
              <span>
                <span className={styles.dataValue}>0</span> 건
              </span>
            </div>
          </li>
          <li>
            <div className={styles.iconBox}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div>
              <span>판매종료</span>
              <span>
                <span className={styles.dataValue}>0</span> 건
              </span>
            </div>
          </li>
        </ul>
      </div>

      <Search />
    </div>
  );
};

export default Product;
