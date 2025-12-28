"use client";

import { useQuery } from "@tanstack/react-query";
import { useDeferredValue, useMemo } from "react";
import { type SearchResult, searchHomebrewCatalogue } from "../../_actions";

export const homebrewSearchKeys = {
  all: ["homebrew-search"] as const,
  search: (query: string) => [...homebrewSearchKeys.all, query] as const,
};

export function useHomebrewSearch(query: string) {
  const deferredQuery = useDeferredValue(query);

  const { data, isLoading, error, isFetching } = useQuery<
    SearchResult[],
    Error
  >({
    queryKey: homebrewSearchKeys.search(deferredQuery),
    queryFn: () => searchHomebrewCatalogue(deferredQuery),
    enabled: deferredQuery.trim().length >= 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  });

  const isSearching = isLoading || isFetching || query !== deferredQuery;

  return useMemo(
    () => ({
      results: data ?? [],
      isSearching,
      error,
      query: deferredQuery,
    }),
    [data, isSearching, error, deferredQuery],
  );
}
