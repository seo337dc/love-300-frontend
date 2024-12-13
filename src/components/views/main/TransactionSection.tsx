import { useState } from "react";
import { styled } from "styled-components";

import { TRANSACTION_DATA } from "./constant";
import { Colors } from "@/common/constant";
import TransactionCard from "@/components/ui/TransactionCard";

import type { TTransaction } from "@/types/transaction";

const TransactionSection = () => {
  const [transactionList, setTransactionList] =
    useState<TTransaction[]>(TRANSACTION_DATA);
  return (
    <Wrapper>
      <InnerWrapper>
        <div className="flex justify-between items-center mb-3">
          <Title>최근 거래 내역</Title>
          <ViewDetails>자세히 보기</ViewDetails>
        </div>
        <Container>
          {transactionList.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </Container>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TransactionSection;

const Wrapper = styled.section`
  width: 100%;
  height: 40vh;

  border-radius: 25px 25px 0 0;
  position: relative;

  display: flex;
  justify-content: center;

  overflow-y: scroll; /* Y축 스크롤 활성화 */

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE, Edge */
  &::-webkit-scrollbar {
    display: none; /* Webkit 기반 브라우저 */
  }

  /* 외부 테두리 그라데이션 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px 25px 0 0; /* 테두리 라운드 */
    background: linear-gradient(
      90deg,
      #064567 0%,
      #e71139 100%
    ); /* 그라데이션 */
    z-index: 1; /* 테두리가 내부 위로 오지 않게 */
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 150px
    );
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 150px
    );
  }
`;

const InnerWrapper = styled.div`
  margin-top: 1.5px;
  width: calc(100% - 3px);
  position: relative; /* Wrapper 내부 요소로 설정 */
  background: white; /* 내부 배경 흰색 */
  border-radius: 23px 23px 0 0; /* 내부 라운드 */
  z-index: 2; /* 테두리 위로 보이도록 설정 */
  padding: 16px; /* 내부 패딩 */
  height: 100%; /* Wrapper 높이 채우기 */
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

const ViewDetails = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.Neutral7};
`;

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
