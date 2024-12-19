import { useMemo, useState } from "react";
import { REG_EMAIL } from "@/common/util";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import InputEmail from "@/components/ui/InputEmail";
import InputPhone from "@/components/ui/InputPhone";
import useSignupStore from "@/store/signupStore";

import type { CountryData } from "react-phone-input-2";

type TProps = {
  handleNext: () => void;
};
const Step1 = ({ handleNext }: TProps) => {
  const { signup, setSignupField } = useSignupStore();
  const [emailError, setEmailLError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [certiError, setCertiError] = useState(false);

  const handleEmail = (value: string) => {
    setSignupField("email", value);
    setEmailLError(!REG_EMAIL.test(value));
  };

  const handlePhone = (value: string) => {
    setSignupField("phone", value);
    const removeCountry = value.replace(`${signup.country.dialCode}`, "");
    if (removeCountry.length < 11) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  const handleCountry = (value: CountryData) => {
    setSignupField("country", value);
  };
  const handleCertificate = (value: number) => {
    if (value.toString().length > 8) {
      return;
    }
    setSignupField("certification", value);
  };

  const disable: boolean = useMemo(() => {
    if (
      !signup.certification ||
      !signup.country ||
      !signup.email ||
      !signup.phone
    ) {
      return true;
    }
    return false;
  }, [signup]);

  return (
    <section>
      <InputEmail
        value={signup.email}
        onChange={handleEmail}
        isError={!!signup.email && emailError}
      />
      <InputPhone
        country={signup.country}
        phone={signup.phone}
        handleCountry={handleCountry}
        handlePhone={handlePhone}
        isError={phoneError}
      />
      <Input
        className="tracking-widest"
        value={signup.certification}
        title="인증번호"
        placeholder="인증번호 6자리"
        onChange={(value) => handleCertificate(Number(value))}
        isError={certiError}
        errorMsg="잘못된 인증번호입니다."
      />

      <Button disabled={disable} onClick={handleNext}>
        다음
      </Button>
    </section>
  );
};

export default Step1;
