"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useRef } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import type { ReactNode } from "react";

interface IQueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: IQueryProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const queryClient = useRef<QueryClient>();
  const queryCache = useRef<QueryCache>();

  if (!queryCache.current) {
    queryCache.current = new QueryCache();
  }

  if (!queryClient.current) {
    queryClient.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1, //재시도 횟수 - default 3
        },
      },
      queryCache: queryCache.current,
    });
  }

  queryCache.current.config = useMemo(
    () => ({
      onError: async (e) => {
        const err = e as any;
        console.error(err);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, router]
  );

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
