import React, { useState, useEffect } from "react";
import Card from "../card/card";
import styles from "../card/card.module.css";
import Member from "../member/member";
import Calculation from "../order/calculation";
import Order from "../order/order";
import Product from "../product/product";
import Review from "../review/review";
import apiData from "../../../data/api.json";
import axios from "axios";

const Dashboard = (props) => {
  const [data, setData] = useState();
  const [orderAndDelivery, setOrderAndDelivery] = useState();
  const [claimAndCalculate, setClaimAndCalculate] = useState();
  const [carInfo, setCarInfo] = useState();
  const [recentCreateList, setRecentCreateList] = useState();
  const [review, setReview] = useState();
  const [recentReviewList, setRecentReviewList] = useState();
  const [userInfo, setUserInfo] = useState();

  const getData = () => {
    setOrderAndDelivery(apiData.orderAndDeliveryInfoDto);
    setClaimAndCalculate(apiData.claimAndCalculate);
    setCarInfo(apiData.carInfo);
    setRecentCreateList(apiData.recentCreateList);
    setReview(apiData.review);
    setRecentReviewList(apiData.recentReviewList);
    setRecentReviewList(apiData.recentReviewList);
    setUserInfo(apiData.userInfo);
  };
  useEffect(() => {
    // getData();
    // console.log(apiData);
    axios
      .get(
        "culture/openapi/rest/koreanpattern/individualizations/2d?serviceKey=PF9LAJQoopohm%2Bi%2BBlO%2FJn7Lf6nT2aorMXAUsPRVsjlLEfwFmcOF4PHdCylgveVUWm8hAvKR1qC0Z7jVJ4IqYg%3D%3D&RequestTime=20100810:23003422&shapeRealm=%EA%B7%80%EC%8B%A0%EB%AC%B8&useRealm=%EB%8F%84%EC%9E%90%EA%B8%B0&cPage=1&rows=10"
      )
      .then((data) => {
        console.log(data.data);
      });
  }, []);

  // const getData = async () => {
  //   await fetch("../../../data/api.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  //   setData();
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className={styles.contentRow}>
        {orderAndDelivery && (
          <Card title={"주문/배송"} body={<Order data={orderAndDelivery} />} />
        )}
        {claimAndCalculate && (
          <Card
            title={"클레임/정산"}
            body={<Calculation data={claimAndCalculate} />}
          />
        )}
      </div>
      <div className={styles.contentRow}>
        <Card title={"결제 건수"} />
        <div className={styles.contentColumn}>
          {carInfo && recentCreateList && (
            <Card
              title={"차량"}
              body={<Product data={{ carInfo, recentCreateList }} />}
            />
          )}

          {review && recentReviewList && (
            <Card
              title={"고객후기"}
              body={<Review data={{ review, recentReviewList }} />}
            />
          )}
        </div>
      </div>
      <div className={styles.contentRow}>
        <Card title={"답변 문의"} />
        {userInfo && (
          <Card title={"회원관리"} body={<Member data={userInfo} />} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
