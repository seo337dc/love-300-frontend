import { styled } from "styled-components";
import { Colors } from "@/common/constant";

import * as S from "./Input.styles";

type TProps = {
  value?: string;
  onChange: (value: string) => void;
  isError?: boolean;
};
const InputEmail = ({ value, onChange, isError = false }: TProps) => {
  return (
    <div className="py-3">
      <InputWrapper>
        <InputContent
          id="email"
          placeholder="이메일 입력"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <IconImg src={"/images/email.png"} alt="인풋 아이콘" />
      </InputWrapper>
      {isError && (
        <S.ErrorText>정확한 이메일 형식으로 입력해주세요</S.ErrorText>
      )}
    </div>
  );
};

export default InputEmail;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputContent = styled.input`
  width: 100%;
  padding: 11px 12px 11px 40px; /* 아이콘 위치 공간 확보 */
  border-radius: 5px;

  color: ${Colors.Neutral5};
  border: 1px solid ${Colors.Neutral3};

  &::placeholder {
    color: ${Colors.NeutralA}; /* 원하는 색상 코드 */
  }
`;

const IconImg = styled.img`
  position: absolute;
  top: 14px;
  left: 10px;
  z-index: 4;
`;
