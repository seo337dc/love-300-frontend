"use client";

import Button from "@/components/ui/Button";
import CardListSection from "./CardListSection";
import HeaderSection from "./HeaderSection";

const NimonicView = () => {
  return (
    <div className="h-full px-4 flex flex-col justify-center">
      <HeaderSection />
      <CardListSection />
      <Button>확인</Button>
    </div>
  );
};

export default NimonicView;
