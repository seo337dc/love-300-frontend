import { styled } from "styled-components";
import EclipseBackground from "@/components/template/EclipseTemplate";
import Button, { BadgeButton } from "@/components/ui/Button";
import { Colors } from "@/common/constant";
import Icon from "@/components/ui/Icon";

const CompleteStacking = () => {
  return (
    <EclipseBackground>
      <section className="h-[70vh] flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <Icon
            fileName="staking.png"
            alt="staking icon"
            width="100px"
            height="100px"
          />
          <p className="font-semibold text-xl">100,000코인 스테이킹</p>
          <p className="font-semibold text-xl">신청이 완료되었습니다!</p>
        </div>
        <BadgeButton href="/main">홈으로</BadgeButton>
      </section>
    </EclipseBackground>
  );
};

export default CompleteStacking;

const Content = styled.div`
  height: 60vh; /* 화면을 가득 채우도록 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1; /* 배경 이미지보다 위에 올리기 */
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 180px;

  background-image: url("/images/bg-complete.png"); /* 배경 이미지 */
  background-size: cover;
  z-index: 0; /* Content보다 아래에 위치 */
`;

const SubText = styled.p`
  color: ${Colors.Neutral5};
  font-weight: 400;
  font-size: 16px;
`;
