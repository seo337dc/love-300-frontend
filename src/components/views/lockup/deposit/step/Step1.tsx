import { useState } from "react";
import { styled } from "styled-components";

import { Colors } from "@/common/constant";
import Button from "@/components/ui/Button";
import TransactionCard from "@/components/ui/TransactionCard";
import { TRANSACTION_DATA } from "@/components/views/main/constant";
import type { TTransaction } from "@/types/transaction";

type TProps = {
  onNext: () => void;
};
const Step1 = ({ onNext }: TProps) => {
  const [transactionList, setTransactionList] =
    useState<TTransaction[]>(TRANSACTION_DATA);

  return (
    <section className="">
      <ListWrap>
        <div className="flex justify-between items-center mb-3">
          <Title>최근 거래 내역</Title>
          <ViewDetails>자세히 보기</ViewDetails>
        </div>

        <Container>
          {transactionList.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </Container>
      </ListWrap>

      <div className="fixed w-full bottom-[120px] left-0 z-10 px-4">
        <Button onClick={onNext}>다음</Button>
      </div>
    </section>
  );
};

export default Step1;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid ${Colors.Black};
  padding: 4px 8px 12px 8px;
`;

const TitleText = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: ${Colors.Neutral7};
`;

const ContentText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.Neutral5};
`;

const ListWrap = styled.div`
  min-height: 500px;
  width: 100%;
  background-color: ${Colors.White};
  padding: 20px;
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
  margin-bottom: 80px;
`;
