import { Colors } from "@/common/constant";
import { styled, css } from "styled-components";
import Button from "./Button";

type TProps = {
  isDark?: boolean;
  type: "신청하기" | "출금하기";
  //   data:
};
const StackingCard = ({ isDark = false, type }: TProps) => {
  return (
    <Wrap isDark={isDark}>
      <Header isDark={isDark}>
        <span className="font-semibold text-base">스테이킹</span>
        <span className="font-light text-sm">신청일: 24. 11. 20</span>
      </Header>
      <div className="w-full p-3 flex flex-col gap-4">
        <div className="flex justify-between px-4">
          <div className="text-center">
            <p className="font-normal text-sm">고정 이자</p>
            <p className="font-medium text-lg">월 10%</p>
          </div>

          <div className="text-center">
            <p className="font-normal text-sm">스테이킹 기간</p>
            <p className="font-medium text-lg">월 10%</p>
          </div>

          <div className="text-center">
            <p className="font-normal text-sm">중복 참여</p>
            <p className="font-medium text-lg">불가능</p>
          </div>
        </div>

        <Button
          bgColor={Colors.White}
          color={Colors.Black}
          borderColor={!isDark ? Colors.Black : ""}
        >
          {type}
        </Button>
      </div>
    </Wrap>
  );
};

export default StackingCard;

const Wrap = styled.div<{ isDark: boolean }>`
  width: 100%;
  min-height: 160px;

  background-image: ${({ isDark }) =>
    isDark ? Colors.PrimaryGradient : Colors.White};
  color: ${({ isDark }) => (isDark ? Colors.White : Colors.Black)};
  border-radius: 8px;

  box-shadow: 0px 1px 8px 0px #00000026;
  border: 1px solid ${({ isDark }) => (isDark ? Colors.White : Colors.Black)};
`;

const Header = styled.div<{ isDark: boolean }>`
  width: 100%;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ isDark }) => (isDark ? Colors.White : Colors.Black)};
`;
