"use client";

import moment from "moment";

import Label from "./Label";
import FilterState from "./FilterState";
import IconCopy from "@/assets/icon/icon-copy.svg";
import { DEFAULT_SCREEN_DATA } from "@/util";

import type { TPatient } from "@/types";

type TProps = {
  list: TPatient[];
};
const Table = ({ list }: TProps) => {
  const handleCopy = (emr_id: number) => {
    navigator.clipboard
      .writeText(emr_id.toString()) // 복사할 데이터 (여기서는 emr_id)
      .then(() => alert("환자 번호를 복사하였습니다."))
      .catch(() => alert("환자 번호를 복사하지 못하였습니다."));
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-neutral3 border-b-neutral3 border-b-2">
        <thead className="bg-gray300">
          <tr>
            <th className="p-4 w-14 text-sm text-left">Status</th>
            <th className="p-4 min-w-40 text-left flex items-center justify-between">
              <span>Patient Info</span>
              <FilterState filterType="none" />
            </th>
            <th className="p-4 text-sm text-left">Location</th>
            <th className="p-4 text-sm text-left border-r border-neutral3">
              <span>Department</span>
            </th>
            <th className="p-4 text-sm text-left">Screened Type</th>
            <th className="p-4 text-sm text-left border-r border-neutral3 flex items-center justify-between">
              <span>Screened Date</span>
              <FilterState filterType="none" />
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>SBP</span>
                <FilterState filterType="none" />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>DBP</span>
                <FilterState filterType="none" />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>PR</span>
                <FilterState filterType="none" />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>RR</span>
                <FilterState filterType="none" />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>BT</span>
                <FilterState filterType="none" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-grey200">
          {list.map((item) => {
            const screeningDataMap = item.screening_data.reduce(
              (acc, screenData) => {
                acc[screenData.type] = screenData.value;
                return acc;
              },
              { ...DEFAULT_SCREEN_DATA }
            );

            return (
              <tr
                key={item.emr_id}
                className="font-semibold group hover:bg-blue2"
              >
                <td className="p-2 group-hover:bg-blue2">
                  <Label status={item.status} />
                </td>
                <td className="p-2 group-hover:bg-blue2">
                  <p>
                    {item.name} ({item.sex}/{item.age})
                  </p>
                  <div className="flex justify-between">
                    <span className="text-sm text-netural2 font-semibold">
                      {item.emr_id}
                    </span>
                    <div
                      className="cursor-pointer"
                      onClick={() => handleCopy(item.emr_id)}
                    >
                      <IconCopy className="text-gray-500" />
                    </div>
                  </div>
                </td>
                <td className="p-2 group-hover:bg-blue2">
                  <p>{item.location}</p>
                  <p className="text-sm text-netural2 font-semibold">
                    {moment(item.admission_dt).format("YYYY-MM-DD")}
                  </p>
                </td>
                <td className="p-2 border-r border-neutral3 group-hover:bg-blue2">
                  <p>{item.department}</p>
                  <p className="text-sm text-netural2 font-semibold">
                    {item.doctor}
                  </p>
                </td>
                <td className="p-2 bg-gray500 group-hover:bg-blue2">
                  <p>
                    {item.alert.type}{" "}
                    {parseFloat(item.alert.value.toFixed(2)).toString()}
                  </p>
                </td>
                <td className="p-2 border-r border-neutral3 bg-gray500 group-hover:bg-blue2">
                  <p>
                    {item.alert.date &&
                      moment(item.alert.date).format("MM.DD hh:mm")}
                  </p>
                </td>
                <td className="p-2 group-hover:bg-blue2">
                  {parseFloat(screeningDataMap.SBP.toFixed(2)).toString()}
                </td>
                <td className="p-2 group-hover:bg-blue2">
                  {parseFloat(screeningDataMap.DBP.toFixed(2)).toString()}
                </td>
                <td className="p-2 group-hover:bg-blue2">
                  {parseFloat(screeningDataMap.PR.toFixed(2)).toString()}
                </td>
                <td className="p-2 group-hover:bg-blue2">
                  {parseFloat(screeningDataMap.RR.toFixed(2)).toString()}
                </td>
                <td className="p-2 group-hover:bg-blue2">
                  {parseFloat(screeningDataMap.BT.toFixed(2)).toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
