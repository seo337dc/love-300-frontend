import { Colors } from "@/common/constant";
import { styled } from "styled-components";

type TProps = {
  title?: string;
  placeholder?: string;
  button?: string;
  onClick?: () => void;
  type?: "text" | "password";
};

const Input = ({
  title,
  placeholder = "",
  button,
  onClick,
  type = "text",
}: TProps) => {
  const handleClickBtn = () => {
    if (onClick) onClick();
  };

  return (
    <div className="py-3">
      <div className="flex justify-between">
        {title && <Text>{title}</Text>}
        {button && (
          <Text $isCusor={true} onClick={handleClickBtn}>
            {button}
          </Text>
        )}
      </div>
      <InputWrapper>
        <InputContent type={type} placeholder={placeholder} />
        {type === "password" && (
          <EyeImg
            src={"/images/eye_off.png"}
            alt="toggle password visibility"
          />
        )}
      </InputWrapper>
    </div>
  );
};

export default Input;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputContent = styled.input`
  width: 100%;
  padding: 11px 40px 11px 12px; /* 아이콘 위치 공간 확보 */
  border-radius: 5px;
  background-color: ${Colors.NeutralF};
  color: ${Colors.Neutral5};
  border: 1px solid ${Colors.Neutral3};
`;

const Text = styled.span<{ $isCusor?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: linear-gradient(135deg, #064567 0%, #e71139 100%);
  cursor: ${(props) => props.$isCusor && "pointer"};
`;

const EyeImg = styled.img`
  position: absolute;
  z-index: 4;
  top: 10px;
  right: 10px;
`;
