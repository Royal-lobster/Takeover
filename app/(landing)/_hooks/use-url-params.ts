"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { APPS } from "@/lib/data/apps";

export interface UrlParams {
  kitName: string | undefined;
  kitDescription: string | undefined;
  initialSelectedAppIds: string[];
  initialCustomPackages: Array<{
    token: string;
    name: string;
    type: "cask" | "formula";
  }>;
}

export function useUrlParams(): UrlParams {
  const params = useSearchParams();

  return useMemo(() => {
    const kitName = params.get("name") || undefined;
    const kitDescription = params.get("description") || undefined;
    const packagesParam = params.get("packages") || "";

    const packageTokens = packagesParam
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);

    const selectedAppIds: string[] = [];
    const externalTokens: string[] = [];

    for (const token of packageTokens) {
      const app = APPS.find((a) => a.id === token || a.brewName === token);
      if (app) {
        selectedAppIds.push(app.id);
      } else if (token) {
        externalTokens.push(token);
      }
    }

    const initialCustomPackages = externalTokens.map((token) => ({
      token,
      name: token,
      type: "cask" as const,
    }));

    return {
      kitName,
      kitDescription,
      initialSelectedAppIds: selectedAppIds,
      initialCustomPackages,
    };
  }, [params]);
}
