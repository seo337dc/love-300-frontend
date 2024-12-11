import { styled } from "styled-components";
import { Colors } from "@/common/constant";

const TitleSection = () => {
  return (
    <section className="">
      <h1 className="font-semibold text-[22px]">
        LOVE300 지갑 가입을 시작합니다
      </h1>
      <Description>LOVE300 지갑 가입을 시작합니다</Description>
    </section>
  );
};

export default TitleSection;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.Neutral5};
`;
