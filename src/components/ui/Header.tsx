import { Colors } from "@/common/constant";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

type TProps = {
  onBack?: () => void;
  title?: string;
};

const Header = ({ onBack, title = "" }: TProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (!!onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div className="flex justify-between py-5">
      <IconImg src="/images/back.png" alt="back arrow" onClick={handleBack} />
      <Text>{title}</Text>
      <div />
    </div>
  );
};

export default Header;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Text = styled.p`
  color: ${Colors.Black2};
  font-weight: 500;
  font-size: 18px;
`;
