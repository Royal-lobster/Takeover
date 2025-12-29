"use client";

import { useCallback, useMemo } from "react";
import { APPS } from "@/lib/data/apps";
import { useHomebrewCatalogue } from "@/lib/hooks/use-catalogue";
import type { SearchResult } from "@/lib/integrations/search";
import { useAppSelection } from "./use-app-selection";
import { useBrewCommands } from "./use-brew-commands";
import { useFullCatalogPackages } from "./use-full-catalog-packages";

interface InitialPackage {
  token: string;
  name: string;
  type: "cask" | "formula";
}

export function usePackageSelection(
  initialSelectedAppIds: string[],
  initialCustomPackages: InitialPackage[],
) {
  const { getPackage } = useHomebrewCatalogue();

  // Resolve package types for initial custom packages
  const resolvedInitialPackages = useMemo(() => {
    return initialCustomPackages.map((pkg) => {
      const cataloguePackage = getPackage(pkg.token);
      return {
        ...pkg,
        type: cataloguePackage?.type || pkg.type,
      };
    });
  }, [initialCustomPackages, getPackage]);

  // Shared tokens that came from URL
  const sharedCustomTokens = useMemo(
    () => new Set(resolvedInitialPackages.map((pkg) => pkg.token)),
    [resolvedInitialPackages],
  );

  // App selection state
  const {
    selectedApps,
    toggleApp,
    clearAll: clearApps,
  } = useAppSelection(initialSelectedAppIds);

  // Custom package selection state
  const {
    customPackages,
    selectedCustomPackages,
    selectedCustomPackagesMap,
    toggleCustomPackage,
    addCustomPackage,
    removeCustomPackage,
  } = useFullCatalogPackages(resolvedInitialPackages, sharedCustomTokens);

  // Brew commands derived from selections
  const { brewCommand, uninstallCommand, selectedTokens } = useBrewCommands(
    selectedApps,
    selectedCustomPackagesMap,
  );

  // Total selection count
  const selectedCount = selectedApps.size + selectedCustomPackages.size;

  // Extract selected app names for analytics
  const selectedAppNames = useMemo(() => {
    return Array.from(selectedApps)
      .map((appId) => APPS.find((app) => app.id === appId)?.brewName)
      .filter((name): name is string => Boolean(name));
  }, [selectedApps]);

  // Clear all selections (respecting shared items from URL)
  const clearAll = useCallback(() => {
    clearApps();
    for (const token of customPackages.keys()) {
      if (!sharedCustomTokens.has(token)) {
        removeCustomPackage(token);
      }
    }
  }, [clearApps, customPackages, sharedCustomTokens, removeCustomPackage]);

  // Handle selecting a package from search
  const handleSelectPackage = useCallback(
    (pkg: SearchResult) => {
      // Check if it's a curated app first
      const existingApp = APPS.find((app) => app.brewName === pkg.token);
      if (existingApp) {
        toggleApp(existingApp.id);
        return;
      }

      // Resolve type from catalogue if available
      const cataloguePackage = getPackage(pkg.token);
      const resolvedType = cataloguePackage?.type || pkg.type;

      addCustomPackage({
        token: pkg.token,
        name: pkg.name,
        type: resolvedType,
      });

      toggleCustomPackage(pkg.token);
    },
    [toggleApp, addCustomPackage, toggleCustomPackage, getPackage],
  );

  return {
    // App selection
    selectedApps,
    toggleApp,

    // Custom package selection
    customPackages,
    selectedCustomPackages,
    sharedCustomTokens,
    toggleCustomPackage,
    removeCustomPackage,
    handleSelectPackage,

    // Derived values
    selectedCount,
    selectedAppNames,
    selectedTokens,
    brewCommand,
    uninstallCommand,

    // Actions
    clearAll,
  };
}
