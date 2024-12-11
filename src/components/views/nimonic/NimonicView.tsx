"use client";

import HeaderSection from "./HeaderSection";
import Nimonic from "@/components/template/Nimonic";
import Button from "@/components/ui/Button";

const NimonicView = () => {
  return (
    <div className="h-full px-4 flex flex-col justify-center">
      <HeaderSection />
      <Nimonic />
      <Button>확인</Button>
    </div>
  );
};

export default NimonicView;
