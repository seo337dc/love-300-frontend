"use client";

import Label from "./Label";
import IconCopy from "@/assets/icon/icon-copy.svg";

import type { TPatient } from "@/types";

type TProps = {
  list: TPatient[];
};
const Table = ({ list }: TProps) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-neutral3 border-b-neutral3 border-b-2">
        <thead className="bg-done_bg">
          <tr>
            <th className="p-4 w-14">Status</th>
            <th className="p-4 min-w-60">Paintent info</th>
            <th className="p-4"></th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-grey200">
          {list.map((item) => (
            <tr key={item.emr_id}>
              <td className="p-2">
                <Label status={item.status} />
              </td>
              <td className="p-2">
                <p>
                  {item.name} ({item.sex}/{item.age})
                </p>
                <div className="flex justify-between">
                  <span>{item.emr_id}</span>
                  <IconCopy className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
              </td>
              <td className="p-2">
                <p>{item.location}</p>
                <p>{item.admission_dt}</p>
              </td>
              <td className="p-2">
                <p>{item.department}</p>
                <p>{item.doctor}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
