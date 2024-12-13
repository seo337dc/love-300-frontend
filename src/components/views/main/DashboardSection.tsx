import { Colors } from "@/common/constant";
import { MAIN_MENU_LIST } from "@/components/common/constant";
import { styled } from "styled-components";
import Menu from "./Menu";

const DashboardSection = () => {
  const total = 120294784;
  const dollar = 155421;
  const won = 2170454;

  return (
    <section className="py-6 flex flex-col items-center justify-center">
      <TotalText>{total.toLocaleString()}</TotalText>

      <AmountContainer>
        <span>${dollar.toLocaleString()}</span>
        <Divider>|</Divider>
        <span>₩{won.toLocaleString()}</span>
      </AmountContainer>

      <div className="py-6 flex gap-4">
        {MAIN_MENU_LIST.map((menu) => (
          <Menu
            key={menu.value}
            fileName={menu.fileName}
            name={menu.name}
            value={menu.value}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardSection;

const TotalText = styled.h1`
  color: ${Colors.PrimaryGradient};
  font-weight: 700;
  font-size: 40px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 16px;
  font-weight: 400;
`;

const Divider = styled.span`
  color: ${Colors.Neutral7};
`;
