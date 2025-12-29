"use client";

import { useBoolean } from "usehooks-ts";

export function useSyncDialog() {
  const syncDialog = useBoolean(false);

  return {
    isSyncDialogOpen: syncDialog.value,
    openSyncDialog: syncDialog.setTrue,
    closeSyncDialog: syncDialog.setFalse,
    setSyncDialogOpen: syncDialog.setValue,
  };
}
