import { styled } from "styled-components";
import Icon from "../ui/Icon";

import type { IMenu } from "./constant";

const Menu = ({ fileName, name, value }: IMenu) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pb-4 cursor-pointer">
      <Icon
        width="28px"
        height="28px"
        fileName={`${fileName}.png`}
        alt={value}
      />
      <MenuText>{name}</MenuText>
    </div>
  );
};

export default Menu;

const MenuText = styled.span`
  font-size: 14px;
  font-weight: 300;
`;
