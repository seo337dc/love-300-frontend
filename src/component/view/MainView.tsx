"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Table from "@/component/common/Table";
import Loading from "@/component/common/Loading";
import { useSortStore } from "@/store";

import { getPatients, getPatientsAll } from "@/lib/api";
import {
  outputStatusCtn,
  sortPatientData,
  statusLabelMap,
  STATUS_LIST,
} from "@/util";

import type { FilterStatus, Status, TPatient } from "@/types";

const MainView = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { sortType, orderType } = useSortStore();

  const [patients, setPatients] = useState<TPatient[]>([]);
  const [statusList, setStatusList] = useState<FilterStatus[]>(STATUS_LIST);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { data: infoAll } = useQuery({
    queryKey: ["/getPatientAll"],
    queryFn: getPatientsAll,
    initialData: null,
  });

  const handleStatus = (filterStatus: FilterStatus) => {
    const resultStatus = statusList.map((status) => {
      if (status.value === filterStatus.value) {
        return { ...status, selected: !filterStatus.selected };
      } else {
        return status;
      }
    });

    setStatusList(resultStatus);
    const resquestStatus = resultStatus
      .filter((status) => !!status.selected)
      .map((status) => status.value);

    fetchFilterData(resquestStatus).then(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  // 무한 스크롤 용 api 함수
  const fetchInfinityData = async (page: number, statuses: Status[]) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const res = await getPatients({ _page: page, statuses });

      if (!!res) {
        const sortedData = sortPatientData(
          patients.concat(res.data),
          sortType,
          orderType
        );

        setPatients(sortedData);
        setHasMore(!!res.next); // next가 있으면 true, 없으면 false
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFilterData = async (statuses: Status[]) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const res = await getPatients({ _page: 1, statuses });

      if (!!res) {
        const sortedData = sortPatientData(res.data, sortType, orderType);

        setPatients(sortedData);
        setHasMore(!!res.next); // next가 있으면 true, 없으면 false
        return true;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // 로딩 시 스크롤 방지
  useEffect(() => {
    if (!sectionRef.current) return;

    if (isLoading) {
      sectionRef.current.style.overflow = "hidden";
    } else {
      sectionRef.current.style.overflow = "";
    }
  }, [isLoading]);

  // 무한 스크롤 처리
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore && !isLoading) {
          setPage((prev) => prev + 1); // 페이지 증가
        }
      },
      {
        root: sectionRef.current || null,
        rootMargin: "0px", // 무한크롤 발생 위치 명확하게...
        threshold: 0.5,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, isLoading]);

  /**
   * 데이터 호출
   * - page: 무한 스크롤
   * - statusList: filter데이터
   */
  useEffect(() => {
    const filterStatus = statusList
      .filter((status) => !!status.selected)
      .map((status) => status.value);
    fetchInfinityData(page, filterStatus);
  }, [page]);

  // useEffect(() => {
  //   console.log("Initial data fetch");
  //   const filterStatus = statusList
  //     .filter((status) => !!status.selected)
  //     .map((status) => status.value);

  //   fetchInfinityData(1, filterStatus); // 초기 데이터를 가져옴
  // }, []);

  return (
    <div className="flex min-h-screen flex-col px-24 py-4">
      <section className="flex gap-4 p-4">
        <span>전체 {infoAll?.totalCtn || 0}</span>
        <span>|</span>

        {statusList.map((status) => (
          <div key={status.value} className="flex items-center gap-1">
            <span
              className="material-icons cursor-pointer"
              onClick={() => handleStatus(status)}
            >
              {status.selected ? "check_box" : "check_box_outline_blank"}
            </span>
            <span>{statusLabelMap[status.value]}</span>
            <span>{infoAll && outputStatusCtn(status.value, infoAll)}</span>
          </div>
        ))}
      </section>
      <section
        ref={sectionRef}
        className="relative w-full h-[90vh] overflow-y-auto"
      >
        {isLoading && <Loading />}
        <Table list={patients} setList={setPatients} />
        <div ref={observerRef} className="h-10 bg-gray-200" /> {/* 관찰 대상 */}
      </section>
    </div>
  );
};

export default MainView;
