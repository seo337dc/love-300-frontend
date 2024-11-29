"use client";

import { useEffect, useState } from "react";

import Table from "@/component/common/Table";
import type { TPatient } from "@/types";

import { TEST_DATA } from "./constant";
import { getPatients } from "@/lib/api";

const MainView = () => {
  const [patients, setPatients] = useState<TPatient[]>(TEST_DATA);

  const fetchData = async () => getPatients();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table list={patients} />
    </div>
  );
};

export default MainView;
