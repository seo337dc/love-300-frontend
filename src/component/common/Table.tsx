"use client";

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
              ID
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
              status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-grey200">
          {list.map((item) => (
            <tr key={item.id}>
              <td className="border border-grey200 px-4 py-2 text-sm text-grey100">
                {item.id}
              </td>
              <td className="border border-grey200 px-4 py-2 text-sm text-grey100">
                {item.name}
              </td>
              <td className="border border-grey200 px-4 py-2 text-sm text-grey100">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
