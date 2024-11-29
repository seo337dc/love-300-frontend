"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Table from "@/component/common/Table";
import { getPatients } from "@/lib/api";
import { statusLabelMap, STATUS_LIST } from "@/util";
import type { FilterStatus, Status, TPatient } from "@/types";

const MainView = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const [patients, setPatients] = useState<TPatient[]>([]);
  const [statusList, setStatusList] = useState<FilterStatus[]>(STATUS_LIST);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page: number, statuses: Status[]) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const res = await getPatients({ _page: page, statuses });

      if (!!res) {
        setPatients((prev) => [...prev, ...res.data]);
        setHasMore(!!res.next); // next가 있으면 true, 없으면 false
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
        rootMargin: "0px",
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
    fetchData(page, filterStatus);
  }, [page, statusList]);

  const resultInfo = useMemo(() => {
    const initObj = {
      SCREENED: 0,
      OBSERVING: 0,
      DONE: 0,
      ERROR: 0,
      DNR: 0,
    } as Record<FilterStatus["value"], number>;

    const statusCounts = patients.reduce((acc, { status }) => {
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, initObj);

    return statusCounts;
  }, [patients]);

  return (
    <div className="flex min-h-screen flex-col px-24 py-4">
      <section className="flex gap-4 p-4">
        <span>전체 {patients.length}</span>
        <span>|</span>

        {statusList.map((status) => (
          <div key={status.value} className="flex items-center gap-1">
            <span className="material-icons cursor-pointer">
              {status.selected ? "check_box" : "check_box_outline_blank"}
            </span>
            <span>{statusLabelMap[status.value]}</span>
            <span>{resultInfo[status.value] || 0}</span>
          </div>
        ))}
      </section>
      <section ref={sectionRef} className="w-full h-[90vh] overflow-y-auto">
        <Table list={patients} />
        {isLoading && <div className="text-center py-4">로딩 중...</div>}
        <div ref={observerRef} className="h-10 bg-gray-200" /> {/* 관찰 대상 */}
      </section>
    </div>
  );
};

export default MainView;
