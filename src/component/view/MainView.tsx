"use client";

import { useState } from "react";

import Table from "@/component/common/Table";
import type { TPatient } from "@/types";

import { TEST_DATA } from "./constant";

const MainView = () => {
  const [patients, setPatients] = useState<TPatient[]>(TEST_DATA);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table list={patients} />
    </div>
  );
};

export default MainView;
