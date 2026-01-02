"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFullCatalog } from "./use-full-catalog";
import { usePackageStore } from "./use-package-store";

interface InitialPackage {
  token: string;
  name: string;
  type: "cask" | "formula";
}

/**
 * Handles URL-based initialization of packages.
 * Stores sharedFullCatalogTokens directly in the Zustand store.
 */
export function useUrlInitialization(
  initialSelectedAppIds: string[],
  initialFullCatalogPackages: InitialPackage[],
) {
  const { getPackage } = useFullCatalog();
  const params = useSearchParams();
  const hasKitName = params.get("name");
  const initializedSignatureRef = useRef<string | null>(null);

  // Initialize from URL on mount or when URL parameters change
  const initializeFromUrl = usePackageStore((state) => state.initializeFromUrl);
  const hydrated = usePackageStore((state) => state.hydrated);

  useEffect(() => {
    // Only initialize from URL if we have a kit name parameter
    // This allows persisted state to work when there's no kit name
    if (
      !hydrated ||
      !hasKitName ||
      (initialSelectedAppIds.length === 0 &&
        initialFullCatalogPackages.length === 0)
    ) {
      return;
    }

    // Prevent re-initializing when the same kit parameters are seen again
    const signature = JSON.stringify({
      kit: hasKitName,
      apps: initialSelectedAppIds.slice().sort(),
      packages: initialFullCatalogPackages
        .slice()
        .map((pkg) => ({ ...pkg }))
        .sort((a, b) => a.token.localeCompare(b.token)),
    });

    if (initializedSignatureRef.current === signature) {
      return;
    }

    initializedSignatureRef.current = signature;

    // Use the resolved packages here to avoid dependency issues
    const resolvedPackages = initialFullCatalogPackages.map((pkg) => {
      const catalogPackage = getPackage(pkg.token);
      return {
        ...pkg,
        type: catalogPackage?.type || pkg.type,
      };
    });
    initializeFromUrl(initialSelectedAppIds, resolvedPackages);
  }, [
    hydrated,
    hasKitName,
    initialSelectedAppIds,
    initialFullCatalogPackages,
    getPackage,
    initializeFromUrl,
  ]);
}
