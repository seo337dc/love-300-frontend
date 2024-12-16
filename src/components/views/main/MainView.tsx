"use client";

import EclipseBackground from "@/components/template/EclipseTemplate";
import DashboardSection from "./DashboardSection";
import HeaderSection from "./HeaderSection";
import TransactionSection from "./TransactionSection";

const MainView = () => {
  return (
    <EclipseBackground>
      <div className="px-4">
        <HeaderSection />
        <DashboardSection />
        <TransactionSection />
      </div>
    </EclipseBackground>
  );
};

export default MainView;
