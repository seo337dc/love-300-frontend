"use client";

import { useEffect, useRef, useState } from "react";
import Table from "@/component/common/Table";
import { getPatients } from "@/lib/api";
import type { TPatient } from "@/types";

const MainView = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const [patients, setPatients] = useState<TPatient[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page: number) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      const res = await getPatients({ _page: page });

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

  // 초기 데이터 로드
  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col px-24 py-4">
      <section ref={sectionRef} className="w-full h-[90vh] overflow-y-auto">
        <Table list={patients} />
        {isLoading && <div className="text-center py-4">로딩 중...</div>}
        <div ref={observerRef} className="h-10 bg-gray-200" /> {/* 관찰 대상 */}
      </section>
    </div>
  );
};

export default MainView;
