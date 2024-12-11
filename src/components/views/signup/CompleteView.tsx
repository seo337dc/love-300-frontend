import { styled } from "styled-components";
import { Colors } from "@/common/constant";
import Button from "@/components/ui/Button";

const CompleteView = () => {
  return (
    <section className="relative h-screen">
      <BackgroundImage />
      <Content>
        <h1 className="font-semibold text-3xl mb-4">환영합니다!</h1>
        <p className="font-medium">Love300 지갑 계정이 생성이</p>
        <p className="font-medium">성공적으로 완료되었습니다!</p>
      </Content>

      <div className="flex flex-col justify-center items-center gap-4">
        <SubText>첫화면으로 돌아가 로그인을 진행해주세요</SubText>
        <Button>로그인하러 가기</Button>
      </div>
    </section>
  );
};

export default CompleteView;

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
