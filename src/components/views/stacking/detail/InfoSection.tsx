import { Colors } from "@/common/constant";
import { styled } from "styled-components";

const InfoSection = () => {
  return (
    <Wrap>
      <div className="px-2 w-full">
        <div className="w-full flex justify-between">
          <TitleText>신청 기간</TitleText>
          <ContentText>24. 11. 10 - 24. 12. 30</ContentText>
        </div>

        <div className="w-full flex justify-between">
          <TitleText>고정 이자</TitleText>
          <ContentText>월 10%</ContentText>
        </div>

        <div className="w-full flex justify-between">
          <TitleText>스테이킹 기간</TitleText>
          <ContentText>신청일로부터 30일</ContentText>
        </div>

        <div className="w-full flex justify-between">
          <TitleText>중복 참여</TitleText>
          <ContentText>가능</ContentText>
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
