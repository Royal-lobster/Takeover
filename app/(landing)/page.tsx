"use client";

import Fuse from "fuse.js";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { APPS } from "@/lib/data/apps";
import type { App, AppCategory } from "@/lib/data/schema";
import { CATEGORIES } from "@/lib/data/schema";
import { useHomebrewCatalogue } from "@/lib/hooks/use-catalogue";
import type { SearchResult } from "@/lib/integrations/search";
import { AppCard } from "./_components/app-card";
import { Categories } from "./_components/categories";
import { CommandFooter } from "./_components/command-footer";
import { FullCatalogPackagesSection } from "./_components/full-catalog-package";
import { FullCatalogSearch } from "./_components/full-catalog-search";
import { Header } from "./_components/header";
import { ShareDialog } from "./_components/share-dialog";
import { SyncDialog } from "./_components/sync-dialog";
import { useAppSelection } from "./_hooks/use-app-selection";
import { useBrewCommands } from "./_hooks/use-brew-commands";
import { useFullCatalogPackages } from "./_hooks/use-full-catalog-packages";
import { useSearchQuery } from "./_hooks/use-search-query";
import { useShareDialog } from "./_hooks/use-share-dialog";

export default function HomePage() {
  const params = useSearchParams();
  const kitName = params.get("name") || undefined;
  const kitDescription = params.get("description") || undefined;
  const packagesParam = params.get("packages") || "";

  const packageTokens = packagesParam
    .split(",")
    .map((p: string) => p.trim())
    .filter(Boolean);

  const selectedAppIds: string[] = [];
  const externalTokens: string[] = [];

  // First pass: identify which packages are in our curated list
  for (const token of packageTokens) {
    const app = APPS.find((a) => a.id === token || a.brewName === token);
    if (app) {
      selectedAppIds.push(app.id);
    } else if (token) {
      externalTokens.push(token);
    }
  }

  // Pass external tokens to be resolved in the client component
  const initialCustomPackages: Array<{
    token: string;
    name: string;
    type: "cask" | "formula";
  }> = externalTokens.map((token) => ({
    token,
    name: token,
    type: "cask" as const, // Default to cask, will be resolved in client
  }));

  return (
    <AppPickerClient
      kitName={kitName}
      kitDescription={kitDescription}
      initialSelectedAppIds={selectedAppIds}
      initialCustomPackages={initialCustomPackages}
    />
  );
}

interface AppPickerClientProps {
  initialSelectedAppIds?: string[];
  initialCustomPackages?: Array<{
    token: string;
    name: string;
    type: "cask" | "formula";
  }>;
  kitName?: string;
  kitDescription?: string;
}

