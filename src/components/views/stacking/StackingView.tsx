"use client";
import { useRouter } from "next/navigation";

import Header from "@/components/ui/Header";
import TabComponent, { type TypeTab } from "@/components/ui/Tab";

import ExpirationSection from "./ExpirationSection";
import MyListSection from "./MyListSection";
import StackingSection from "./StackingSection";

const tabs: TypeTab[] = [
  {
    id: 0,
    value: "스테이킹",
    content: <StackingSection />,
  },
  {
    id: 1,
    value: "내 목록",
    content: <MyListSection />,
  },
  {
    id: 2,
    value: "만료",
    content: <ExpirationSection />,
  },
];

const StackingView = () => {
  const router = useRouter();

  return (
    <div>
      <Header title="스테이킹" onBack={() => router.push("/main")} />
      <TabComponent tabs={tabs} />
    </div>
  );
};

export default StackingView;
