import { styled } from "styled-components";
import { Colors } from "@/common/constant";

type TProps = {
  step: number;
};
const TitleSection = ({ step }: TProps) => {
  return (
    <section className="">
      <h1 className="font-semibold text-[22px]">
        {[1, 2, 3].includes(step) && "LOVE300 지갑 가입을 시작합니다"}
        {step === 4 && "지갑 보안을 위한 니모닉을 생성합니다"}
      </h1>
      <Description>
        {step === 1 && "새 지갑 생성을 위한 정보를 입력해주세요"}
        {step === 2 && "가입을 위한 아이디와 비밀번호를 입력해주세요"}
        {step === 3 && "높은 보안을 위해 2차 비밀번호를 생성해주세요"}
        {step === 4 &&
          "현재 화면을 캡쳐하거나 단어들을 기록하여 꼭 백업해주세요"}
      </Description>
    </section>
  );
};

export default TitleSection;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.Neutral5};
`;
