import { Colors } from "@/common/constant";
import { styled } from "styled-components";

type TProps = {
  title?: string;
  placeholder?: string;
  button?: string;
  onClick?: () => void;
  type?: "text" | "password";
  bgColor?: "netural" | "white";
  description?: string;
};

const Input = ({
  title,
  placeholder = "",
  button,
  onClick,
  type = "text",
  bgColor = "white",
  description,
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
        {description && <DescText>{description}</DescText>}
      </div>
      <div className="w-full relative">
        <InputContent bgColor={bgColor} type={type} placeholder={placeholder} />
        {type === "password" && (
          <EyeImg
            src={"/images/eye_off.png"}
            alt="toggle password visibility"
          />
        )}
      </div>
    </div>
  );
};

export default Input;

const InputContent = styled.input<{ bgColor: "netural" | "white" }>`
  width: 100%;
  padding: 11px 40px 11px 12px; /* 아이콘 위치 공간 확보 */
  border-radius: 5px;
  background-color: ${({ bgColor }) =>
    bgColor === "netural" ? Colors.NeutralF : Colors.White};
  color: ${Colors.Neutral5};
  border: 1px solid ${Colors.Neutral3};

  &::placeholder {
    color: ${Colors.NeutralA}; /* 원하는 색상 코드 */
    //  font-size: 14px; /* 글꼴 크기도 조정 가능 */
    //  font-style: italic; /* 기울임꼴 등 다른 스타일도 적용 가능 */
  }
`;

const Text = styled.span<{ $isCusor?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  color: linear-gradient(135deg, #064567 0%, #e71139 100%);
  cursor: ${(props) => props.$isCusor && "pointer"};
`;

const DescText = styled.span`
  color: ${Colors.Neutral7};
  font-size: 12px;
  font-weight: 300;
`;

const EyeImg = styled.img`
  position: absolute;
  z-index: 4;
  top: 10px;
  right: 10px;
`;
