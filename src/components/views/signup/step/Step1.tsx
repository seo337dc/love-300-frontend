import Input from "@/components/ui/Input";
import InputEmail from "@/components/ui/InputEmail";
import InputPhone from "@/components/ui/InputPhone";

const Step1 = () => {
  return (
    <section>
      <InputEmail />
      <InputPhone />
      <Input title="인증번호" placeholder="인증번호 6자리" onClick={() => {}} />
    </section>
  );
};

export default Step1;
