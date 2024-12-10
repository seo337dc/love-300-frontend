import { Colors } from "@/common/constant";
import { styled } from "styled-components";

const HeaderSection = () => {
  return (
    <section className="text-center">
      <h1 className="font-medium text-lg">니모닉 입력</h1>
      <h2 className="font-normal text-sm">
        백업한 니모닉 단어들을 순서대로 입력해주세요
      </h2>
    </section>
  );
};

export default HeaderSection;
