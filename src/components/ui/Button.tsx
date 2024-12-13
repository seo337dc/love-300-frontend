import Link from "next/link";
import { Colors } from "@/common/constant";
import Icon from "./Icon";
import * as S from "./Button.styles";

type TProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
};

const Button = ({
  children,
  onClick,
  disabled = false,
  width = "100%",
  height = "50px",
  bgColor = Colors.Black,
  color = Colors.White,
}: TProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <S.ButtonWrap
      disabled={disabled}
      onClick={handleClick}
      width={width}
      height={height}
      $bgColor={bgColor}
      color={color}
    >
      {children}
    </S.ButtonWrap>
  );
};

export default Button;

type TPropsLinkBtn = {
  href: string;
  text: string;
};
export const LinkButton = ({ href, text }: TPropsLinkBtn) => {
  return (
    <Link href={href} className="flex items-center px-4 py-6">
      <S.LinkText>{text}</S.LinkText>
      <Icon
        fileName="right-small.png"
        alt="right icon"
        width="24px"
        height="24px"
      />
    </Link>
  );
};
