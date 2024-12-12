import { styled } from "styled-components";
import { Colors } from "@/common/constant";
import { MENU_LIST } from "./constant";
import Menu from "./Menu";

const FooterMenu = () => {
  return (
    <div className="fixed z-10 bottom-0 left-0 w-full h-[100px] flex justify-center">
      <Container>
        {MENU_LIST.map((menu) => (
          <Menu
            key={menu.value}
            fileName={`${menu.fileName}`}
            name={menu.name}
            value={menu.value}
          />
        ))}
      </Container>
    </div>
  );
};

export default FooterMenu;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px;
  background-color: ${Colors.White};

  display: flex;
  justify-content: space-around;

  box-shadow: 0px -3px 10px 0px #00000026;
`;
