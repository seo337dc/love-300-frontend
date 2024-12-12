import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";
import { Colors } from "@/common/constant";
import Icon from "../ui/Icon";

import type { IMenu } from "./constant";

const Menu = ({ fileName, name, value }: IMenu) => {
  const pathName = usePathname();
  const isGrey = `/${value}` !== pathName;

  return (
    <Link
      href={`/${value}`}
      className="flex flex-col items-center justify-center gap-2 pb-4 cursor-pointer"
    >
      <Icon
        width="28px"
        height="28px"
        fileName={`${fileName}${isGrey ? "-grey" : ""}.png`}
        alt={value}
      />
      <MenuText $isGrey={isGrey}>{name}</MenuText>
    </Link>
  );
};

export default Menu;

const MenuText = styled.span<{ $isGrey: boolean }>`
  font-size: 14px;
  font-weight: 300;
  color: ${({ $isGrey }) => ($isGrey ? Colors.NeutralC : Colors.Black)};
`;
