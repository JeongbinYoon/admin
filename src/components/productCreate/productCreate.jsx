import React from "react";
import styles from "./productCreate.module.css";
const ProductCreate = (props) => {
  const categoryBtnClick = (e) => {
    console.log(e.target);
    const currentTarget = e.currentTarget.childNodes;
    [...currentTarget].map((btn) => {
      btn.classList.remove(`${styles["active"]}`);
    });
    e.target.classList.add(`${styles["active"]}`);
  };
  return (
    <div>
      {/* 카테고리 */}
      <div className={styles.container}>
        <div className={styles.container_title}>카테고리</div>
        <div className={styles.container_body}>
          <div onClick={categoryBtnClick} className={styles.category_btns}>
            <div className={`${styles["catetory_search"]} ${styles["active"]}`}>
              카레고리명 검색
            </div>
            <div className={styles.catetory_select}>카레고리명 선택</div>
          </div>
          <input type="text" placeholder="카테고리명 입력" />
        </div>
      </div>

      {/* 상품명 */}
      <div className={styles.container}>
        <div className={styles.container_title}>상품명</div>
        <div className={styles.container_body}>
          <input type="text" />
        </div>
      </div>

      {/* 판매가 */}
      <div className={`${styles.container} ${styles.salePrice}`}>
        <div className={styles.container_title}>판매가</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>차량가격</div>
            <div>
              <input type="number" placeholder="숫자만 입력" />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>이전등록비</div>
            <div>
              <input type="number" placeholder="숫자만 입력" />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>관리비용</div>
            <div>
              <input type="number" placeholder="숫자만 입력" />
            </div>
          </div>
          <div>
            <div className={styles.body_title}>총 판매비용</div>
            <div>
              <input type="number" placeholder="숫자만 입력" />
            </div>
            <button className={styles.calcBtn}>총 비용 계산</button>
          </div>
        </div>
      </div>

      {/* 재고수량 */}
      <div className={styles.container}>
        <div className={styles.container_title}>재고수량</div>
        <div className={styles.container_body}>
          <input type="number" placeholder="숫자만 입력" />
        </div>
      </div>

      {/* 상품 주요정보 */}
      <div className={`${styles.container} ${styles.carInfo}`}>
        <div className={styles.container_title}>상품 주요정보</div>
        <div className={styles.container_body}>
          <div>
            <div className={styles.body_title}>차종</div>
            <div>
              <select>
                <option value="">차종을 선택해주세요</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>인승</div>
            <div>
              <select>
                <option value="">인승을 입력해주세요</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>연식</div>
            <div>
              <input type="number" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>주행거리</div>
            <div>
              <input type="number" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>색상</div>
            <div>
              <select>
                <option value="">색상을 선택해주세요</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>연료</div>
            <div>
              <select>
                <option value="">연료를 선택해주세요</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>제조사/모델</div>
            <div>
              <select>
                <option value="">국산</option>
              </select>
              <select>
                <option value="">제조사</option>
              </select>
              <select>
                <option value="">모델</option>
              </select>
              <select>
                <option value="">세부모델</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>상품상태</div>
            <div>
              <select>
                <option value="">준비중</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>차량번호</div>
            <div>
              <input type="text" />
            </div>
          </div>

          <div>
            <div className={styles.body_title}>변속기</div>
            <div>
              <select>
                <option value="">오토</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>사고유무</div>
            <div>
              <select>
                <option value="">무사고</option>
              </select>
            </div>
          </div>

          <div>
            <div className={styles.body_title}>구동방식</div>
            <div>
              <select>
                <option value="">전륜</option>
                <option value="">후륜</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
