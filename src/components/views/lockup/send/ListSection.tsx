import { styled } from "styled-components";
import SendCard from "./SendCard";

const ListSection = () => {
  return (
    <section className="px-4 mt-4">
      <TitleText>최근 거래 주소</TitleText>

      <div className="flex flex-col gap-2 mt-2">
        <SendCard />
        <SendCard />
        <SendCard />
        <SendCard />
        <SendCard />
        <SendCard />
        <SendCard />
        <SendCard />
      </div>
    </section>
  );
};

export default ListSection;

const TitleText = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
