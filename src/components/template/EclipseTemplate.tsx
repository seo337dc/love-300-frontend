import { styled } from "styled-components";

type TProps = {
  children: React.ReactNode;
  isShowEclipse?: boolean;
};
const EclipseBackground = ({ children, isShowEclipse = true }: TProps) => {
  return (
    <Wrapper>
      {isShowEclipse && (
        <BackgroundLayer>
          <Eclipse1 />
          <Eclipse2 />
        </BackgroundLayer>
      )}

      <ContentLayer>{children}</ContentLayer>
    </Wrapper>
  );
};

export default EclipseBackground;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: auto 0;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden; /* 배경 레이어에만 overflow 숨기기 */
  z-index: 0;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto; /* 콘텐츠 영역에서는 스크롤 허용 */
`;

const Eclipse1 = styled.div`
  position: absolute;
  top: 10%;
  width: 300px;
  height: 300px;
  background-image: url("/images/ellipse-left.png"); /* 첫 번째 이클립스 이미지 경로 */
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const Eclipse2 = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-image: url("/images/ellipse-right.png"); /* 두 번째 이클립스 이미지 경로 */
  background-size: cover;
  background-position: center;
  z-index: 0;
`;
