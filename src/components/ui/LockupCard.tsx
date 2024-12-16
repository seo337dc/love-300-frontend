import { Colors } from "@/common/constant";
import { useRouter } from "next/navigation";
import { styled, css } from "styled-components";
import Button from "./Button";

type TProps = {
  isDark?: boolean;
  type: "신청하기" | "출금하기";
  //   data:
};
const LockupCard = ({ isDark = false, type }: TProps) => {
  const router = useRouter();
  return (
    <Wrap $isDark={isDark}>
      <Header $isDark={isDark}>
        <span className="font-semibold text-base">락업 {`>`}</span>
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

        <div className="flex gap-4">
          <Button
            height="40px"
            bgColor={isDark ? Colors.White : Colors.Neutral5}
            color={isDark ? Colors.Neutral5 : Colors.White}
            borderColor={isDark ? Colors.Black : ""}
            onClick={() => router.push("/lockup/deposit/1")}
          >
            출금
          </Button>

          <Button
            height="40px"
            bgColor={Colors.Neutral5}
            color={Colors.White}
            onClick={() => router.push("/lockup/send/1")}
          >
            송금
          </Button>
        </div>
      </div>
    </Wrap>
  );
};

export default LockupCard;

const Wrap = styled.div<{ $isDark: boolean }>`
  width: 100%;
  min-height: 160px;

  background-color: ${({ $isDark }) =>
    $isDark ? Colors.NeutralF : Colors.White};
  color: ${({ $isDark }) => ($isDark ? Colors.Black : Colors.Black)};
  border-radius: 8px;
  box-shadow: 0px 1px 8px 0px #00000026;
  border: 1px solid ${({ $isDark }) => ($isDark ? Colors.Black : Colors.Black)};
`;

const Header = styled.div<{ $isDark: boolean }>`
  width: 100%;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ $isDark }) => ($isDark ? Colors.Black : Colors.Black)};
`;
