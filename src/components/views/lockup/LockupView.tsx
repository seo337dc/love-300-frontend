"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import TabComponent, { type TypeTab } from "@/components/ui/Tab";
import ExpirationSection from "./ExpirationSection";
import LockupSection from "./LockupSection";

const tabs: TypeTab[] = [
  {
    id: 0,
    value: "락업",
    content: <LockupSection />,
  },
  {
    id: 1,
    value: "만료",
    content: <ExpirationSection />,
  },
];

const LockupView = () => {
  const router = useRouter();

  return (
    <div>
      <Header title="락업" onBack={() => router.push("/main")} />
      <TabComponent tabs={tabs} />
    </div>
  );
};

export default LockupView;
