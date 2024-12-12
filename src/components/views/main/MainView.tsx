"use client";

import DashboardSection from "./DashboardSection";
import HeaderSection from "./HeaderSection";
import TransactionSection from "./TransactionSection";

const MainView = () => {
  return (
    <div>
      <HeaderSection />
      <DashboardSection />
      <TransactionSection />
    </div>
  );
};

export default MainView;
