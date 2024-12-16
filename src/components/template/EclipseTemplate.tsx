import { styled } from "styled-components";

type TProps = {
  children: React.ReactNode;
  isShowEclipse?: boolean;
};
const EclipseBackground = ({ children, isShowEclipse = true }: TProps) => {
  return (
    <Wrapper>
      {isShowEclipse && (
        <>
          <Eclipse1 />
          <Eclipse2 />
        </>
      )}

      <div className="absolute z-10 top-0 left-0 w-full overflow-y-auto max-h-full">
        {children}
      </div>
    </Wrapper>
  );
};

export default EclipseBackground;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* 화면 전체 크기 */
  overflow: hidden; /* 화면을 넘어가는 부분 숨기기 */
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
