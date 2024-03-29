import React, { useState, useEffect } from "react";
import Card from "../card/card";
import styles from "../card/card.module.css";
import Member from "../member/member";
import Calculation from "../order/calculation";
import Order from "../order/order";
import Review from "../review/review";
import apiData from "../../../data/api.json";
import axios from "axios";
import Payment from "../payment/payment";
import Answer from "../answer/answer";
import Cars from "../cars/cars";

const Dashboard = (props) => {
  // let data;
  const [data, setData] = useState();
  const [orderAndDelivery, setOrderAndDelivery] = useState("");
  const [claimAndCalculate, setClaimAndCalculate] = useState("");
  const [carInfo, setCarInfo] = useState("");
  const [recentCreateList, setRecentCreateList] = useState("");
  const [review, setReview] = useState("");
  const [recentReviewList, setRecentReviewList] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [statisticsList, setStatisticsList] = useState("");
  const [inquiryOffer, setInquiryOffer] = useState("");
  const [inquiryDto, setInquiryDto] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      console.log(data);
      setOrderAndDelivery(data.orderAndDeliveryInfoDto);
      setClaimAndCalculate(data.claimAndCalculate);
      setCarInfo(data.carInfo);
      setRecentCreateList(data.recentCreateList);
      setReview(data.review);
      setRecentReviewList(data.recentReviewList);
      setRecentReviewList(data.recentReviewList);
      setUserInfo(data.userInfo);
      setStatisticsList(data.statisticsList);
      setInquiryOffer(data.inquiryOffer);
      setInquiryDto(data.inquiryDto);
    }
  }, [data]);

  // 데이터 로드
  const getData = async () => {
    const response = await axios
      .get("/localhost/api/home")
      .then((res) => res.data);

    setData((prev) => {
      return response;
    });

    // 로컬 json
    // setData(apiData);
  };

  return (
    <>
      <div className={styles.contentRow}>
        <Card title={"주문/배송"} body={<Order data={orderAndDelivery} />} />

        <Card
          title={"클레임/정산"}
          body={<Calculation data={claimAndCalculate} />}
        />
      </div>
      <div className={styles.contentRow}>
        <Card title={"결제 건수"} body={<Payment data={statisticsList} />} />
        <div className={styles.contentColumn}>
          <Card
            title={"차량"}
            body={<Cars data={{ carInfo, recentCreateList }} />}
          />
          <Card
            title={"고객후기"}
            body={<Review data={{ review, recentReviewList }} />}
          />
        </div>
      </div>
      <div className={styles.contentRow}>
        <Card title={"답변 문의"} body={<Answer data={inquiryOffer} inquiryDto={inquiryDto} />} />
        <Card title={"회원관리"} body={<Member data={userInfo} />} />
      </div>
    </>
  );
};

export default Dashboard;
