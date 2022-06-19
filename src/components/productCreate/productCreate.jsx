import React from "react";
import {useNavigate} from 'react-router-dom';
import styles from "./productCreate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

const ProductCreate = (props) => {
  // 데이터 업로드
  // const [data, setData] = useState("");
  const navigate = useNavigate();
  const upLoadData = async (data) => {
    console.log(data);
    const response = await axios
      .post("localhost/api/car-save", data)
      .then((res) => {
        alert(res.data.data);
        if(res.data.status === 200){
          navigate('/admin');
        }
      });
  };

  const [accident, setAccident] = useState(false);
  const [useChange, setUseChange] = useState(false);
  const [useChangeHistory, setUseChangeHistory] = useState(false);
  const [specialAccidentHistory, setSpecialAccidentHistory] = useState(false);
  const categoryBtnClick = (e) => {
    const currentTarget = e.currentTarget.childNodes;
    [...currentTarget].map((btn) => {
      btn.classList.remove(`${styles["active"]}`);
    });
    e.target.classList.add(`${styles["active"]}`);

    if (e.currentTarget.classList.contains(`${styles["accident"]}`)) {
      if (e.target.innerHTML === "있음") setAccident(true);
      else setAccident(false);
    }
    if (e.currentTarget.classList.contains(`${styles["useChange"]}`)) {
      if (e.target.innerHTML === "있음") setUseChange(true);
      else setUseChange(false);
    }
    if (e.currentTarget.classList.contains(`${styles["useChangeHistory"]}`)) {
      if (e.target.innerHTML === "있음") setUseChangeHistory(true);
      else setUseChangeHistory(false);
    }
    if (
      e.currentTarget.classList.contains(`${styles["specialAccidentHistory"]}`)
    ) {
      if (e.target.innerHTML === "있음") setSpecialAccidentHistory(true);
      else setSpecialAccidentHistory(false);
    }
  };

  // 저장하기
  const categoryRef = useRef();
  const nameRef = useRef();
  const carPriceRef = useRef();
  const stockQuantityRef = useRef();
  const registrationFeeRef = useRef();
  const managementCostRef = useRef();
  const vehicleTypeRef = useRef();
  const seaterRef = useRef();
  const modelYearRef = useRef();
  const mileageRef = useRef();
  const colorRef = useRef();
  const fuelRef = useRef();
  const importStatusRef = useRef();
  const manufacturerRef = useRef();
  const modelRef = useRef();
  const detailModelRef = useRef();
  const salesStatusRef = useRef();
  const carNumberRef = useRef();
  const transmissionRef = useRef();
  const driveTypeRef = useRef();
  const sheetMetalRef = useRef();
  const exchangeRef = useRef();
  const detailedConditionRef = useRef();
  const damageMyCarRef = useRef();
  const relativeDamageRef = useRef();
  const assessorEmployeeNumberRef = useRef();

  const submit = () => {
    const inputData = {
      categoryName: categoryRef.current.value,
      name: nameRef.current.value,
      purchaseCost: {
        carPrice: Number(carPriceRef.current.value),
        registrationFee: Number(registrationFeeRef.current.value),
        managementCost: Number(managementCostRef.current.value),
      },
      stockQuantity: Number(stockQuantityRef.current.value),
      vehicleType: vehicleTypeRef.current.value,
      seater: seaterRef.current.value,
      modelYear: modelYearRef.current.value,
      mileage: mileageRef.current.value,
      color: colorRef.current.value,
      fuel: fuelRef.current.value,
      importStatus: importStatusRef.current.value,
      manufacturer: manufacturerRef.current.value,
      model: modelRef.current.value,
      detailModel: detailModelRef.current.value,
      salesStatus: salesStatusRef.current.value,
      carNumber: carNumberRef.current.value,
      salesStatus: salesStatusRef.current.value,
      transmission: transmissionRef.current.value,
      accident,
      driveType: driveTypeRef.current.value,
      inspectionRecord: {
        sheetMetal: Number(sheetMetalRef.current.value),
        useChange,
        exchange: Number(exchangeRef.current.value),
        detailedCondition: Number(detailedConditionRef.current.value),
      },
      insuranceHistory: {
        damageMyCar: Number(damageMyCarRef.current.value),
        relativeDamage: Number(relativeDamageRef.current.value),
        useChangeHistory,
        specialAccidentHistory,
      },
      assessorEmployeeNumber: assessorEmployeeNumberRef.current.value,
    };
    // setData(inputData);
    upLoadData(inputData);
    // console.log(inputData);
  };
  return (
    <div>
      {/* 카테고리 */}
      <div className={styles.container}>
        <div className={styles.container_title}>카테고리</div>
        <div className={styles.container_body}>
          <div
            className={styles.catetory_select}
            style={{ borderBottom: "none" }}
          >
            카레고리명 선택
          </div>
          <select ref={categoryRef}>
            <option value="">선택</option>
            <option value="차량검색">차량검색</option>
            <option value="리스차량">리스차량</option>
            <option value="테마기획전">테마기획전</option>
            <option value="위클릭특가">위클릭특가</option>
            <option value="중고차렌트">중고차렌트</option>
            <option value="신차렌트">신차렌트</option>
          </select>
        </div>
      </div>

      {/* 상품명 */}
      <div className={styles.container}>
        <div className={styles.container_title}>상품명</div>
        <div className={styles.container_body}>
          <input ref={nameRef} type="text" />
        </div>
      </div>

      {/* 판매가 */}
      <div className={`${styles.container} ${styles.salePrice}`}>
        <div className={styles.container_title}>판매가</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>차량가격</div>
            <div>
              <input
                ref={carPriceRef}
                type="number"
                placeholder="숫자만 입력"
              />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>이전등록비</div>
            <div>
              <input
                ref={registrationFeeRef}
                type="number"
                placeholder="숫자만 입력"
              />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>관리비용</div>
            <div>
              <input
                ref={managementCostRef}
                type="number"
                placeholder="숫자만 입력"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 재고수량 */}
      <div className={styles.container}>
        <div className={styles.container_title}>재고수량</div>
        <div className={styles.container_body}>
          <input
            ref={stockQuantityRef}
            type="number"
            placeholder="숫자만 입력"
          />
        </div>
      </div>

      {/* 상품 주요정보 */}
      <div className={`${styles.container} ${styles.carInfo}`}>
        <div className={styles.container_title}>상품 주요정보</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>차종</div>
            <div>
              <select ref={vehicleTypeRef}>
                <option value="">차종을 선택해주세요</option>
                <option value="경차">경차</option>
                <option value="소형차">소형차</option>
                <option value="준중형차">준중형차</option>
                <option value="중형차">중형차</option>
                <option value="대형차">대형차</option>
                <option value="스포츠카">스포츠카</option>
                <option value="SUV">SUV</option>
                <option value="RV">RV</option>
                <option value="경승합차">경승합차</option>
                <option value="승합차">승합차</option>
                <option value="화물차">화물차</option>
                <option value="버스">버스</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>인승</div>
            <div>
              <select ref={seaterRef}>
                <option value="">인승을 입력해주세요</option>
                <option value="4">4인승</option>
                <option value="5">5인승</option>
                <option value="7">7인승</option>
                <option value="9">9인승</option>
                <option value="11">11인승</option>
                <option value="15">15인승</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>연식</div>
            <div>
              <input ref={modelYearRef} type="number" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>주행거리</div>
            <div>
              <input ref={mileageRef} type="number" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>색상</div>
            <div>
              <select ref={colorRef}>
                <option value="">색상을 선택해주세요</option>
                <option value="흰색">흰색</option>
                <option value="진주색">진주색</option>
                <option value="검정색">검정색</option>
                <option value="쥐색">쥐색</option>
                <option value="은색">은색</option>
                <option value="빨간색">빨간색</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>연료</div>
            <div>
              <select ref={fuelRef}>
                <option value="">연료를 선택해주세요</option>
                <option value="가솔린">가솔린</option>
                <option value="디젤">디젤</option>
                <option value="전기">전기</option>
                <option value="수소전기">수소전기</option>
                <option value="CNG">CNG</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>수입여부</div>
            <div>
              <select ref={importStatusRef}>
                <option value="0">국산</option>
                <option value="1">수입</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>제조사</div>
            <div>
              <input ref={manufacturerRef} type="text" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>모델</div>
            <div>
              <input ref={modelRef} type="text" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>세부모델</div>
            <div>
              <input ref={detailModelRef} type="text" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>판매상태</div>
            <div>
              <select ref={salesStatusRef}>
                <option value="">선택</option>
                <option value="READY">준비중</option>
                <option value="ON">판매중</option>
                <option value="STOP">판매종료</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>차량번호</div>
            <div>
              <input ref={carNumberRef} type="text" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>변속기</div>
            <div>
              <select ref={transmissionRef}>
                <option value="">선택</option>
                <option value="오토">오토</option>
                <option value="수동">수동</option>
                <option value="세미오토">세미오토</option>
                <option value="CVT">CVT</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>사고유무</div>
            <div>
              <div
                onClick={categoryBtnClick}
                className={`${styles.category_btns} ${styles.accident}`}
              >
                <div className={styles.catetory_select}>있음</div>
                <div className={styles.active}>없음</div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>구동방식</div>
            <div>
              <select ref={driveTypeRef}>
                <option value="">선택</option>
                <option value="전륜">전륜</option>
                <option value="후륜">후륜</option>
                <option value="4륜">4륜</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 상품 이미지 */}
      <div className={styles.container}>
        <div className={styles.container_title}>상품이미지</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>대표이미지</div>
            <div>
              <label className={styles.inputFileButton} htmlFor="input-file">
                +
              </label>
              <input type="file" id="input-file" style={{ display: "none" }} />
            </div>
          </div>
        </div>
      </div>

      {/* 성능, 상태점검기록 */}
      <div className={styles.container}>
        <div className={styles.container_title}>성능, 상태점검기록</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>판금</div>
            <div>
              <input ref={sheetMetalRef} type="number" placeholder={"0건"} />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>교환</div>
            <div>
              <input ref={exchangeRef} type="number" placeholder={"0건"} />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>용도변경</div>
            <div>
              <div
                onClick={categoryBtnClick}
                className={`${styles.category_btns} ${styles.useChange}`}
              >
                <div className={styles.catetory_select}>있음</div>
                <div className={styles.active}>없음</div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.body_title}>세부상태 확인</div>
            <div>
              <input
                ref={detailedConditionRef}
                type="number"
                placeholder={"0건"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 보험 이력 */}
      <div className={styles.container}>
        <div className={styles.container_title}>보험 이력</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>내차 피해</div>
            <div>
              <input ref={damageMyCarRef} type="number" placeholder={"0건"} />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>상대차 피해</div>
            <div>
              <input
                ref={relativeDamageRef}
                type="number"
                placeholder={"0건"}
              />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>용도변경이력</div>
            <div>
              <div
                onClick={categoryBtnClick}
                className={`${styles.category_btns} ${styles.useChangeHistory}`}
              >
                <div className={styles.catetory_select}>있음</div>

                <div className={styles.active}>없음</div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.body_title}>특수사고이력</div>
            <div
              onClick={categoryBtnClick}
              className={`${styles.category_btns} ${styles.specialAccidentHistory}`}
            >
              <div className={styles.catetory_select}>있음</div>
              <div className={styles.active}>없음</div>
            </div>
          </div>
        </div>
      </div>

      {/* 차량평가사 */}
      <div className={styles.container}>
        <div className={styles.container_title}>차량평가사</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>사번</div>
            <div>
              <input
                ref={assessorEmployeeNumberRef}
                type="text"
                placeholder={"0건"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 등록하기 */}
      <button onClick={submit} className={styles.submitBtn}>
        등록하기
      </button>
    </div>
  );
};

export default ProductCreate;
