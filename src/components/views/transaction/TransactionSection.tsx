import { Colors } from "@/common/constant";
import TransactionCard from "@/components/ui/TransactionCard";
import { styled } from "styled-components";
import { TRANSACTION_DATA } from "../main/constant";

const Transaction = () => {
  return (
    <div>
      <p className="font-light text-sm">2024.11.24</p>
      <Line />

      {TRANSACTION_DATA.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default Transaction;

const Line = styled.div`
  width: 100%;
  border: 1px solid ${Colors.Black};
  margin-bottom: 4px;
`;
