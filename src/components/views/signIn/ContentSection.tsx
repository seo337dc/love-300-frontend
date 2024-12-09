import { Img } from "@/components/styles";
import { styled } from "styled-components";

const ContentSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <SymbolImg src="/images/symbol.png" />
      <Img src="/images/logo.png" />
      <Text>Crypto Wallet</Text>
    </section>
  );
};

export default ContentSection;

const SymbolImg = styled.img`
  width: 60px;
  height: 60px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 25px;
`;
