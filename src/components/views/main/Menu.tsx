import Link from "next/link";
import { styled } from "styled-components";
import Icon from "@/components/ui/Icon";

type TProps = {
  fileName: string;
  name: string;
};
const Menu = ({ fileName, name }: TProps) => {
  return (
    <Link className="flex flex-col items-center gap-2" href={""}>
      <MenuWrap>
        <Icon fileName={fileName} alt={name} width="40px" height="40px" />
      </MenuWrap>
      <span className="font-normal text-base">{name}</span>
    </Link>
  );
};

export default Menu;

const MenuWrap = styled.div`
  width: 70px;
  height: 70px;
  box-shadow: 0px 2px 6px 0px #00000026;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
