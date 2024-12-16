"use client";

import { useRouter } from "next/navigation";
import Transaction from "./TransactionSection";
import Header from "@/components/ui/Header";
import { SearchInput } from "@/components/ui/Input";

const TransactionView = () => {
  const router = useRouter();
  return (
    <div>
      <Header title="거래 내역" onBack={() => router.push("/main")} />

      <section className="p-4">
        <SearchInput />
      </section>

      <section className="flex flex-col gap-8">
        <Transaction />
        <Transaction />
      </section>
    </div>
  );
};

export default TransactionView;
