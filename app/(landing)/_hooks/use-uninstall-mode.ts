"use client";

import { useBoolean } from "usehooks-ts";

export function useUninstallMode(initialValue = false) {
  const uninstallMode = useBoolean(initialValue);

  return {
    isUninstallMode: uninstallMode.value,
    toggleMode: uninstallMode.toggle,
    setUninstallMode: uninstallMode.setValue,
  };
}
