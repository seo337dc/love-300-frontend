"use client";

import { Dispatch, SetStateAction } from "react";
import moment from "moment";

import Label from "./Label";
import FilterState from "./FilterState";

import IconCopy from "@/assets/icon/icon-copy.svg";
import { DEFAULT_SCREEN_DATA, sortPatientData } from "@/util";
import { useSortStore } from "@/store";
import type { TPatient } from "@/types";

type TProps = {
  list: TPatient[];
  setList: Dispatch<SetStateAction<TPatient[]>>;
};
const Table = ({ list, setList }: TProps) => {
  const { sortType, orderType, setSort, setOrder } = useSortStore();

  const handleCopy = (emr_id: number) => {
    navigator.clipboard
      .writeText(emr_id.toString())
      .then(() => alert("환자 번호를 복사하였습니다."))
      .catch(() => alert("환자 번호를 복사하지 못하였습니다."));
  };

  const handleSortChange = (newSortType: string) => {
    // 정렬 타입 변경
    if (newSortType !== sortType) {
      setSort(newSortType);
      setOrder("down"); // 새 정렬 타입일 경우 기본값 내림차순으로

      const sortedData = sortPatientData(list, newSortType, "down");
      setList(sortedData);
    } else {
      // 정렬 방향 토글
      setOrder(orderType === "down" ? "up" : "down");
      const sortedData = sortPatientData(
        list,
        newSortType,
        orderType === "down" ? "up" : "down"
      );

      setList(sortedData);
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-neutral3 border-b-neutral3 border-b-2">
        <thead className="bg-gray300">
          <tr>
            <th className="p-4 w-14 text-sm text-left">Status</th>
            <th className="p-4 min-w-40 text-left flex items-center justify-between">
              <span>Patient Info</span>
              <FilterState
                able={sortType === "emr_id"}
                filterType={orderType}
                onClick={() => handleSortChange("emr_id")}
              />
            </th>
            <th className="p-4 text-sm text-left">Location</th>
            <th className="p-4 text-sm text-left border-r border-neutral3">
              <span>Department</span>
            </th>
            <th className="p-4 text-sm text-left">Screened Type</th>
            <th className="p-4 text-sm text-left border-r border-neutral3 flex items-center justify-between">
              <span>Screened Date</span>
              <FilterState
                able={sortType === "alert_date"}
                filterType={orderType}
                onClick={() => handleSortChange("alert_date")}
              />
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>SBP</span>
                <FilterState
                  able={sortType === "SBP"}
                  filterType={orderType}
                  onClick={() => handleSortChange("SBP")}
                />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>DBP</span>
                <FilterState
                  able={sortType === "DBP"}
                  filterType={orderType}
                  onClick={() => handleSortChange("DBP")}
                />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>PR</span>
                <FilterState
                  able={sortType === "PR"}
                  filterType={orderType}
                  onClick={() => handleSortChange("PR")}
                />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>RR</span>
                <FilterState
                  able={sortType === "RR"}
                  filterType={orderType}
                  onClick={() => handleSortChange("RR")}
                />
              </div>
            </th>
            <th className="p-4 text-sm text-left">
              <div className="flex items-center justify-between">
                <span>BT</span>

                <FilterState
                  able={sortType === "BT"}
                  filterType={orderType}
                  onClick={() => handleSortChange("BT")}
                />
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
