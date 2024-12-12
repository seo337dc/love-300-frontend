import { Colors } from "@/common/constant";
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
        <Menu fileName="menu-staking.png" name="스테이킹" />
        <Menu fileName="menu-dollar.png" name="송금" />
        <Menu fileName="menu-lockup.png" name="락업" />
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
