import { styled } from "styled-components";
import { Colors } from "@/common/constant";

export const ButtonWrap = styled.button<{
  width: string;
  height: string;
  color: string;
  $bgColor: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 25px;
  color: ${({ color }) => color};
  background-color: ${(props) =>
    props.disabled ? Colors.NeutralE : props.$bgColor};
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  font-size: 16px;
  font-weight: 400;

  transition: background-color 0.3s;
`;

export const LinkText = styled.span`
  color: ${Colors.Neutral5};
  font-weight: 500;
  font-size: 18px;
`;
