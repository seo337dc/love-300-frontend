import SecondPwdTemplate from "@/components/template/SecondPwdTemplate";

type TProps = {
  onNext: () => void;
};
const Step3 = ({ onNext }: TProps) => {
  return (
    <section className="px-4">
      <SecondPwdTemplate actionAfter={onNext} />
    </section>
  );
};

export default Step3;
