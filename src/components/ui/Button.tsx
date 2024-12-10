import { Colors } from "@/common/constant";
import { styled } from "styled-components";

type TProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ children, onClick, disabled = false }: TProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <ButtonWrap disabled={disabled} onClick={handleClick}>
      {children}
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled.button`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 25px;
  color: ${Colors.White};
  background-color: ${(props) =>
    props.disabled ? Colors.NeutralE : Colors.Black};
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  font-size: 16px;
  font-weight: bold;

  transition: background-color 0.3s;
`;
