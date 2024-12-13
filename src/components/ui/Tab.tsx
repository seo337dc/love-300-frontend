import { useState } from "react";
import { styled } from "styled-components";
import { Colors } from "@/common/constant";

export type TypeTab = {
  id: number;
  value: string;
  content?: React.ReactNode;
};

type TProps = {
  tabs: TypeTab[];
};

const TabComponent = ({ tabs }: TProps) => {
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭

  const handleTabClick = (index: number) => {
    setActiveTab(index); // 클릭한 탭으로 활성화된 탭 변경
  };

  return (
    <div>
      <TabWrapper>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab}
            totalTabs={tabs.length}
          >
            {tab.value}
            <TabLine isActive={index === activeTab} totalTabs={tabs.length} />
          </Tab>
        ))}
      </TabWrapper>

      <section className="p-2 mt-5">{tabs[activeTab].content}</section>
    </div>
  );
};

export default TabComponent;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${Colors.NeutralE};
`;

const Tab = styled.div<{ isActive: boolean; totalTabs: number }>`
  padding-top: 10px;
  padding-bottom: 10px;
  width: ${({ totalTabs }) => `calc(100% / ${totalTabs})`};

  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  color: ${({ isActive }) =>
    isActive ? Colors.PrimaryGradient : Colors.NeutralE};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabLine = styled.div<{ isActive: boolean; totalTabs: number }>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 3px;
  background: ${({ isActive }) =>
    isActive ? Colors.PrimaryGradient : "transparent"};
  transition: width 0.3s ease; /* 라인의 크기 변화 애니메이션 */
`;
