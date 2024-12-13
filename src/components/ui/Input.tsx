import { formatNumber } from "@/common/util";
import Icon from "./Icon";
import * as S from "./Input.styles";

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
        {title && <S.Text>{title}</S.Text>}
        {button && (
          <S.Text $isCusor={true} onClick={handleClickBtn}>
            {button}
          </S.Text>
        )}
        {description && <S.DescText>{description}</S.DescText>}
      </div>
      <div className="w-full relative">
        <S.InputContent
          $bgColor={bgColor}
          type={type}
          placeholder={placeholder}
        />
        {type === "password" && (
          <S.EyeImg
            src={"/images/eye_off.png"}
            alt="toggle password visibility"
          />
        )}
      </div>
    </div>
  );
};

export default Input;

type TPropsNumberInput = {
  value: string;
  handleInput: (value: string) => void;
};
export const NumberInput = ({ value, handleInput }: TPropsNumberInput) => {
  const handleAmountChange = (value: string) => {
    const rawValue = value.replace(/,/g, ""); // 입력 값에서 쉼표 제거
    if (/^\d*\.?\d*$/.test(rawValue)) {
      const formattedValue = formatNumber(rawValue);
      handleInput(formattedValue);
    }
  };

  return (
    <S.NumberInputContainer
      type="text"
      value={formatNumber(value)}
      placeholder="수량입력"
      onChange={(e) => handleAmountChange(e.target.value)}
    />
  );
};

export const SearchInput = () => {
  return (
    <S.SearchInputWrapper>
      <Icon fileName="search.png" alt="search icon" />
      <S.SearchInput />
    </S.SearchInputWrapper>
  );
};
