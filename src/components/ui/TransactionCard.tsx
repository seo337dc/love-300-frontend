import moment from "moment";
import { styled } from "styled-components";
import { Colors, RecentTypeLabel } from "@/common/constant";

import type { TRecentType, TTransaction } from "@/types/transaction";

type TProps = {
  transaction: TTransaction;
};
const TransactionCard = ({ transaction }: TProps) => {
  return (
    <CardWrap>
      <div className="flex justify-between">
        <TypeText type={transaction.type}>
          {RecentTypeLabel[transaction.type]} {`${transaction.value}LOVE`}
        </TypeText>

        <DateText>
          {moment(transaction.date).format("YYYY. MM. DD | hh:mm")}
        </DateText>
      </div>

      <IdText>{transaction.id}</IdText>
    </CardWrap>
  );
};

export default TransactionCard;

const CardWrap = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 1em;

  border-bottom: 1px solid ${Colors.NeutralE};
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TypeText = styled.span<{ type: TRecentType }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ type }) =>
    type === "deposit" ? Colors.Primary1 : Colors.Primary2};
`;

const DateText = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.Neutral7};
`;

const IdText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.Neutral5};
`;
