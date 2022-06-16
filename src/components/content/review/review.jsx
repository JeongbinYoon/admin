import React, { useState, useEffect } from "react";
import styles from "../cars/cars.module.css";

const Review = ({ data }) => {
  const [review, setReview] = useState(data.review);
  const [recentReviewList, setRecentReviewList] = useState(
    data.recentReviewList
  );

  useEffect(() => {
    if (review === "" || recentReviewList === "") {
      setReview(data.review);
      setRecentReviewList(data.recentReviewList);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div>
        <ul className={`${styles.lists} ${styles.first}`}>
          <li>
            <span>총 후기 수</span>
            <span>
              <span className={styles.count}>{review.totalReview}</span> 건
            </span>
          </li>
          <li>
            <span>오늘 작성된 후기</span>
            <span>
              <span className={styles.count}>{review.todayReview}</span> 건
            </span>
          </li>
        </ul>
      </div>
      <div>
        <span className={styles.listTitle}>최근 고객 후기</span>
        <ul className={`${styles.lists} ${styles.second}`}>
          {recentReviewList &&
            recentReviewList.map((data) => {
              return (
                <li key={data.id}>
                  <span className={styles.type}>{data.id}</span>
                  <span>{data.title}</span>
                  <span className={styles.date}>{data.createDate}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Review;
