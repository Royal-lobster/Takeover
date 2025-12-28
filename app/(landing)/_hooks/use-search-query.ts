"use client";

import { useQueryState } from "nuqs";

export function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useQueryState("search", {
    defaultValue: "",
    clearOnDefault: true,
  });

  return {
    searchQuery: searchQuery ?? "",
    setSearchQuery,
  };
}
