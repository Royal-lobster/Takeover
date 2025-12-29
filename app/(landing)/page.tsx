"use client";

import { useQueryState } from "nuqs";
import { useState } from "react";
import type { AppCategory } from "@/lib/data/schema";
import { CATEGORIES } from "@/lib/data/schema";
import { AppGrid, AppGridByCategory } from "./_components/app-grid-by-category";
import { Categories } from "./_components/categories";
import { CommandFooter } from "./_components/command-footer";
import { FullCatalogPackagesSection } from "./_components/full-catalog-package";
import { Header } from "./_components/header";
import { KitSection } from "./_components/kit-section";
import {
  FullCatalogSearchSection,
  SearchResultsSection,
} from "./_components/search-results-section";
import { useFilteredApps } from "./_hooks/use-filtered-apps";
import { usePackageSelection } from "./_hooks/use-package-selection";
import { useUrlParams } from "./_hooks/use-url-params";

export default function HomePage() {
  // URL parameters
  const {
    kitName,
    kitDescription,
    initialSelectedAppIds,
    initialFullCatalogPackages,
  } = useUrlParams();

  // Package selection state (apps + full catalog packages)
  const {
    selectedApps,
    toggleApp,
    fullCatalogPackages,
    selectedFullCatalogPackages,
    sharedFullCatalogTokens,
    toggleFullCatalogPackage,
    removeFullCatalogPackage,
    handleSelectPackage,
    selectedCount,
    selectedAppNames,
    selectedTokens,
    brewCommand,
    uninstallCommand,
    clearAll,
  } = usePackageSelection(initialSelectedAppIds, initialFullCatalogPackages);

  // UI state
  const [searchQueryRaw] = useQueryState("search", {
    defaultValue: "",
    clearOnDefault: true,
  });
  const searchQuery = searchQueryRaw ?? "";
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | "all">(
    "all",
  );

  // Filtered apps based on search and category
  const { filteredApps, appsByCategory, hasSearchQuery } = useFilteredApps(
    searchQuery,
    selectedCategory,
  );

  const showCategorySections = selectedCategory === "all" && !hasSearchQuery;

  return (
    <>
      <Header selectedCount={selectedCount} onClearAll={clearAll} />

      <main className="flex-1 pb-24">
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-2">
            <Categories
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-4">
          {kitName && (
            <KitSection
              name={kitName}
              description={kitDescription}
              selectedAppIds={initialSelectedAppIds}
              fullCatalogPackages={initialFullCatalogPackages}
              selectedApps={selectedApps}
              selectedTokens={selectedTokens}
              onToggleApp={toggleApp}
              onRemoveFullCatalogPackage={removeFullCatalogPackage}
            />
          )}

          <FullCatalogPackagesSection
            packages={fullCatalogPackages}
            selectedTokens={selectedFullCatalogPackages}
            sharedTokens={sharedFullCatalogTokens}
            onToggle={toggleFullCatalogPackage}
            onRemove={removeFullCatalogPackage}
            showCheckbox={true}
          />

          <AppContent
            hasSearchQuery={hasSearchQuery}
            searchQuery={searchQuery}
            showCategorySections={showCategorySections}
            filteredApps={filteredApps}
            appsByCategory={appsByCategory}
            selectedApps={selectedApps}
            selectedTokens={selectedTokens}
            onToggleApp={toggleApp}
            onSelectPackage={handleSelectPackage}
          />
        </div>
      </main>

      <CommandFooter
        brewCommand={brewCommand}
        uninstallCommand={uninstallCommand}
        selectedCount={selectedCount}
        selectedApps={selectedAppNames}
        fullCatalogPackagesCount={selectedFullCatalogPackages.size}
      />
    </>
  );
}

// --- Content Section Components ---

interface AppContentProps {
  hasSearchQuery: boolean;
  searchQuery: string;
  showCategorySections: boolean;
  filteredApps: import("@/lib/data/schema").App[];
  appsByCategory: Map<AppCategory, import("@/lib/data/schema").App[]>;
  selectedApps: Set<string>;
  selectedTokens: Set<string>;
  onToggleApp: (appId: string) => void;
  onSelectPackage: (
    pkg: import("@/lib/integrations/search").SearchResult,
  ) => void;
}

function AppContent({
  hasSearchQuery,
  searchQuery,
  showCategorySections,
  filteredApps,
  appsByCategory,
  selectedApps,
  selectedTokens,
  onToggleApp,
  onSelectPackage,
}: AppContentProps) {
  if (hasSearchQuery) {
    return (
      <SearchResultsSection
        searchQuery={searchQuery}
        filteredApps={filteredApps}
        selectedApps={selectedApps}
        selectedTokens={selectedTokens}
        onToggleApp={onToggleApp}
        onSelectPackage={onSelectPackage}
      />
    );
  }

  if (showCategorySections) {
    return (
      <div className="space-y-12">
        <AppGridByCategory
          appsByCategory={appsByCategory}
          selectedApps={selectedApps}
          onToggleApp={onToggleApp}
        />
        <FullCatalogSearchSection
          selectedTokens={selectedTokens}
          onSelectPackage={onSelectPackage}
        />
      </div>
    );
  }

  // Single category view
  return (
    <div className="space-y-8">
      <AppGrid
        apps={filteredApps}
        selectedApps={selectedApps}
        onToggleApp={onToggleApp}
      />
      <FullCatalogSearchSection
        selectedTokens={selectedTokens}
        onSelectPackage={onSelectPackage}
      />
    </div>
  );
}
