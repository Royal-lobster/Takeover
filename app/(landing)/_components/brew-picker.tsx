"use client";

import Fuse from "fuse.js";
import * as React from "react";
import {
  APPS,
  generateBrewCommand,
  generateUninstallCommand,
} from "@/lib/data/apps";
import type { App, AppCategory } from "@/lib/schema";
import type { SearchResult } from "../_actions";
import { AppCard } from "./app-card";
import { CatalogueSearchCTA } from "./catalogue-search-cta";
import { CategoryFilter } from "./category-filter";
import { CategorySection } from "./category-section";
import { CommandFooter } from "./command-footer";
import { CustomPackagesSection } from "./custom-package-card";
import { Header } from "./header";
import { HomebrewSearchDialog } from "./homebrew-search-dialog";

interface BrewPickerProps {
  apps: Array<App>;
  categories: Array<{ id: AppCategory; label: string }>;
}

type CustomPackage = {
  token: string;
  name: string;
  type: "cask" | "formula";
};

function generateCommandWithCustom(
  appIds: Array<string>,
  customPackages: Map<string, CustomPackage>,
  mode: "install" | "uninstall",
): string {
  const baseCommand =
    mode === "install"
      ? generateBrewCommand(appIds)
      : generateUninstallCommand(appIds);

  const customCasks: string[] = [];
  const customFormulae: string[] = [];

  for (const pkg of customPackages.values()) {
    if (pkg.type === "cask") {
      customCasks.push(pkg.token);
    } else {
      customFormulae.push(pkg.token);
    }
  }

  const customCommands: string[] = [];
  const verb = mode === "install" ? "install" : "uninstall";

  if (customCasks.length > 0) {
    customCommands.push(`brew ${verb} --cask ${customCasks.join(" ")}`);
  }
  if (customFormulae.length > 0) {
    customCommands.push(`brew ${verb} ${customFormulae.join(" ")}`);
  }

  const allCommands = [baseCommand, ...customCommands].filter(Boolean);
  return allCommands.join(" && ");
}

export function BrewPicker({ apps, categories }: BrewPickerProps) {
  const [selectedApps, setSelectedApps] = React.useState<Set<string>>(
    new Set(),
  );
  const [customPackages, setCustomPackages] = React.useState<
    Map<string, CustomPackage>
  >(new Map());
  const [selectedCategory, setSelectedCategory] = React.useState<
    AppCategory | "all"
  >("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [isUninstallMode, setIsUninstallMode] = React.useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = React.useState(false);

  const fuse = React.useMemo(
    () =>
      new Fuse(apps, {
        keys: ["name", "description", "brewName"],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [apps],
  );

  const filteredApps = React.useMemo(() => {
    let result: Array<App>;

    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery.trim());
      result = results.map((r) => r.item);
    } else {
      result = apps;
    }

    if (selectedCategory !== "all") {
      result = result.filter((app) => app.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory, fuse, apps]);

  const appsByCategory = React.useMemo(() => {
    const grouped = new Map<AppCategory, Array<App>>();
    for (const category of categories) {
      const categoryApps = filteredApps.filter(
        (app) => app.category === category.id,
      );
      if (categoryApps.length > 0) {
        grouped.set(category.id, categoryApps);
      }
    }
    return grouped;
  }, [filteredApps, categories]);

  const selectedCount = selectedApps.size + customPackages.size;

  const brewCommand = generateCommandWithCustom(
    Array.from(selectedApps),
    customPackages,
    "install",
  );
  const uninstallCommand = generateCommandWithCustom(
    Array.from(selectedApps),
    customPackages,
    "uninstall",
  );

  const selectedTokens = React.useMemo(() => {
    const tokens = new Set<string>();
    for (const appId of selectedApps) {
      const app = APPS.find((a) => a.id === appId);
      if (app) {
        tokens.add(app.brewName);
      }
    }
    for (const token of customPackages.keys()) {
      tokens.add(token);
    }
    return tokens;
  }, [selectedApps, customPackages]);

  const handleToggle = (appId: string) => {
    setSelectedApps((prev) => {
      const next = new Set(prev);
      if (next.has(appId)) {
        next.delete(appId);
      } else {
        next.add(appId);
      }
      return next;
    });
  };

  const handleSelectPackage = React.useCallback((pkg: SearchResult) => {
    const existingApp = APPS.find((app) => app.brewName === pkg.token);
    if (existingApp) {
      setSelectedApps((prev) => {
        const next = new Set(prev);
        if (next.has(existingApp.id)) {
          next.delete(existingApp.id);
        } else {
          next.add(existingApp.id);
        }
        return next;
      });
      return;
    }

    setCustomPackages((prev) => {
      const next = new Map(prev);
      if (next.has(pkg.token)) {
        next.delete(pkg.token);
      } else {
        next.set(pkg.token, {
          token: pkg.token,
          name: pkg.name,
          type: pkg.type,
        });
      }
      return next;
    });
  }, []);

  const handleCopy = async () => {
    const command = isUninstallMode ? uninstallCommand : brewCommand;
    if (!command) return;
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClearAll = () => {
    setSelectedApps(new Set());
    setCustomPackages(new Map());
  };

  const handleToggleMode = () => {
    setIsUninstallMode((prev) => !prev);
  };

  const handleRemoveCustomPackage = React.useCallback((token: string) => {
    setCustomPackages((prev) => {
      const next = new Map(prev);
      next.delete(token);
      return next;
    });
  }, []);

  const showCategorySections = selectedCategory === "all";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <Header
          selectedCount={selectedCount}
          onClearAll={handleClearAll}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-2">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </div>

      <main className="flex-1 pb-24">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="mt-2">
            {filteredApps.length > 0 ? (
              showCategorySections ? (
                <div className="space-y-8">
                  {Array.from(appsByCategory.entries()).map(
                    ([categoryId, categoryApps]) => (
                      <CategorySection
                        key={categoryId}
                        categoryId={categoryId}
                        apps={categoryApps}
                        categories={categories}
                        selectedApps={selectedApps}
                        onToggle={handleToggle}
                      />
                    ),
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      isSelected={selectedApps.has(app.id)}
                      onToggle={handleToggle}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="py-16 text-center font-mono text-sm text-muted-foreground">
                No apps found for &quot;{searchQuery}&quot;
              </div>
            )}

            <CustomPackagesSection
              packages={customPackages}
              onRemove={handleRemoveCustomPackage}
            />

            <CatalogueSearchCTA
              onOpenSearch={() => setIsSearchDialogOpen(true)}
            />
          </div>
        </div>
      </main>

      <CommandFooter
        brewCommand={brewCommand}
        uninstallCommand={uninstallCommand}
        selectedCount={selectedCount}
        copied={copied}
        isUninstallMode={isUninstallMode}
        onCopy={handleCopy}
        onToggleMode={handleToggleMode}
      />

      <HomebrewSearchDialog
        open={isSearchDialogOpen}
        onOpenChange={setIsSearchDialogOpen}
        onSelectPackage={handleSelectPackage}
        selectedTokens={selectedTokens}
      />
    </div>
  );
}