function AppPickerClient({
  initialSelectedAppIds = [],
  initialCustomPackages = [],
  kitName,
  kitDescription,
}: AppPickerClientProps) {
  // Use catalogue hook to resolve package types
  const { getPackage } = useHomebrewCatalogue();

  // Resolve package types for initial custom packages
  const resolvedInitialPackages = React.useMemo(() => {
    return initialCustomPackages.map((pkg) => {
      const cataloguePackage = getPackage(pkg.token);
      return {
        ...pkg,
        type: cataloguePackage?.type || pkg.type,
      };
    });
  }, [initialCustomPackages, getPackage]);

  // Initialize shared data sets
  const sharedCustomTokens = React.useMemo(
    () => new Set(resolvedInitialPackages.map((pkg) => pkg.token)),
    [resolvedInitialPackages],
  );

  // Local state management hooks
  const { selectedApps, toggleApp, clearAll } = useAppSelection(
    initialSelectedAppIds,
  );

  const {
    customPackages,
    selectedCustomPackages,
    selectedCustomPackagesMap,
    toggleCustomPackage,
    addCustomPackage,
    removeCustomPackage,
  } = useFullCatalogPackages(resolvedInitialPackages, sharedCustomTokens);

  const { brewCommand, uninstallCommand, selectedTokens } = useBrewCommands(
    selectedApps,
    selectedCustomPackagesMap,
  );

  // Share dialog state
  const { isShareDialogOpen, openShareDialog, setShareDialogOpen } =
    useShareDialog();

  // Sync dialog state
  const [isSyncDialogOpen, setIsSyncDialogOpen] = React.useState(false);

  const handleSyncClick = () => {
    setIsSyncDialogOpen(true);
  };

  // Local UI state
  const { searchQuery } = useSearchQuery();
  const [selectedCategory, setSelectedCategory] = React.useState<
    AppCategory | "all"
  >("all");

  // Derived state
  const selectedCount = selectedApps.size + selectedCustomPackages.size;

  // Clear all selections (respecting shared items)
  const handleClearAll = () => {
    clearAll();
    if (customPackages.size > 0) {
      for (const token of customPackages.keys()) {
        if (!sharedCustomTokens.has(token)) {
          removeCustomPackage(token);
        }
      }
    }
  };

  // Search functionality
  const fuse = React.useMemo(
    () =>
      new Fuse(APPS, {
        keys: ["name", "description", "brewName"],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [],
  );

  const filteredApps = React.useMemo(() => {
    let result: Array<App>;

    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery.trim());
      result = results.map((r) => r.item);
    } else {
      result = APPS;
    }

    if (selectedCategory !== "all") {
      result = result.filter((app) => app.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory, fuse]);

  const appsByCategory = React.useMemo(() => {
    const grouped = new Map<AppCategory, Array<App>>();
    for (const category of CATEGORIES) {
      const categoryApps = filteredApps.filter(
        (app) => app.category === category.id,
      );
      if (categoryApps.length > 0) {
        grouped.set(category.id, categoryApps);
      }
    }
    return grouped;
  }, [filteredApps]);

  const handleSelectPackage = React.useCallback(
    (pkg: SearchResult) => {
      const existingApp = APPS.find((app) => app.brewName === pkg.token);
      if (existingApp) {
        toggleApp(existingApp.id);
        return;
      }

      // Resolve type from catalogue if available, otherwise use the provided type
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

  const showCategorySections = selectedCategory === "all";

  // Extract selected app names for analytics
  const selectedAppNames = React.useMemo(() => {
    return Array.from(selectedApps)
      .map((appId) => APPS.find((app) => app.id === appId)?.brewName)
      .filter(Boolean) as string[];
  }, [selectedApps]);

  // Share dialog content
  const shareDialogComponent = (
    <ShareDialog
      open={isShareDialogOpen}
      onOpenChange={setShareDialogOpen}
      selectedAppIds={Array.from(selectedApps)}
      fullCatalogPackageTokens={Array.from(selectedCustomPackages)}
    />
  );

  return (
    <>
      <Header
        selectedCount={selectedCount}
        onClearAll={handleClearAll}
        onSyncClick={handleSyncClick}
      />

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
            <div className="mb-12 border-b border-border/40 pb-8 pt-12">
              <h1 className="text-center text-5xl font-bold tracking-tight sm:text-6xl">
                {kitName}
              </h1>
              {kitDescription && (
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
                  {kitDescription}
                </p>
              )}
            </div>
          )}

          {/* Custom Packages Section */}
          <FullCatalogPackagesSection
            packages={customPackages}
            selectedTokens={selectedCustomPackages}
            sharedTokens={sharedCustomTokens}
            onToggle={toggleCustomPackage}
            onRemove={removeCustomPackage}
            showCheckbox={true}
          />

          {/* Search Results or Categories */}
          {searchQuery.trim() ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Search Results for "{searchQuery}"
                </h2>
              </div>

              {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      isSelected={selectedApps.has(app.id)}
                      onToggle={() => toggleApp(app.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">
                    No apps found matching "{searchQuery}"
                  </p>
                </div>
              )}

              <div className="border-t border-border/40 pt-8">
                <FullCatalogSearch
                  onSelectPackage={handleSelectPackage}
                  selectedTokens={selectedTokens}
                />
              </div>
            </div>
          ) : showCategorySections ? (
            <div className="space-y-12">
              {Array.from(appsByCategory.entries()).map(([category, apps]) => {
                const categoryInfo = CATEGORIES.find((c) => c.id === category);
                if (!categoryInfo) return null;

                return (
                  <section key={category}>
                    <div className="mb-3 flex items-center gap-2">
                      <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {categoryInfo.label}
                      </h2>
                      <span className="font-mono text-[10px] text-muted-foreground/60">
                        ({apps.length})
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {apps.map((app) => (
                        <AppCard
                          key={app.id}
                          app={app}
                          isSelected={selectedApps.has(app.id)}
                          onToggle={() => toggleApp(app.id)}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}

              <div className="border-t border-border/40 pt-8">
                <FullCatalogSearch
                  onSelectPackage={handleSelectPackage}
                  selectedTokens={selectedTokens}
                />
              </div>
            </div>
          ) : (
            // Single category view
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredApps.map((app) => (
                  <AppCard
                    key={app.id}
                    app={app}
                    isSelected={selectedApps.has(app.id)}
                    onToggle={() => toggleApp(app.id)}
                  />
                ))}
              </div>

              <div className="border-t border-border/40 pt-8">
                <FullCatalogSearch
                  onSelectPackage={handleSelectPackage}
                  selectedTokens={selectedTokens}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <CommandFooter
        brewCommand={brewCommand}
        uninstallCommand={uninstallCommand}
        selectedCount={selectedCount}
        selectedApps={selectedAppNames}
        customPackagesCount={selectedCustomPackages.size}
        onShare={openShareDialog}
      />

      {shareDialogComponent}
      <SyncDialog open={isSyncDialogOpen} onOpenChange={setIsSyncDialogOpen} />
    </>
  );
}
