"use client";

import Label from "./Label";

import type { TPatient } from "@/types";

type TProps = {
  list: TPatient[];
};
const Table = ({ list }: TProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
              Status
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
              Paintent info
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600"></th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-grey200">
          {list.map((item) => (
            <tr key={item.emr_id}>
              <td className="border border-grey200 px-4 py-2 text-sm text-grey100">
                <Label status={item.status} />
              </td>
              <td className="border border-grey200 px-4 py-2 text-sm text-grey100">
                <p>
                  {item.name} ({item.sex}/{item.age})
                </p>
                <div>
                  {item.emr_id} <div>아이콘</div>
                </div>
              </td>
              <td className="border border-grey200 px-4 py-2 text-sm text-grey100">
                <p>{item.location}</p>
                <p>{item.admission_dt}</p>
              </td>
              <td className="border border-grey200 px-4 py-2 text-sm text-grey100">
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
