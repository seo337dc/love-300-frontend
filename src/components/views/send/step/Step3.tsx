import SecondPwdTemplate from "@/components/template/SecondPwdTemplate";

type TProps = {
  onNext: () => void;
};
const Step3 = ({ onNext }: TProps) => {
  return <SecondPwdTemplate actionAfter={onNext} />;
};

export default Step3;
