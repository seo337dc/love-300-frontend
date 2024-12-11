import { Colors } from "@/common/constant";
import { styled } from "styled-components";

const Nimonic = () => {
  return (
    <section className="grid grid-cols-3 gap-4 p-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Nimonic;

const Card = styled.input`
  width: 90px;
  height: 49px;
  top: 222px;
  left: 32px;
  padding: 12px;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.NeutralE};
  opacity: 0px;
`;
