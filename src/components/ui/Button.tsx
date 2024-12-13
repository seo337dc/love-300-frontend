import { Colors } from "@/common/constant";
import { styled } from "styled-components";

type TProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
};

const Button = ({
  children,
  onClick,
  disabled = false,
  width = "100%",
  height = "50px",
  bgColor = Colors.Black,
  color = Colors.White,
}: TProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <ButtonWrap
      disabled={disabled}
      onClick={handleClick}
      width={width}
      height={height}
      $bgColor={bgColor}
      color={color}
    >
      {children}
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled.button<{
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
