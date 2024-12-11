import SecondPwd from "@/components/common/SecondPwd";

const Step3 = () => {
  return (
    <section className="min-h-[200px] flex flex-col justify-center items-center">
      <p className="font-medium text-lg mb-5">2차 비밀번호 입력</p>
      <SecondPwd />
    </section>
  );
};

export default Step3;
