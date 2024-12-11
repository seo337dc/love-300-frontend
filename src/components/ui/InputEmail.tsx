import { styled } from "styled-components";
import { Colors } from "@/common/constant";

const InputEmail = () => {
  return (
    <div className="py-3">
      <InputWrapper>
        <InputContent placeholder="이메일 입력" />
        <IconImg src={"/images/email.png"} alt="인풋 아이콘" />
      </InputWrapper>
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
