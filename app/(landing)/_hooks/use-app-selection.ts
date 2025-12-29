"use client";

import { useCallback, useMemo, useState } from "react";
import { useIsomorphicLayoutEffect, useLocalStorage } from "usehooks-ts";

export function useAppSelection(initialSelectedIds: string[] = []) {
  const [mounted, setMounted] = useState(false);
  const [selectedAppIds, setSelectedAppIds] = useLocalStorage<string[]>(
    "installkit-selected-apps",
    initialSelectedIds,
  );

  // Use initial values during SSR, localStorage values after hydration
  const effectiveSelectedIds = mounted ? selectedAppIds : initialSelectedIds;

  const selectedApps = useMemo(
    () => new Set(effectiveSelectedIds),
    [effectiveSelectedIds],
  );

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  const toggleApp = useCallback(
    (appId: string) => {
      if (!mounted) return; // Don't update during SSR
      setSelectedAppIds((prev) => {
        const currentSet = new Set(prev);
        if (currentSet.has(appId)) {
          currentSet.delete(appId);
        } else {
          currentSet.add(appId);
        }
        return Array.from(currentSet);
      });
    },
    [setSelectedAppIds, mounted],
  );

  const clearAll = useCallback(() => {
    if (!mounted) return; // Don't update during SSR
    setSelectedAppIds([]);
  }, [setSelectedAppIds, mounted]);

  return {
    selectedApps,
    toggleApp,
    clearAll,
  };
}
