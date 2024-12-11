import PhoneInput, { CountryData } from "react-phone-input-2";
import { styled } from "styled-components";
import { Colors } from "@/common/constant";

import "react-phone-input-2/lib/style.css";

const InputPhone = () => {
  return (
    <div className="py-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 mb-2">
          <Text>전화번호 입력</Text>
          <Description>인증번호 인증을 진행해주세요</Description>
        </div>
        <Button disabled>인증하기</Button>
      </div>

      <InputWrapper>
        <InputContent placeholder="Mobile number" />
      </InputWrapper>
    </div>
  );
};

export default InputPhone;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputContent = styled(PhoneInput)`
  .flag-dropdown {
    width: 50px;
    height: 48px;
    border-radius: 5px;
    background-color: ${Colors.White};
  }

  .form-control {
    width: calc(100% - 50px);
    left: 55px;
    height: 48px;
    padding-left: 12px;
  }
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: linear-gradient(135deg, #064567 0%, #e71139 100%);
`;

const Description = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: ${Colors.Neutral7};
`;

const Button = styled.button`
  width: 60px;
  height: 22px;
  border-radius: 14px;
  font-size: 12px;
  background-color: ${Colors.NeutralC};
  color: ${Colors.White};
`;
