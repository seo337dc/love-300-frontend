import { Colors } from "@/common/constant";
import { styled } from "styled-components";

const Card = () => {
  return <Item />;
};

export default Card;

const Item = styled.input`
  width: 102px;
  height: 49px;
  top: 222px;
  left: 32px;
  padding: 12px 29px 12px 29px;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.NeutralE};
  opacity: 0px;
`;
