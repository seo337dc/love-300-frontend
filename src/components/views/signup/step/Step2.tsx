import Input from "@/components/ui/Input";
import InputEmail from "@/components/ui/InputEmail";
import InputPhone from "@/components/ui/InputPhone";

const Step2 = () => {
  return (
    <section>
      <Input title="아이디 생성" placeholder="example123" bgColor="white" />
      <Input
        title="비밀번호 생성"
        placeholder="example123!"
        bgColor="white"
        description="영문, 숫자, 특수문자를 포함해주세요"
        type="password"
      />
      <Input
        title="비밀번호 확인"
        placeholder="example123!"
        bgColor="white"
        description="동일한 비밀번호를 입력해주세요"
        type="password"
      />
    </section>
  );
};

export default Step2;
