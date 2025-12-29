"use client";

import { useBoolean } from "usehooks-ts";

export function useShareDialog() {
  const shareDialog = useBoolean(false);

  return {
    isShareDialogOpen: shareDialog.value,
    openShareDialog: shareDialog.setTrue,
    closeShareDialog: shareDialog.setFalse,
    setShareDialogOpen: shareDialog.setValue,
  };
}
