import { Colors } from "@/common/constant";
import { styled } from "styled-components";

const InfoSection = () => {
  return (
    <Wrap>
      <div className="px-2 w-full flex flex-col gap-2">
        <div className="w-full flex justify-between">
          <TitleText>락업 수량</TitleText>
          <ContentText>1,000</ContentText>
        </div>

        <div className="w-full flex justify-between">
          <TitleText>잔여 락업 수량</TitleText>
          <ContentText>400</ContentText>
        </div>

        <div className="w-full flex justify-between">
          <TitleText>고정 이자</TitleText>
          <ContentText>월 10%</ContentText>
        </div>

        <div className="w-full flex justify-between">
          <TitleText>시작일</TitleText>
          <ContentText>24. 11. 10</ContentText>
        </div>

        <div className="w-full flex justify-between">
          <TitleText>종료일</TitleText>
          <ContentText>24. 11. 10</ContentText>
        </div>
      </div>
    </Wrap>
  );
};

export default InfoSection;

const Wrap = styled.section`
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
