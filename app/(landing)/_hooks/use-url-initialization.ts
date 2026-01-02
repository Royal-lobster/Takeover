"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useFullCatalog } from "./use-full-catalog";
import { usePackageStore } from "./use-package-store";

interface InitialPackage {
  token: string;
  name: string;
  type: "cask" | "formula";
}

/**
 * Handles URL-based initialization of packages.
 * Returns sharedFullCatalogTokens for tracking URL-shared packages.
 */
export function useUrlInitialization(
  initialSelectedAppIds: string[],
  initialFullCatalogPackages: InitialPackage[],
) {
  const { getPackage } = useFullCatalog();
  const params = useSearchParams();
  const hasKitName = params.get("name");

  // Resolve package types for initial full catalog packages
  const resolvedInitialPackages = useMemo(() => {
    return initialFullCatalogPackages.map((pkg) => {
      const catalogPackage = getPackage(pkg.token);
      return {
        ...pkg,
        type: catalogPackage?.type || pkg.type,
      };
    });
  }, [initialFullCatalogPackages, getPackage]);

  // Shared tokens that came from URL
  const sharedFullCatalogTokens = useMemo(
    () => new Set(resolvedInitialPackages.map((pkg) => pkg.token)),
    [resolvedInitialPackages],
  );

  // Initialize from URL on mount or when URL parameters change
  const initializeFromUrl = usePackageStore((state) => state.initializeFromUrl);
  const hydrated = usePackageStore((state) => state.hydrated);

  useEffect(() => {
    // Only initialize from URL if we have a kit name parameter
    // This allows persisted state to work when there's no kit name
    if (
      hydrated &&
      hasKitName &&
      (initialSelectedAppIds.length > 0 || resolvedInitialPackages.length > 0)
    ) {
      initializeFromUrl(initialSelectedAppIds, resolvedInitialPackages);
    }
  }, [
    hydrated,
    hasKitName,
    initialSelectedAppIds,
    resolvedInitialPackages,
    initializeFromUrl,
  ]);

  return { sharedFullCatalogTokens };
}
