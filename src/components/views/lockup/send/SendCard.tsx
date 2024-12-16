import { Colors } from "@/common/constant";
import { styled } from "styled-components";

const SendCard = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <p className="font-semibold text-base">abc123</p>
        <DateText>2024. 11. 24 l 18:06 </DateText>
      </div>
      <IdText>d859390524f10a499a7200581cda636e277c3b9e6dssdz</IdText>
    </div>
  );
};

export default SendCard;

const DateText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.Neutral7};
`;

const IdText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${Colors.Neutral5};
`;
